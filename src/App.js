import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReserveTablePage from './pages/ReserveTablePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/menu" element={ <MenuPage /> } />
        <Route path="/reservations" element={ <ReserveTablePage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <HomePage /> } />
      </Routes>
    </>
  );
}

export default App;
