import { useState, useEffect, useRef } from "react";
import { useScrollPosition } from "@/lib/utils";
import gsap from "gsap";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  
  const isScrolled = scrollPosition > 50;
  
  // Update active menu based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const updateActiveLink = () => {
      let found = false;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = section.getBoundingClientRect().top;
        
        // Adjust this value based on when you want the active state to change
        const offset = 300;
        
        if (sectionTop <= offset && !found) {
          found = true;
          setActiveLink(sectionId);
        }
      });
      
      // If we're at the top and no section is active, set to home
      if (!found && window.scrollY < 100) {
        setActiveLink("home");
      }
    };
    
    updateActiveLink(); // Initial check
    window.addEventListener("scroll", updateActiveLink);
    
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);
  
  // Handle glass morphism effect for header
  useEffect(() => {
    if (headerRef.current) {
      if (isScrolled) {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "0.75rem 1rem",
          duration: 0.3
        });
      } else {
        gsap.to(headerRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
          padding: "1rem",
          duration: 0.3
        });
      }
    }
  }, [isScrolled]);
  
  // Logo and menu items animation
  useEffect(() => {
    if (logoRef.current && menuItemsRef.current) {
      const menuItems = menuItemsRef.current.querySelectorAll("a");
      
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
      
      gsap.fromTo(
        menuItems,
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out" 
        }
      );
    }
  }, []);
  
  // Toggle mobile menu with animation
  const toggleMobileMenu = (open: boolean) => {
    setMobileMenuOpen(open);
    
    // Add body class to prevent scrolling when menu is open
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    // Animate the mobile menu items when opening
    if (open) {
      const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
      gsap.fromTo(
        mobileMenuItems,
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out" 
        }
      );
    }
  };
  
  return (
    <header 
      ref={headerRef}
      className="header fixed w-full top-0 left-0 z-50 px-4 py-4 transition-all duration-300"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            ref={logoRef} 
            href="#" 
            className="font-bold text-2xl z-10 flex items-center"
          >
            <span className="text-[hsl(var(--primary-blue))] mr-1 animate-pulse-slow">P</span>
            <span className={`transition-colors duration-300 ${isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"}`}>
              arallel
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav ref={menuItemsRef} className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-all duration-300 relative ${
                activeLink === "home" 
                  ? "text-[hsl(var(--primary-blue))]" 
                  : isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
              onClick={() => setActiveLink("home")}
            >
              <span>Home</span>
              {activeLink === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(var(--primary-blue))] transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#features" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-all duration-300 relative ${
                activeLink === "features" 
                  ? "text-[hsl(var(--primary-blue))]" 
                  : isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
              onClick={() => setActiveLink("features")}
            >
              <span>Features</span>
              {activeLink === "features" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(var(--primary-blue))] transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#about" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-all duration-300 relative ${
                activeLink === "about" 
                  ? "text-[hsl(var(--primary-blue))]" 
                  : isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
              onClick={() => setActiveLink("about")}
            >
              <span>About</span>
              {activeLink === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(var(--primary-blue))] transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#testimonials" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-all duration-300 relative ${
                activeLink === "testimonials" 
                  ? "text-[hsl(var(--primary-blue))]" 
                  : isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
              onClick={() => setActiveLink("testimonials")}
            >
              <span>Testimonials</span>
              {activeLink === "testimonials" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(var(--primary-blue))] transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#solutions" 
              className={`font-medium hover:text-[hsl(var(--primary-blue))] transition-all duration-300 relative ${
                activeLink === "solutions" 
                  ? "text-[hsl(var(--primary-blue))]" 
                  : isScrolled ? "text-[hsl(var(--text-black))]" : "text-white"
              }`}
              onClick={() => setActiveLink("solutions")}
            >
              <span>Solutions</span>
              {activeLink === "solutions" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(var(--primary-blue))] transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#contact" 
              className="btn-primary ml-2 hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none z-10 relative" 
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={() => toggleMobileMenu(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform ${
                  isScrolled ? "bg-[hsl(var(--text-black))]" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform ${
                  isScrolled ? "bg-[hsl(var(--text-black))]" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform ${
                  isScrolled ? "bg-[hsl(var(--text-black))]" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer with overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 bg-black bg-opacity-50 backdrop-blur-sm ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => toggleMobileMenu(false)}
      ></div>
      
      <div 
        className={`mobile-nav glass-card ${mobileMenuOpen ? "active" : ""}`}
      >
        <div className="flex justify-between items-center mb-8">
          <a href="#" className="font-bold text-2xl">
            <span className="text-[hsl(var(--primary-blue))]">P</span>
            <span className="text-[hsl(var(--text-black))]">arallel</span>
          </a>
          <button 
            className="text-[hsl(var(--text-black))] focus:outline-none" 
            aria-label="Close mobile menu"
            onClick={() => toggleMobileMenu(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <a 
            href="#" 
            className="mobile-menu-item text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="mobile-menu-item text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="mobile-menu-item text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="mobile-menu-item text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            Testimonials
          </a>
          <a 
            href="#solutions" 
            className="mobile-menu-item text-[hsl(var(--text-black))] font-medium hover:text-[hsl(var(--primary-blue))] transition-colors py-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            Solutions
          </a>
          <a 
            href="#contact" 
            className="mobile-menu-item btn-primary text-center mt-2 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
