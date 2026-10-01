import { useMemo, useState } from 'react';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function getToday() {
  return new Date().toISOString().split('T')[0];
}

export default function BookingForm({ onSubmit }) {
  const today = useMemo(() => getToday(), []);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    occasion: 'None',
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  function validate(values) {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.date) {
      nextErrors.date = 'Please select a reservation date.';
    } else if (values.date < today) {
      nextErrors.date = 'Reservation date cannot be in the past.';
    }

    if (!values.time) {
      nextErrors.time = 'Please select a reservation time.';
    }

    const guests = Number(values.guests);
    if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
      nextErrors.guests = 'Guests must be between 1 and 10.';
    }

    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === 'guests' ? Number(value) : value
    }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSubmit(formData);
    setErrors({});
    setFormData({
      date: '',
      time: '',
      guests: 2,
      occasion: 'None',
      name: '',
      email: ''
    });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p id="name-error" className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <p id="email-error" className="error">{errors.email}</p>}
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="date">Choose date</label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'date-error' : undefined}
          />
          {errors.date && <p id="date-error" className="error">{errors.date}</p>}
        </div>

        <div className="field">
          <label htmlFor="time">Choose time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? 'time-error' : undefined}
          >
            <option value="">Select time</option>
            {availableTimes.map((time) => (
              <option value={time} key={time}>{time}</option>
            ))}
          </select>
          {errors.time && <p id="time-error" className="error">{errors.time}</p>}
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="guests">Number of guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
          />
          {errors.guests && <p id="guests-error" className="error">{errors.guests}</p>}
        </div>

        <div className="field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business dinner</option>
          </select>
        </div>
      </div>

      <button className="btn submit-btn" type="submit">
        Make reservation
      </button>
    </form>
  );
}
