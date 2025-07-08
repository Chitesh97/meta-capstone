import React, { useReducer, useState } from "react";
import { fetchAPI } from "./Api";
import PopUp from "./Popup";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const minGuests = 1;
  const maxGuests = 10;
  const listOfOccasion = ['Birthday', 'Anniversary', 'Meeting', 'Other'];

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  }

  const initializeTimes = (initializeAvailableTimes) => [
    ...initializeAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [guestCount, setGuestCount] = useState('');
  const [occasion, setOccasion] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ resDate, resTime, guestCount, occasion });
    setIsFormSubmitted(true);
    if (resDate !== '' && resTime !== '' && guestCount !== '' && occasion !== '') {
      setIsPopUpVisible(true);
    }
  }

  function closePopUp() {
    setIsFormSubmitted(false);
    navigate('/');
  }

  return (
    <section className="reserve-table-background">
      <div className="container">
        <h1 className="title" data-test-id="booking-title">Reserve a table</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="res-date">When are you visiting?</label>
            <input
              type="date"
              name="res-date"
              value={resDate}
              className={isFormSubmitted && !resDate ? "error" : ""}
              onChange={(e) => {
                setResDate(e.target.value);
                dispatchOnDateChange(e.target.value)
              }} />
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Select the time</label>
            <select
              name="res-time"
              value={resTime}
              className={isFormSubmitted && !resTime ? "error" : ""}
              onChange={(e) => setResTime(e.target.value)}>
              {availableTimes.map(slot => (
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
              className={isFormSubmitted && !guestCount ? "error" : ""}
              onChange={(e) => setGuestCount(e.target.value)} />
          </div>
          <div className="form-item">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              value={occasion}
              className={isFormSubmitted && !occasion ? "error" : ""}
              onChange={(e) => setOccasion(e.target.value)}>
              <option value="Select">Select...</option>
              {listOfOccasion.map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>
          <button className="primary" type="submit"> Reserve a table </button>
        </form>
      </div>

      {isPopUpVisible &&
        <PopUp
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
          onClose={closePopUp}
        />
      }
    </section>
  )
}