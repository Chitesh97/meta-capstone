import React from "react";
import FooterLogo from "../assets/logo-white.png";
import { menuItems } from "./data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img src={FooterLogo} alt="Little Lemon logo" height={200} />
        <div className="footer-sitemap">
          <p className="footer-category-heading">SITEMAP</p>
          <ul className="footer-category-links">
            {menuItems.map(item => {
              return (
                <li key={item.id}>
                <Link to={item.link} className="link">{item.label}</Link>
              </li>
              )
            })}
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-category-heading">CONTACT</p>
          <p className="footer-item">Vicolo del Buon Consiglio</p>
          <p className="footer-item">23/A, 00184 Roma RM, Italy</p>
          <p className="footer-item">little.lemon@restaurant.com</p>
        </div>
        <div className="footer-contact">
          <p className="footer-category-heading">SOCIAL MEDIA</p>
          <ul className="footer-social-links">
            <li><a href="https://www.facebook.com" target="_blank" className="footer-item" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" className="footer-item" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://x.com" className="footer-item" rel="noopener noreferrer">X</a></li>
          </ul>
        </div>


      </div>
    </footer>
  )
}