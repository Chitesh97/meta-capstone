import React from 'react';
import Logo from '../assets/Logo.svg';
import { menuItems } from './data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }



  return (
    <header className="header">
      <div className="app-logo">
        <img onClick={handleLogoClick} src={Logo} alt="Little Lemon Restaurant" height={50} />
      </div>
      <nav className="navbar">
        <ul>
          {menuItems.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.link} className="link">{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}