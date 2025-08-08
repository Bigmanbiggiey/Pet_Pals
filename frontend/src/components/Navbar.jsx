// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // uses lucide icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const navLinks = [
    {name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Booking', href: '#booking' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-teal-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">PetPal🐾 </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:underline"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-teal-700">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 border-b border-teal-600 hover:bg-teal-800"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
