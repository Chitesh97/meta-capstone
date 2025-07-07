import React, { useState } from "react";


export default function BookingForm() {
  const currentDate = new Date().toLocaleDateString();
  const minGuests = 1;
  const maxGuests = 10;
  const listOfOccasion = ['Birthday', 'Anniversary', 'Meeting', 'Other'];
  const availableTimeSlots = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  const [resDate, setResDate] = useState(currentDate);
  const [resTime, setResTime] = useState(availableTimeSlots[0]);
  const [guestCount, setGuestCount] = useState(minGuests);
  const [occasion, setOccasion] = useState(listOfOccasion[0]);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  function clearForm() {
    setResDate(currentDate);
    setResTime(availableTimeSlots[0]);
    setGuestCount(minGuests);
    setOccasion(listOfOccasion[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ currentDate, resDate, resTime, guestCount, occasion });
    setIsPopUpVisible(true);
    clearForm();
  }

  return (
    <section className="reserve-table-background">
      <div className="container">
        <h1 className="title">Reserve a table</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="res-date">When are you visiting?</label>
            <input
              type="date"
              name="res-date"
              min={currentDate}
              value={resDate}
              onChange={(e) => setResDate(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Select the time</label>
            <select
              name="res-time"
              value={resTime}
              onChange={(e) => setResTime(e.target.value)}>
              {availableTimeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="guest-count">Number of guest(s)</label>
            <input
              type="number"
              name="guest-count"
              min={minGuests}
              max={maxGuests}
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              {listOfOccasion.map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>
          <button className="primary" type="submit"> Reserve a table </button>
        </form>
      </div>

      {isPopUpVisible && <h2>Submitted!</h2>}
    </section>
  )
}