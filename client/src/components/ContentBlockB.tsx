import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function ContentBlockB() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const industryCardsRef = useRef<HTMLDivElement>(null);
  
  // Handle video play/pause toggle
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Animate industry cards on scroll
  useEffect(() => {
    if (industryCardsRef.current) {
      const cards = industryCardsRef.current.querySelectorAll('.industry-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: industryCardsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#141b33] to-[#0d101e]">
      {/* Abstract Geometric Animation Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div id="geometric-animation" className="absolute inset-0 z-0">
          {/* Canvas for geometric animation */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b7ff" />
                <stop offset="100%" stopColor="#6e00ff" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ffd5" />
                <stop offset="100%" stopColor="#00b7ff" />
              </linearGradient>
            </defs>
            
            {/* Animated hexagons */}
            <g className="hexagons">
              <path d="M100,50 L150,86.6 L150,159.8 L100,196.4 L50,159.8 L50,86.6 Z" fill="none" stroke="url(#gradient1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0s' }} />
              <path d="M250,120 L300,156.6 L300,229.8 L250,266.4 L200,229.8 L200,156.6 Z" fill="none" stroke="url(#gradient2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.5s' }} />
              <path d="M400,80 L450,116.6 L450,189.8 L400,226.4 L350,189.8 L350,116.6 Z" fill="none" stroke="url(#gradient1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1s' }} />
              <path d="M150,250 L200,286.6 L200,359.8 L150,396.4 L100,359.8 L100,286.6 Z" fill="none" stroke="url(#gradient2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1.5s' }} />
              <path d="M350,300 L400,336.6 L400,409.8 L350,446.4 L300,409.8 L300,336.6 Z" fill="none" stroke="url(#gradient1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2s' }} />
              <path d="M550,150 L600,186.6 L600,259.8 L550,296.4 L500,259.8 L500,186.6 Z" fill="none" stroke="url(#gradient2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2.5s' }} />
              <path d="M650,350 L700,386.6 L700,459.8 L650,496.4 L600,459.8 L600,386.6 Z" fill="none" stroke="url(#gradient1)" strokeWidth="1" className="animate-float" style={{ animationDelay: '3s' }} />
              <path d="M800,200 L850,236.6 L850,309.8 L800,346.4 L750,309.8 L750,236.6 Z" fill="none" stroke="url(#gradient2)" strokeWidth="1" className="animate-float" style={{ animationDelay: '3.5s' }} />
            </g>
            
            {/* Animated lines connecting geometric shapes */}
            <g className="connecting-lines">
              <line x1="100" y1="100" x2="250" y2="150" stroke="url(#gradient1)" strokeWidth="0.5" className="animate-pulse-slow" />
              <line x1="250" y1="150" x2="400" y2="100" stroke="url(#gradient2)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <line x1="400" y1="100" x2="550" y2="200" stroke="url(#gradient1)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <line x1="150" y1="300" x2="350" y2="350" stroke="url(#gradient2)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
              <line x1="350" y1="350" x2="650" y2="400" stroke="url(#gradient1)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <line x1="550" y1="200" x2="800" y2="250" stroke="url(#gradient2)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
            </g>
            
            {/* Animated circles at intersections */}
            <g className="intersection-points">
              <circle cx="100" cy="100" r="3" fill="url(#gradient1)" className="animate-pulse" />
              <circle cx="250" cy="150" r="3" fill="url(#gradient2)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <circle cx="400" cy="100" r="3" fill="url(#gradient1)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
              <circle cx="550" cy="200" r="3" fill="url(#gradient2)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <circle cx="150" cy="300" r="3" fill="url(#gradient1)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              <circle cx="350" cy="350" r="3" fill="url(#gradient2)" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="650" cy="400" r="3" fill="url(#gradient1)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
              <circle cx="800" cy="250" r="3" fill="url(#gradient2)" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white uppercase tracking-wide font-medium mb-4"
                  data-aos="fade-up" data-aos-delay="100">
              Experience Parallel
            </span>
            <h2 className="title-section mb-4" data-aos="fade-up" data-aos-delay="150">See Parallel in Action</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="subtitle max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="250">
              Watch how our platform can transform your workflow and boost productivity with powerful features and intuitive design.
            </p>
          </div>
          
          {/* Video Highlight Section */}
          <div className="max-w-4xl mx-auto relative" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <div className="video-highlight overflow-hidden relative">
              {/* Video glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              
              <div className="relative z-10">
                {/* Video overlay for play/pause functionality */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 z-10 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                  onClick={toggleVideo}
                >
                  <button 
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-transform duration-300 transform hover:scale-110 border border-white/20 group"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-3xl transition-transform duration-300 group-hover:scale-110`}></i>
                  </button>
                </div>
                
                {/* Actual video element */}
                <video 
                  ref={videoRef}
                  className="w-full h-auto rounded-xl"
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-typing-on-smartphone-in-business-settings-2202-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video frame glow effect */}
                <div className="absolute inset-0 rounded-xl border border-cyan-400/20 pointer-events-none cyber-border-glow"></div>
                
                {/* Holographic corner effects */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg"></div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-mono text-cyan-400 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                  <span>REC</span>
                </div>
              </div>
            </div>
            
            {/* Video caption */}
            <div className="mt-6 text-center text-sm text-blue-200 bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-cyan-400/10" 
                 data-aos="fade-up" data-aos-delay="400">
              <span className="font-mono text-cyan-400">PARALLEL::</span> Experience our platform's intuitive interface and powerful features in action.
            </div>
          </div>
        </div>
        
        {/* Industry solutions section */}
        <div className="pt-20 pb-10 relative">
          {/* Section Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" data-aos="fade-right" data-aos-duration="1500"></div>
          
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full text-white uppercase tracking-wide font-medium mb-4"
                  data-aos="fade-up" data-aos-delay="100">
              Industry Solutions
            </span>
            <h2 className="title-section mb-4" data-aos="fade-up" data-aos-delay="150">Quantum Adaptations for Every Sector</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="subtitle max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="250">
              Our neural frameworks adapt to your industry-specific challenges, providing hyperdimensional solutions 
              and cognitive workflows that amplify results.
            </p>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row items-center mt-10">
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:pr-16 mt-12 md:mt-0">
              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-gradient-purple mb-4">
                  Adaptive Intelligence for Evolving Sectors
                </h3>
                <p className="text-blue-100 mb-6">
                  Each industry's digital landscape requires specialized adaptive solutions. Our platform configures 
                  to your specific neural patterns, providing tailored interfaces and productivity amplifiers.
                </p>
                <p className="text-blue-100 mb-8">
                  From biometric healthcare to quantum finance, neural education to automated manufacturing, 
                  we've revolutionized organizations across dimensions, enabling exponential growth trajectories.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12" ref={industryCardsRef}>
                <div className="p-5 rounded-lg industry-card glass-panel border border-purple-400/20 transition-all duration-300 hover:border-purple-400/50 hover:scale-[1.02] group"
                     data-aos="fade-up" data-aos-delay="150">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-purple-400 bg-purple-900/20 p-2 rounded-lg">
                      <i className="fas fa-briefcase-medical text-xl"></i>
                    </div>
                    <div className="text-xs text-purple-300 font-mono">01.HEALTH</div>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-gradient-purple group-hover:scale-105 transition-transform duration-300">Biometric Care Systems</h3>
                  <p className="text-sm text-blue-200">Neural patient care networks with quantum secure data matrices</p>
                </div>
                
                <div className="p-5 rounded-lg industry-card glass-panel border border-cyan-400/20 transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02] group"
                     data-aos="fade-up" data-aos-delay="200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-cyan-400 bg-cyan-900/20 p-2 rounded-lg">
                      <i className="fas fa-university text-xl"></i>
                    </div>
                    <div className="text-xs text-cyan-300 font-mono">02.FINANCE</div>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-gradient-cyan group-hover:scale-105 transition-transform duration-300">Hypersecure Quantum Banking</h3>
                  <p className="text-sm text-blue-200">Multi-dimensional security protocols with predictive efficiency engines</p>
                </div>
                
                <div className="p-5 rounded-lg industry-card glass-panel border border-cyan-400/20 transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02] group"
                     data-aos="fade-up" data-aos-delay="250">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-cyan-400 bg-cyan-900/20 p-2 rounded-lg">
                      <i className="fas fa-graduation-cap text-xl"></i>
                    </div>
                    <div className="text-xs text-cyan-300 font-mono">03.EDUCATION</div>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-gradient-cyan group-hover:scale-105 transition-transform duration-300">Neural Learning Frameworks</h3>
                  <p className="text-sm text-blue-200">Adaptive cognitive architecture with hyperdimensional administration</p>
                </div>
                
                <div className="p-5 rounded-lg industry-card glass-panel border border-purple-400/20 transition-all duration-300 hover:border-purple-400/50 hover:scale-[1.02] group"
                     data-aos="fade-up" data-aos-delay="300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-purple-400 bg-purple-900/20 p-2 rounded-lg">
                      <i className="fas fa-industry text-xl"></i>
                    </div>
                    <div className="text-xs text-purple-300 font-mono">04.INDUSTRY</div>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-gradient-purple group-hover:scale-105 transition-transform duration-300">Quantum Manufacturing Grid</h3>
                  <p className="text-sm text-blue-200">Hyperoptimized production matrices with quantum supply synchronization</p>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="350">
                <a href="#" className="cyber-button group inline-block">
                  <span className="relative z-10 flex items-center">
                    Access Sector Solutions
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <div className="relative">
                {/* Holographic glow effects */}
                <div className="absolute -top-10 -right-10 w-3/4 h-3/4 bg-purple-500/20 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-3/4 h-3/4 bg-cyan-400/20 rounded-full opacity-30 blur-3xl"></div>
                
                {/* Main image with interactive elements */}
                <div className="glass-panel p-4 rounded-xl relative z-10 cyber-border overflow-hidden">
                  {/* Animated grid overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" className="absolute inset-0">
                      <pattern id="solutions-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
                      </pattern>
                      <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00b7ff" />
                        <stop offset="100%" stopColor="#6e00ff" />
                      </linearGradient>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#solutions-grid)" />
                      
                      {/* Animated pulse circles */}
                      <circle cx="20%" cy="30%" r="5" fill="none" stroke="#00b7ff" strokeWidth="1">
                        <animate attributeName="r" values="5;30;5" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="70%" cy="60%" r="5" fill="none" stroke="#6e00ff" strokeWidth="1">
                        <animate attributeName="r" values="5;30;5" dur="3s" repeatCount="indefinite" begin="1s" />
                        <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" begin="1s" />
                      </circle>
                    </svg>
                  </div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Digital product interface" 
                    className="rounded-lg w-full h-auto relative z-10"
                  />
                  
                  {/* Holographic HUD elements */}
                  <div className="absolute top-4 right-4 px-3 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-cyan-400/30 text-sm font-mono text-cyan-400">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                      <span>SYSTEM.ACTIVE</span>
                    </div>
                    <div className="text-xs text-cyan-300/90">SECTOR.SCAN.COMPLETE</div>
                  </div>
                  
                  {/* Bottom data indicators */}
                  <div className="absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-black/0 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-mono text-cyan-400">INDUSTRY.MATRIX.OPTIMIZED</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-1 bg-purple-500 rounded-full"></div>
                        <div className="w-10 h-1 bg-cyan-400 rounded-full"></div>
                        <div className="w-3 h-1 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
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
