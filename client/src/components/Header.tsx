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
          background: 'rgba(10, 20, 40, 0.8)',
          backdropFilter: "blur(12px)",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
          borderBottom: "1px solid rgba(0, 183, 255, 0.1)",
          padding: "0.75rem 1rem",
          duration: 0.3
        });
      } else {
        gsap.to(headerRef.current, {
          background: 'rgba(10, 20, 40, 0.3)',
          backdropFilter: "blur(4px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 183, 255, 0)",
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
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <span className="text-cyan-400 mr-1 animate-pulse-slow neon-text">P</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              arallel
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav ref={menuItemsRef} className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="font-medium text-white hover:text-cyan-400 transition-all duration-300 relative"
              onClick={() => setActiveLink("home")}
              data-aos="fade-down" 
              data-aos-delay="100"
            >
              <span>Home</span>
              {activeLink === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#features" 
              className="font-medium text-white hover:text-cyan-400 transition-all duration-300 relative"
              onClick={() => setActiveLink("features")}
              data-aos="fade-down" 
              data-aos-delay="150"
            >
              <span>Features</span>
              {activeLink === "features" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#about" 
              className="font-medium text-white hover:text-cyan-400 transition-all duration-300 relative"
              onClick={() => setActiveLink("about")}
              data-aos="fade-down" 
              data-aos-delay="200"
            >
              <span>About</span>
              {activeLink === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-white hover:text-cyan-400 transition-all duration-300 relative"
              onClick={() => setActiveLink("testimonials")}
              data-aos="fade-down" 
              data-aos-delay="250"
            >
              <span>Testimonials</span>
              {activeLink === "testimonials" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#solutions" 
              className="font-medium text-white hover:text-cyan-400 transition-all duration-300 relative"
              onClick={() => setActiveLink("solutions")}
              data-aos="fade-down" 
              data-aos-delay="300"
            >
              <span>Solutions</span>
              {activeLink === "solutions" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#contact" 
              className="cyber-button group ml-3 py-2 px-4"
              data-aos="fade-down" 
              data-aos-delay="350"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <svg className="ml-1 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none z-10 relative" 
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={() => toggleMobileMenu(!mobileMenuOpen)}
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center p-1 border border-cyan-400/30 rounded-md bg-black/20 backdrop-blur-sm">
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform bg-cyan-400 
                  ${mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform bg-cyan-400
                  ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded transition-all duration-300 transform bg-cyan-400
                  ${mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
              ></span>
              
              {/* Glowing dot */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
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
        className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}
      >
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="mobile-circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 M10,50 L90,50 M10,90 L90,90 M10,10 L10,90 M50,10 L50,90 M90,10 L90,90" stroke="#00b7ff" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="2" fill="#00b7ff" />
              <circle cx="50" cy="10" r="2" fill="#00b7ff" />
              <circle cx="90" cy="10" r="2" fill="#00b7ff" />
              <circle cx="10" cy="50" r="2" fill="#00b7ff" />
              <circle cx="50" cy="50" r="2" fill="#00b7ff" />
              <circle cx="90" cy="50" r="2" fill="#00b7ff" />
              <circle cx="10" cy="90" r="2" fill="#00b7ff" />
              <circle cx="50" cy="90" r="2" fill="#00b7ff" />
              <circle cx="90" cy="90" r="2" fill="#00b7ff" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#mobile-circuit-pattern)" />
          </svg>
        </div>
      
        <div className="flex justify-between items-center mb-8 relative z-10">
          <a href="#" className="font-bold text-2xl">
            <span className="text-cyan-400 mr-1 animate-pulse-slow neon-text">P</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">arallel</span>
          </a>
          <button 
            className="text-cyan-400 focus:outline-none" 
            aria-label="Close mobile menu"
            onClick={() => toggleMobileMenu(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col space-y-5 relative z-10">
          {/* Status indicator */}
          <div className="absolute -top-2 right-0 px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-mono text-cyan-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
            <span>MENU.ACTIVE</span>
          </div>
        
          <a 
            href="#" 
            className="mobile-menu-item text-white font-medium hover:text-cyan-400 transition-colors py-2 opacity-0 border-b border-cyan-500/10 pb-3 cyber-border relative overflow-hidden"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="flex items-center">
              <i className="fas fa-home text-cyan-400 mr-3"></i>
              Home
            </span>
          </a>
          <a 
            href="#features" 
            className="mobile-menu-item text-white font-medium hover:text-cyan-400 transition-colors py-2 opacity-0 border-b border-cyan-500/10 pb-3 cyber-border relative overflow-hidden"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="flex items-center">
              <i className="fas fa-layer-group text-cyan-400 mr-3"></i>
              Features
            </span>
          </a>
          <a 
            href="#about" 
            className="mobile-menu-item text-white font-medium hover:text-cyan-400 transition-colors py-2 opacity-0 border-b border-cyan-500/10 pb-3 cyber-border relative overflow-hidden"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="flex items-center">
              <i className="fas fa-info-circle text-cyan-400 mr-3"></i>
              About
            </span>
          </a>
          <a 
            href="#testimonials" 
            className="mobile-menu-item text-white font-medium hover:text-cyan-400 transition-colors py-2 opacity-0 border-b border-cyan-500/10 pb-3 cyber-border relative overflow-hidden"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="flex items-center">
              <i className="fas fa-quote-right text-cyan-400 mr-3"></i>
              Testimonials
            </span>
          </a>
          <a 
            href="#solutions" 
            className="mobile-menu-item text-white font-medium hover:text-cyan-400 transition-colors py-2 opacity-0 border-b border-cyan-500/10 pb-3 cyber-border relative overflow-hidden"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="flex items-center">
              <i className="fas fa-puzzle-piece text-cyan-400 mr-3"></i>
              Solutions
            </span>
          </a>
          <a 
            href="#contact" 
            className="mobile-menu-item cyber-button w-full flex justify-center items-center py-3 mt-4 opacity-0"
            onClick={() => toggleMobileMenu(false)}
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
