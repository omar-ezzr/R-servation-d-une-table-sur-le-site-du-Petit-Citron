import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('shows validation errors when required fields are missing', async () => {
    const user = userEvent.setup();
    render(<BookingForm onSubmit={vi.fn()} />);

    await user.click(screen.getByRole('button', { name: /make reservation/i }));

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a reservation date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a reservation time/i)).toBeInTheDocument();
  });

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup();
    render(<BookingForm onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText(/name/i), 'Omar');
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /make reservation/i }));

    expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
  });

  it('submits valid reservation data', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);
    const dateString = futureDate.toISOString().split('T')[0];

    await user.type(screen.getByLabelText(/name/i), 'Omar');
    await user.type(screen.getByLabelText(/email/i), 'omar@example.com');
    await user.type(screen.getByLabelText(/choose date/i), dateString);
    await user.selectOptions(screen.getByLabelText(/choose time/i), '19:00');
    await user.clear(screen.getByLabelText(/number of guests/i));
    await user.type(screen.getByLabelText(/number of guests/i), '4');

    await user.click(screen.getByRole('button', { name: /make reservation/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Omar',
        email: 'omar@example.com',
        date: dateString,
        time: '19:00',
        guests: 4
      })
    );
  });
});
