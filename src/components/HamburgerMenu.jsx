import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-blue-700 text-center p-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 text-lg font-semibold">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
