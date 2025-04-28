import { useState } from "react";
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
          <a href="#" className="font-bold text-2xl z-10 flex items-center">
            <span className="text-[hsl(var(--primary-blue))] mr-1">P</span>
            <span className={`${isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"}`}>
              arallel
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-colors ${
                isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
            >
              Home
            </a>
            <a 
              href="#features" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-colors ${
                isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
            >
              Features
            </a>
            <a 
              href="#about" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-colors ${
                isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-colors ${
                isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-primary ml-2"
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none z-10" 
            aria-label="Open mobile menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className={`w-6 h-6 ${isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"}`} 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
        <div className="flex justify-between items-center mb-8">
          <a href="#" className="font-bold text-2xl">
            <span className="text-[hsl(var(--primary-blue))]">P</span>
            <span className="text-[hsl(var(--text-black))]">arallel</span>
          </a>
          <button 
            className="text-[hsl(var(--text-black))] focus:outline-none" 
            aria-label="Close mobile menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <a 
            href="#" 
            className="text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="btn-primary text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
