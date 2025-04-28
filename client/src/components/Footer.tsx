import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);
  const column4Ref = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isValidEmail(email)) {
      setIsSubscribed(true);
      // In a real app, we would send this email to an API
      
      // Animation for successful subscription
      const subscribeForm = document.querySelector('.subscribe-form');
      const successMessage = document.querySelector('.success-message');
      
      if (subscribeForm && successMessage) {
        gsap.to(subscribeForm, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.to(successMessage, {
              height: 'auto',
              opacity: 1,
              duration: 0.5
            });
          }
        });
      }
    }
  };

  // Footer animation on scroll
  useEffect(() => {
    if (footerRef.current) {
      // Animate the wave-like entry of columns
      const columns = [column1Ref.current, column2Ref.current, column3Ref.current, column4Ref.current];
      
      gsap.fromTo(
        columns,
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%"
          }
        }
      );
      
      // Separate animation for copyright section
      if (copyrightRef.current) {
        gsap.fromTo(
          copyrightRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.6,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%"
            }
          }
        );
      }
      
      // Social icons animation
      const socialIcons = document.querySelectorAll('.social-icon');
      gsap.fromTo(
        socialIcons,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-[hsl(var(--text-black))] to-[#0f1729] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[hsl(var(--primary-blue))] blur-[120px]"></div>
        <div className="absolute -bottom-[5%] right-[5%] w-[30%] h-[30%] rounded-full bg-[hsl(var(--primary-purple))] blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: About */}
          <div ref={column1Ref} className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-[hsl(var(--primary-blue))] animate-pulse-slow">P</span>arallel
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-[hsl(var(--primary-blue))] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-[hsl(var(--primary-blue))] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-[hsl(var(--primary-blue))] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] text-gray-300 hover:text-[hsl(var(--primary-blue))] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div ref={column2Ref}>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Careers</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Press</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">News</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div ref={column3Ref}>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Help Center</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Guides</span>
                </a>
              </li>
              <li className="hover-slide-animation">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">API Reference</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div ref={column4Ref}>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            
            {/* Newsletter form */}
            <div className="subscribe-form h-auto">
              {!isSubscribed && (
                <form className="space-y-3" onSubmit={handleSubscribe}>
                  <div className="relative overflow-hidden rounded-md">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 rounded-md bg-[rgba(255,255,255,0.05)] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[hsl(var(--primary-blue))] transition-all duration-300" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--primary-purple))] transform scale-x-0 origin-left group-focus-within:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full group relative overflow-hidden"
                  >
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--primary-purple))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              )}
            </div>
            
            {/* Success message */}
            <div className="success-message h-0 opacity-0 overflow-hidden">
              <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-md border border-[hsl(var(--secondary-teal))] text-[hsl(var(--secondary-teal))]">
                <div className="flex items-center mb-2">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span className="font-medium">Success!</span>
                </div>
                <p className="text-sm text-gray-300">Thank you for subscribing to our newsletter!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div ref={copyrightRef} className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Parallel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] transition-colors duration-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
