import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-gray-800">Orvella Ventures</h1>
    <div className="space-x-4">
      <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
      <Link to="/projects" className="text-gray-600 hover:text-black">Projects</Link>
      <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
      <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
