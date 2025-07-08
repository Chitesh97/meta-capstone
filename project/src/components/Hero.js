import React from "react";
import HeroImage from "../assets/restaurant chef B.jpg"
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate("/reservations");
  }

  return (
    <section className="hero-background">
      <div className="hero">
        <div className="hero-text">
          <h1 className="title">Little Lemon </h1>
          <h2 className="subtitle"> Italy </h2>
          <p className="hero-description">Craving something truly Italian? <br />
            Come dine with us at Little Lemon. <br />
            Where every dish tells a story,
            And every bite brings you home.</p>
          <button onClick={handleReservationClick} className="primary">Reserve a table</button>
        </div>
        <img className="hero-image" src={HeroImage} alt="chef" height={300} />
      </div>
    </section>
  )
}