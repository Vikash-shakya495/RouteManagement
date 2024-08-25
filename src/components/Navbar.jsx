import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <NavLink to="/">bigtranz</NavLink>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "border-b-2 border-yellow-400" : "") + " hover:text-yellow-400"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "border-b-2 border-yellow-400" : "") + " hover:text-yellow-400"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "border-b-2 border-yellow-400" : "") + " hover:text-yellow-400"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-bus"
              className={({ isActive }) => (isActive ? "border-b-2 border-yellow-400" : "") + " hover:text-yellow-400"}
            >
              Our Bus
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "border-b-2 border-yellow-400" : "") + " hover:text-yellow-400"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="text-2xl font-bold">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
