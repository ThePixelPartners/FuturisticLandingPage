import { useState, useEffect } from "react";
import { useScrollPosition } from "@/lib/utils";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isScrolled = scrollPosition > 50;
  
  return (
    <header 
      className={`header fixed w-full top-0 left-0 z-50 px-4 py-4 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold font-montserrat z-10">
            <span className={`${isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"}`}>
              Parallel
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`hover:opacity-80 font-montserrat text-sm uppercase font-medium ${
                isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"
              }`}
            >
              Home
            </a>
            <a 
              href="#features" 
              className={`hover:opacity-80 font-montserrat text-sm uppercase font-medium ${
                isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"
              }`}
            >
              Features
            </a>
            <a 
              href="#about" 
              className={`hover:opacity-80 font-montserrat text-sm uppercase font-medium ${
                isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"
              }`}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className={`hover:opacity-80 font-montserrat text-sm uppercase font-medium ${
                isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-gradient px-6 py-2 rounded-full text-sm uppercase font-medium"
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none z-10" 
            aria-label="Open mobile menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className={`w-6 h-6 ${isScrolled ? "text-[hsl(var(--neutral-dark))]" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
        <div className="flex justify-end">
          <button 
            className="text-gray-800 focus:outline-none" 
            aria-label="Close mobile menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-6">
          <a 
            href="#" 
            className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--primary-purple))] font-montserrat text-sm uppercase font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--primary-purple))] font-montserrat text-sm uppercase font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--primary-purple))] font-montserrat text-sm uppercase font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-[hsl(var(--neutral-dark))] hover:text-[hsl(var(--primary-purple))] font-montserrat text-sm uppercase font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="btn-gradient text-white px-6 py-2 rounded-full text-center text-sm uppercase font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
