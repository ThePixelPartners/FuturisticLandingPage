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
    <section id="contact" className="section-padding overflow-hidden relative bg-gradient-to-b from-[#141b33] to-[#0a0d19]">
      {/* Abstract Geometric Animation Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          {/* Canvas for geometric animation - different style for CTA */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
            <defs>
              <linearGradient id="gradient-cta1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b7ff" />
                <stop offset="100%" stopColor="#6e00ff" />
              </linearGradient>
              <linearGradient id="gradient-cta2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff00e5" />
                <stop offset="100%" stopColor="#6e00ff" />
              </linearGradient>
              <filter id="glow-cta">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Geometric patterns - polygons */}
            <g className="polygons" filter="url(#glow-cta)">
              <path d="M100,100 L150,50 L200,100 L150,150 Z" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0s' }} />
              <path d="M300,200 L380,150 L400,250 L320,300 Z" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <path d="M600,100 L700,150 L650,250 L550,200 Z" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1.2s' }} />
              <path d="M750,300 L800,250 L900,350 L850,400 Z" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1.8s' }} />
              <path d="M200,400 L300,350 L350,450 L250,500 Z" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2.4s' }} />
              <path d="M500,450 L550,400 L650,500 L600,550 Z" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '3.0s' }} />
            </g>
            
            {/* Animated concentric circles */}
            <g className="concentric-circles">
              <circle cx="400" cy="250" r="80" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-pulse-slow" />
              <circle cx="400" cy="250" r="60" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <circle cx="400" cy="250" r="40" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <circle cx="400" cy="250" r="20" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            </g>
            
            {/* Animated cuboid shapes */}
            <g className="cuboids">
              <path d="M800,150 L850,170 L850,220 L800,200 Z" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <path d="M800,200 L850,220 L800,240 L750,220 Z" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <path d="M750,170 L800,150 L800,200 L750,220 Z" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.9s' }} />
            </g>
            
            {/* Animated wave patterns */}
            <g className="waves">
              <path d="M100,350 Q150,300 200,350 Q250,400 300,350 Q350,300 400,350" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              <path d="M100,370 Q150,320 200,370 Q250,420 300,370 Q350,320 400,370" fill="none" stroke="url(#gradient-cta1)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
              <path d="M100,390 Q150,340 200,390 Q250,440 300,390 Q350,340 400,390" fill="none" stroke="url(#gradient-cta2)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.6s' }} />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Parallax shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-shape absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
        <div className="parallax-shape absolute bottom-[20%] right-[15%] w-56 h-56 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="parallax-shape absolute top-[40%] right-[10%] w-28 h-28 rounded-full bg-pink-500 opacity-10 blur-3xl"></div>
        <div className="parallax-shape absolute bottom-[30%] left-[20%] w-32 h-32 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel py-16 px-6 md:p-16 rounded-xl shadow-xl max-w-5xl mx-auto relative overflow-hidden" ref={ctaRef} data-aos="zoom-in">
          {/* Circuit pattern overlay for glass panel */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern id="circuit-pattern-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
              <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern-cta)" />
            </svg>
          </div>
          
          <div className="text-center relative z-10">
            <div className="mb-1">
              <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white uppercase tracking-wide font-medium">
                Get Started Today
              </span>
            </div>
            <h2 className="title-section mb-4">Accelerate Your Digital Transformation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations that have already discovered the power of our quantum-enhanced platform. 
              Unlock unprecedented capabilities and competitive advantages.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="#"
                className="cyber-button group relative overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}
              >
                <span className="relative z-10 flex items-center">
                  {isFormActive ? 'Hide Form' : 'Start Your Free Trial'}
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#" 
                className="relative group px-8 py-4 border border-cyan-400/30 hover:border-cyan-400/80 rounded-lg backdrop-blur-sm bg-cyan-900/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                <span className="text-gradient-cyan">Schedule a Demo</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* Animated signup form */}
            <form 
              ref={formRef} 
              className={`mt-8 max-w-md mx-auto overflow-hidden ${isFormActive ? 'block' : 'hidden'} h-0 opacity-0`}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    ref={emailInputRef}
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-cyan-900/10 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-blue-300/50 backdrop-blur-sm"
                    required
                  />
                  <div className="absolute right-3 top-3.5 text-cyan-400 animate-pulse">
                    <i className="fas fa-envelope-open"></i>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-1/2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-cyan-900/10 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-blue-300/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute right-3 top-3.5 text-cyan-400/50">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="relative w-1/2">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-cyan-900/10 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-blue-300/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute right-3 top-3.5 text-cyan-400/50">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 bg-cyan-900/10 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-blue-300/50 backdrop-blur-sm"
                  />
                  <div className="absolute right-3 top-3.5 text-cyan-400/50">
                    <i className="fas fa-building"></i>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="cyber-button relative overflow-hidden"
                >
                  <span className="relative z-10">Create Free Account</span>
                </button>
              </div>
              <p className="text-xs text-blue-300/70 mt-3">
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </form>
            
            <div className="mt-10 pt-10 border-t border-cyan-500/10">
              <p className="text-blue-100 mb-6">
                Have questions? Our team is here to help.
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <a 
                  href="#" 
                  className="flex items-center justify-center text-cyan-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2 animate-bounce-slow"></i>
                  <span>support@parallel.com</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center text-cyan-400 hover:text-purple-400 transition-colors duration-300"
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
