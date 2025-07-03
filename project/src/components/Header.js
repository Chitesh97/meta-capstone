import React from 'react';
import Logo from '../assets/Logo.svg';
import menuItems from './data';

export default function Header() {

  return (
    <header className="header">
      <div className="app-logo">
        <img src={Logo} alt="Little Lemon Restaurant" height={50} />
      </div>
      <nav className="navbar">
        <ul>
          {menuItems.map(item => {
            return (
              <li key={item.id}>
                <a href={item.link} className="link">
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}