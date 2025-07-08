import React from 'react';
import Logo from '../assets/Logo.svg';
import HamburgerIcon from '../assets/HamburgerIcon.svg';
import { menuItems } from './data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <div className="app-logo">
        <img onClick={handleLogoClick} src={Logo} alt="Little Lemon Restaurant" height={50} />
      </div>
      <nav className="navbar">
        <ul className={`navlist ${isMenuOpen ? "open" : "closed" }`}>
          {menuItems.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.link} className="link">{item.label}</Link>
              </li>
            )
          })}
        </ul>

        <div className="menu-icon" role="button" onClick={toggleMenu}>
          <img src={HamburgerIcon} alt="menu" />
        </div>
      </nav>
    </header>
  )
}