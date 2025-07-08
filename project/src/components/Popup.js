import React from "react";

export default function PopUp({ title, description, onClose }) {
  return (
    <>
      <div className="popup-container"></div>
      <div className="popup">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <button className="primary" onClick={onClose}>Close</button>
      </div>
    </>
  )
}