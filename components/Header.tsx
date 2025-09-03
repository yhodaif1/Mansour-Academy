
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants';

const CoffeeCupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2.414a1 1 0 01.707.293l4.586 4.586a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-.707.293H11m-3 0a1 1 0 01-1-1v-8a1 1 0 011-1h3V5H8a3 3 0 00-3 3v8a3 3 0 003 3h3v-2H8z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8h1a2 2 0 012 2v2a2 2 0 01-2 2h-1" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-beige shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
            <CoffeeCupIcon />
            <h1 className="text-2xl font-extrabold text-brand-brown">فنجال وعلوم رجال</h1>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-brand-brown border-b-2 border-brand-brown' : 'text-brand-green hover:text-brand-brown'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-brand-beige shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-brand-brown' : 'text-brand-green hover:text-brand-brown'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
