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
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="title-section">See Parallel in Action</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Watch how our platform can transform your workflow and boost productivity with powerful features and intuitive design.
            </p>
          </div>
          
          {/* Video Highlight Section */}
          <div className="max-w-4xl mx-auto relative" data-aos="zoom-in">
            <div className="video-highlight overflow-hidden">
              <div className="relative">
                {/* Video overlay for play/pause functionality */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 z-10 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                  onClick={toggleVideo}
                >
                  <button 
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-transform duration-300 transform hover:scale-110 border border-white/20"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-3xl`}></i>
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
                <div className="absolute inset-0 rounded-xl border border-cyan-400/20 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Video caption */}
            <div className="mt-4 text-center text-sm text-blue-200">
              Experience our platform's intuitive interface and powerful features in action.
            </div>
          </div>
        </div>
        
        {/* Industry solutions section */}
        <div className="flex flex-col-reverse md:flex-row items-center mt-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-16 mt-12 md:mt-0" data-aos="fade-right">
            <h2 className="title-section">Tailored Solutions for Every Industry</h2>
            <p className="text-blue-100 mb-6">
              Every industry has unique challenges and opportunities. Our platform adapts to your specific needs, providing customized workflows and tools that drive results.
            </p>
            <p className="text-blue-100 mb-8">
              From healthcare to finance, education to manufacturing, we've helped organizations across sectors transform their operations and achieve remarkable growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" ref={industryCardsRef}>
              <div className="p-4 rounded-lg shadow-sm industry-card glass-panel">
                <div className="text-purple-400 mb-2">
                  <i className="fas fa-briefcase-medical text-xl"></i>
                </div>
                <h3 className="font-bold text-white mb-1 neon-text">Healthcare</h3>
                <p className="text-sm text-blue-200">Streamline patient care and secure data management</p>
              </div>
              <div className="p-4 rounded-lg shadow-sm industry-card glass-panel">
                <div className="text-cyan-400 mb-2">
                  <i className="fas fa-university text-xl"></i>
                </div>
                <h3 className="font-bold text-white mb-1 neon-text">Finance</h3>
                <p className="text-sm text-blue-200">Enhance security and operational efficiency</p>
              </div>
              <div className="p-4 rounded-lg shadow-sm industry-card glass-panel">
                <div className="text-orange-400 mb-2">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="font-bold text-white mb-1 neon-text">Education</h3>
                <p className="text-sm text-blue-200">Improve learning outcomes and administration</p>
              </div>
              <div className="p-4 rounded-lg shadow-sm industry-card glass-panel">
                <div className="text-cyan-500 mb-2">
                  <i className="fas fa-industry text-xl"></i>
                </div>
                <h3 className="font-bold text-white mb-1 neon-text">Manufacturing</h3>
                <p className="text-sm text-blue-200">Optimize operations and supply chain management</p>
              </div>
            </div>
            
            <a href="#" className="cyber-button inline-block">
              <span className="relative z-10">Explore Solutions</span>
            </a>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative float-animation">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-lg blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/30 rounded-lg blur-lg"></div>
              
              <div className="glass-panel p-4 rounded-xl relative z-10 cyber-border overflow-hidden">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
                  </svg>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital product interface" 
                  className="rounded-lg w-full h-auto relative z-10"
                />
                
                {/* Status indicators */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
                
                {/* Data indicator */}
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-mono text-cyan-400">
                  STATUS: ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
