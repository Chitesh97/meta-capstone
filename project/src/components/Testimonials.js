import React from "react";
import { testimonials } from "./data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials-background">
      <div className="testimonials">
        <h2 className="testimonials-heading"> Testimonials </h2>
        <div className="testimonials-card-wrapper">
          {testimonials.map(item => (
            <TestimonialCard
              key={item.id}
              imageSrc={item.imageSrc}
              name={item.name}
              rating={item.rating}
              comment={item.comment}
            />
          ))}
        </div>
      </div>
    </section>
  )
}