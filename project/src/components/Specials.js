import React from "react";
import { specials } from "./data";
import FoodCard from "./FoodCard";

export default function Specials() {
  return (
    <section className="specials">
      <h2 className="specials-heading">Specials</h2>
      <div className="specials-wrapper">
        {specials.map(item => {
          return (
            <FoodCard
              key = {item.id}
              imageSrc = {item.imageSrc}
              description = {item.description}
              label = {item.label}
              price = {item.price}
            />
          )
        })}
      </div>
    </section>
  )
}