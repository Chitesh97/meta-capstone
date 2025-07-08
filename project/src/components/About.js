import React from "react";
import restaurantImage from "../assets/restaurant.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-heading">Little Lemon</h2>
        <h3 className="about-subheading">Italy</h3>
        <p className="about-description">Welcome to Little Lemon, a cozy family-run Mediterranean restaurant nestled in the heart of Italy. We take pride in serving classic Italian dishes made with fresh, locally sourced ingredients. Blending tradition with a touch of modern flair, every meal is crafted with love and authenticity. Join us for a dining experience that’s warm, flavorful, and truly unforgettable.</p>
      </div>
      <img className="about-image" src={restaurantImage} alt="restaurant" />
    </section>
  )
}