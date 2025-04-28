import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ContentBlockA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create parallax effect on scroll
    if (sectionRef.current && imageRef.current && contentRef.current) {
      // Image parallax effect
      gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Content entry animation
      const contentItems = contentRef.current.querySelectorAll('.content-item');
      gsap.fromTo(
        contentItems,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      className="section-padding py-24 relative bg-gradient-to-b from-[#141b33] to-[#0d101e] overflow-hidden"
      ref={sectionRef}
    >
      {/* Abstract Shapes Background */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-1/2 h-1/2 rounded-full bg-cyan-400 blur-3xl opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-1/2 h-1/2 rounded-full bg-purple-500 blur-3xl opacity-10"></div>
        
        {/* Animated lines */}
        <svg width="100%" height="100%" className="absolute inset-0" opacity="0.05">
          <defs>
            <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b7ff" />
              <stop offset="100%" stopColor="#6e00ff" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 Q250,50 500,100 T1000,100" 
            stroke="url(#aboutGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse-slow"
          />
          <path 
            d="M0,200 Q250,150 500,200 T1000,200" 
            stroke="url(#aboutGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />
          <path 
            d="M0,300 Q250,250 500,300 T1000,300" 
            stroke="url(#aboutGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white uppercase tracking-wide font-medium mb-4"
                data-aos="fade-up" data-aos-delay="100">
            About Us
          </span>
          <h2 className="title-section mb-4" data-aos="fade-up" data-aos-delay="150">Empowering Future Innovations</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
        </div>
      
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0" ref={imageRef}>
            <div className="relative" data-aos="fade-right" data-aos-duration="1000">
              {/* Glow effects */}
              <div className="absolute -top-8 -left-8 w-2/3 h-2/3 bg-purple-500/30 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-cyan-400/30 rounded-full opacity-30 blur-3xl"></div>
              
              {/* Main image with futuristic frame */}
              <div className="glass-panel p-2 rounded-xl relative z-10 cyber-border overflow-hidden">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="about-circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M10,10 L90,10 M10,50 L90,50 M10,90 L90,90 M10,10 L10,90 M50,10 L50,90 M90,10 L90,90" stroke="#00b7ff" strokeWidth="1" fill="none" />
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
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#about-circuit-pattern)" />
                  </svg>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working together in modern office" 
                  className="rounded-lg w-full h-auto relative z-10"
                />
                
                {/* Status indicators */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
                
                {/* Data indicators */}
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-mono text-cyan-400">
                  TEAM EFFICIENCY: 98.7%
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-16" ref={contentRef}>
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-gradient-cyan content-item" data-aos="fade-left" data-aos-delay="100">
                Quantum-Enhanced Team Collaboration
              </h3>
              <p className="text-blue-100 mb-6 content-item" data-aos="fade-left" data-aos-delay="150">
                We understand the challenges of the digital frontier. Our neural platform transcends conventional processes, 
                empowering your team with computational intelligence that adapts to your unique objectives.
              </p>
              <p className="text-blue-100 mb-8 content-item" data-aos="fade-left" data-aos-delay="200">
                With Parallel, your organization gains access to a dimensional framework, amplifying capability through 
                hyperluminal technology and cognitive support systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center content-item p-3 rounded-lg border border-cyan-400/20 bg-cyan-900/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-900/20" 
                     data-aos="fade-left" data-aos-delay="250">
                  <div className="text-cyan-400 mr-3">
                    <i className="fas fa-brain text-xl"></i>
                  </div>
                  <p className="text-blue-100 font-medium">Neural collaboration matrices</p>
                </div>
                
                <div className="flex items-center content-item p-3 rounded-lg border border-purple-400/20 bg-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-900/20" 
                     data-aos="fade-left" data-aos-delay="300">
                  <div className="text-purple-400 mr-3">
                    <i className="fas fa-network-wired text-xl"></i>
                  </div>
                  <p className="text-blue-100 font-medium">Hyperconnected workflow acceleration</p>
                </div>
                
                <div className="flex items-center content-item p-3 rounded-lg border border-cyan-400/20 bg-cyan-900/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-900/20" 
                     data-aos="fade-left" data-aos-delay="350">
                  <div className="text-cyan-400 mr-3">
                    <i className="fas fa-chart-bar text-xl"></i>
                  </div>
                  <p className="text-blue-100 font-medium">Dimensional performance analytics</p>
                </div>
              </div>
              
              <div className="mt-10 content-item" data-aos="fade-left" data-aos-delay="400">
                <a href="#" className="cyber-button group relative overflow-hidden inline-flex">
                  <span className="relative z-10 flex items-center">
                    Explore Capabilities
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
