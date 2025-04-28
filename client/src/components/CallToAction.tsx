import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function CallToAction() {
  const [isFormActive, setIsFormActive] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  // Parallax effect for the background shapes
  useEffect(() => {
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    
    const moveShapes = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxShapes.forEach((shape, index) => {
        const speed = 1 + index * 0.8;
        gsap.to(shape, {
          x: (x - 0.5) * speed * 70,
          y: (y - 0.5) * speed * 70,
          duration: 1,
          ease: 'power1.out',
        });
      });
    };
    
    window.addEventListener('mousemove', moveShapes);
    
    return () => {
      window.removeEventListener('mousemove', moveShapes);
    };
  }, []);
  
  // Animation for the form reveal
  const toggleForm = () => {
    if (formRef.current) {
      setIsFormActive(!isFormActive);
      
      if (!isFormActive) {
        // Show form with animation
        gsap.fromTo(
          formRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
        
        // Focus email input after animation
        setTimeout(() => {
          if (emailInputRef.current) {
            emailInputRef.current.focus();
          }
        }, 500);
      } else {
        // Hide form with animation
        gsap.to(formRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  };
  
  return (
    <section id="contact" className="section-padding hero-gradient overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-shape absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-[hsl(var(--primary-blue))] opacity-10"></div>
        <div className="parallax-shape absolute bottom-[20%] right-[15%] w-56 h-56 rounded-full bg-[hsl(var(--secondary-teal))] opacity-10"></div>
        <div className="parallax-shape absolute top-[40%] right-[10%] w-28 h-28 rounded-full bg-[hsl(var(--primary-purple))] opacity-10"></div>
        <div className="parallax-shape absolute bottom-[30%] left-[20%] w-32 h-32 rounded-full bg-[hsl(var(--secondary-orange))] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card py-16 px-6 md:p-16 rounded-xl shadow-xl max-w-5xl mx-auto" ref={ctaRef} data-aos="zoom-in">
          <div className="text-center">
            <h2 className="title-section animate-pulse-slow">Ready to Transform Your Business?</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Join thousands of companies that have already discovered the power of Parallel. 
              Get started today and see the difference our platform can make.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="#"
                className="btn-primary transform transition-transform duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}
              >
                {isFormActive ? 'Hide Form' : 'Start Your Free Trial'}
              </a>
              <a 
                href="#" 
                className="btn-secondary transform transition-transform duration-300 hover:scale-105"
              >
                Schedule a Demo
              </a>
            </div>
            
            {/* Animated signup form */}
            <form 
              ref={formRef} 
              className={`mt-8 max-w-md mx-auto overflow-hidden ${isFormActive ? 'block' : 'hidden'} h-0 opacity-0`}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <input
                    ref={emailInputRef}
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-blue))]"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-blue))]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-blue))]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary-blue))]"
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-[hsl(var(--primary-blue))] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[hsl(var(--primary-purple))] hover:shadow-lg"
                >
                  Create Free Account
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </form>
            
            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-[hsl(var(--neutral-dark))] mb-6">
                Have questions? Our team is here to help.
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <a 
                  href="#" 
                  className="flex items-center justify-center text-[hsl(var(--primary-blue))] hover:text-[hsl(var(--primary-purple))] transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2 animate-bounce-slow"></i>
                  <span>support@parallel.com</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center text-[hsl(var(--primary-blue))] hover:text-[hsl(var(--primary-purple))] transition-colors duration-300"
                >
                  <i className="fas fa-phone mr-2 animate-bounce-slow" style={{ animationDelay: '0.2s' }}></i>
                  <span>1-800-PARALLEL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
