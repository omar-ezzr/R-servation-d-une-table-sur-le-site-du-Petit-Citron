import { useState } from 'react';
import BookingForm from './BookingForm';

export default function BookingSection() {
  const [confirmation, setConfirmation] = useState('');

  function handleBookingSubmit(data) {
    setConfirmation(
      `Reservation confirmed for ${data.guests} guest${data.guests > 1 ? 's' : ''} on ${data.date} at ${data.time}.`
    );
  }

  return (
    <section id="booking" className="booking-section" aria-labelledby="booking-title">
      <div className="container booking-grid">
        <div>
          <p className="eyebrow">Reservations</p>
          <h2 id="booking-title">Book a table</h2>
          <p>
            Choose your date, time, number of guests, and occasion. We will
            validate your information before confirming the reservation.
          </p>
        </div>

        <div>
          <BookingForm onSubmit={handleBookingSubmit} />
          {confirmation && (
            <p className="success-message" role="status" aria-live="polite">
              {confirmation}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
