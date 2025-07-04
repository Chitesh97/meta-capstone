import React from "react";
import starIcon from '../assets/star.svg';

export default function TestimonialCard({ ...item }) {
  return (
    <div className="testimonial-card" key={item.id}>
      <div className="testimonial-header">
        <img className="testimonial-avatar" src={item.imageSrc} alt={item.name} height={60} width={70} />
        <div className="testimonial-name-ratings">
          <p>{item.name}</p>
          <div className="testimonial-rating">
            {item.rating &&
              [...Array(item.rating)].map((_, index) => (
                <img key={index} src={starIcon} alt="star" height={15} width={15} />
              ))}
          </div>
        </div>
      </div>
      <p className="testimonial-comment">{item.comment}</p>
    </div>
  )
}