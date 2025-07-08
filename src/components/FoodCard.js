import React from "react";

export default function FoodCard({ ...item }) {
  return (
    <div className="specials-card" key={item.id}>
      <div className="specials-image-container">
        <img src={item.imageSrc} alt={item.label} height={200} />
      </div>
      <div className="specials-content-container">
        <div className="specials-header">
          <p className="specials-heading">{item.label}</p>
          <p className="specials-price">{item.price}</p>
        </div>
        <p className="specials-description">{item.description}</p>
      </div>
    </div>
  )
}