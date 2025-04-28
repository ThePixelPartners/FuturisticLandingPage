import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showFindUs, setShowFindUs] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX / width - 0.5) * 2; // -1 to 1
        const y = (clientY / height - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
        
        // Hide "Find Us" text when mouse moves
        setShowFindUs(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply parallax effect based on mouse position
  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        x: mousePosition.x * 20,
        y: mousePosition.y * 20,
        duration: 1,
        ease: 'power2.out',
      });
    }

    // Move particles in opposite direction for depth effect
    if (particlesRef.current) {
      gsap.to(particlesRef.current.children, {
        x: -mousePosition.x * 30,
        y: -mousePosition.y * 30,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.05,
      });
    }
  }, [mousePosition]);

  // Create animated particles
  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current;
      
      // Clear existing particles
      particles.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        
        // Randomize particle appearance and position
        const size = Math.random() * 6 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 5;
        
        // Assign random colors from our futuristic palette
        const colors = [
          'rgba(0, 255, 255, 0.8)', // Cyan
          'rgba(255, 0, 255, 0.8)', // Magenta
          'rgba(0, 255, 187, 0.8)', // Teal
          'rgba(111, 0, 255, 0.8)', // Purple
          'rgba(0, 183, 255, 0.8)', // Blue
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = `${opacity}`;
        particle.style.animation = `float ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`;
        
        particles.appendChild(particle);
      }
    }
  }, []);

  // GSAP animation on component mount
  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .from(headlineRef.current, { opacity: 0, y: 30, duration: 1, ease: "power3.out" })
      .from(paragraphRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(ctaContainerRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(imageContainerRef.current, { opacity: 0, scale: 0.9, duration: 1, ease: "back.out(1.7)" }, "-=0.8");
      
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d101e] via-[#141b33] to-[#0a0d19] z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 183, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 183, 255, 0.3) 1px, transparent 1px)', 
          backgroundSize: '50px 50px',
          perspective: '500px',
          transform: `rotateX(60deg) scale(2) translateZ(-100px)`
        }}></div>
      </div>
      
      {/* Animated Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-[#6e00ff] opacity-10 blur-[150px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-[#00b7ff] opacity-10 blur-[150px] transform translate-x-1/2 translate-y-1/2 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div 
            className="w-full md:w-1/2 text-center md:text-left md:pr-12 mb-12 md:mb-0 relative"
            onMouseEnter={() => setShowFindUs(true)}
          >
            {/* "Find Us" Text that appears on hover */}
            {showFindUs && (
              <div className="absolute top-0 left-0 z-20 fade-in w-full h-full flex items-center justify-center pointer-events-none">
                <div className="bg-black/50 backdrop-blur-lg p-6 rounded-lg border border-cyan-400/50 text-center transform transition-all duration-300 shadow-lg shadow-cyan-500/30">
                  <span className="mystery-text text-2xl font-mono font-bold glitch-text">FIND US</span>
                  <div className="mt-2 text-cyan-300 text-xs font-mono opacity-80">COORDINATES CLASSIFIED</div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="portal-ripple"></div>
                    <div className="portal-ripple" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-6 inline-block" data-aos="fade-up">
              <span className="px-4 py-1 text-sm bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-white uppercase tracking-wide font-mono">
                TRANSMISSION_INCOMING
              </span>
            </div>
            <h1 
              ref={headlineRef} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 title-large mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Beyond the Digital
              <span className="relative ml-3 inline-block">
                Horizon
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
              </span>
            </h1>
            <p 
              ref={paragraphRef}
              className="text-blue-100 text-lg mb-8 max-w-lg mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              They said it couldn't be done—bridging dimensions through digital space. But in 2037, we discovered the frequency. 
              <span className="italic text-cyan-300"> Parallel</span> is not just technology. It's the gateway to what awaits beyond the veil of conventional reality.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-8 border border-cyan-900/30 rounded-lg p-4 backdrop-blur-sm bg-black/20 relative overflow-hidden"
                 data-aos="fade-up"
                 data-aos-delay="300">
              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full animate-scan"></div>
              
              {/* Data readings */}
              <div className="text-center">
                <div className="text-cyan-400 text-2xl font-bold font-mono">97.3%</div>
                <div className="text-blue-200 text-xs font-mono">REALITY SYNC</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-2xl font-bold font-mono">13.8B</div>
                <div className="text-blue-200 text-xs font-mono">QUANTUM CYCLES</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-2xl font-bold font-mono">∞</div>
                <div className="text-blue-200 text-xs font-mono">POSSIBILITIES</div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-70"></div>
            </div>
            
            {/* CTA Buttons */}
            <div 
              ref={ctaContainerRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a 
                href="#features" 
                className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-mono transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></span>
                  INITIALIZE SEQUENCE
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-20"></span>
                <span className="absolute top-0 right-0 w-8 h-8 -mt-2 -mr-2 rounded-full bg-cyan-300 blur-xl opacity-70 animate-pulse-slow"></span>
                
                {/* Cyber corners */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></span>
              </a>
              <a 
                href="#about" 
                className="relative group px-8 py-4 border border-cyan-400/30 hover:border-cyan-400/80 rounded-lg text-white backdrop-blur-sm bg-cyan-900/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                <span className="text-gradient-cyan font-mono">ACCESS ARCHIVES</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>
          </div>
          
          {/* Right Image/3D Object */}
          <div 
            ref={imageContainerRef} 
            className="w-full md:w-1/2 perspective-1000"
          >
            <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-3">
              {/* Glow Effects */}
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Main Content Container */}
              <div className="glass-panel relative z-10 p-1 rounded-2xl overflow-hidden border border-cyan-400/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-xl"></div>
                
                {/* Tech Circuit Lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                      <path d="M10,10 L390,10 L390,390 L10,390 Z" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M50,50 L350,50 L350,350 L50,350 Z" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M10,200 L390,200" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M200,10 L200,390" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M10,10 L200,200" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M390,10 L200,200" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M10,390 L200,200" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <path d="M390,390 L200,200" fill="none" stroke="url(#grad1)" strokeWidth="1" />
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00b7ff" />
                          <stop offset="100%" stopColor="#6e00ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Holographic Portal */}
                <div className="relative p-4 overflow-hidden">
                  <div className="relative transform perspective-1000 hover:rotate-y-12 transition-all duration-700">
                    {/* Portal loading effects */}
                    <div className="absolute inset-0 bg-black rounded-lg z-0 flex items-center justify-center overflow-hidden">
                      <div className="absolute w-full h-full">
                        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/30 via-transparent to-transparent animate-pulse-slow"></div>
                      </div>
                      
                      {/* Portal spin effect */}
                      <div className="absolute w-4/5 h-4/5 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
                      <div className="absolute w-3/5 h-3/5 border border-purple-500/40 rounded-full animate-reverse-spin"></div>
                      <div className="absolute w-2/5 h-2/5 border-2 border-cyan-400/50 rounded-full animate-spin-slow"></div>
                    </div>
                    
                    <img 
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Portal to digital dimension" 
                      className="w-full h-auto rounded-lg z-10 relative"
                    />
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 mix-blend-overlay rounded-lg"></div>
                    
                    {/* Scan Lines */}
                    <div className="absolute inset-0 bg-scan-lines rounded-lg opacity-20"></div>
                    
                    {/* Mysterious Elements */}
                    <div className="absolute top-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm flex items-center justify-between">
                      <div className="text-xs font-mono text-cyan-400 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
                        GATEWAY_ACTIVE
                      </div>
                      <div className="text-xs font-mono text-purple-400">ID:2037-ALPHA</div>
                    </div>
                    
                    {/* Portal coordinates */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm text-xs font-mono text-cyan-400">
                      <div className="flex justify-between">
                        <span>DIM_COORD: 34.15.92.78</span>
                        <span className="text-purple-400 animate-pulse">PULSE: STABLE</span>
                      </div>
                    </div>
                    
                    {/* Mysterious symbols */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-5xl font-serif rotate-45 animate-pulse-slow">
                      ⌬
                    </div>
                    
                    {/* Pulsing interaction points */}
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-ping opacity-60"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-purple-500 animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                
                {/* Terminal Output */}
                <div className="px-4 pb-4 font-mono text-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-cyan-400">[SYS]</span>
                    <span className="text-blue-200 typing-effect">Dimensional gateway initialized. Awaiting authorization...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">[USR]</span>
                    <span className="text-blue-200">Access permitted. Welcome, traveler.</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-blink"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
