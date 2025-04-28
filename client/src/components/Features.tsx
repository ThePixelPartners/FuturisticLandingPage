import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('feature-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  // Feature hover animations
  useEffect(() => {
    if (hoveredFeature !== null && featureRefs.current[hoveredFeature]) {
      // Glow effect animation
      gsap.to(featureRefs.current[hoveredFeature], {
        boxShadow: '0 0 30px rgba(0, 183, 255, 0.4)',
        borderColor: 'rgba(0, 183, 255, 0.6)',
        duration: 0.3
      });
      
      // Icon animation
      const icon = featureRefs.current[hoveredFeature]?.querySelector('.feature-icon');
      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 5,
          duration: 0.3,
          ease: 'back.out'
        });
      }
    } else if (hoveredFeature !== null && featureRefs.current[hoveredFeature]) {
      // Reset animations
      gsap.to(featureRefs.current[hoveredFeature], {
        boxShadow: '0 0 20px rgba(0, 183, 255, 0.1)',
        borderColor: 'rgba(0, 183, 255, 0.2)',
        duration: 0.3
      });
      
      const icon = featureRefs.current[hoveredFeature]?.querySelector('.feature-icon');
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.3
        });
      }
    }
  }, [hoveredFeature]);
  
  const features = [
    {
      icon: "fa-chart-line",
      color: "#00b7ff", // Cyan
      secondaryColor: "#6e00ff", // Purple
      title: "AI-Powered Analytics",
      description: "Harness quantum processing algorithms to transform your data into predictive insights that adapt to emerging patterns in real-time.",
      status: "99.8% accuracy"
    },
    {
      icon: "fa-shield-alt",
      color: "#6e00ff", // Purple
      secondaryColor: "#ff00e5", // Magenta
      title: "Quantum Security",
      description: "Deploy post-quantum cryptography with neural safeguards that protect against advanced threats and zero-day exploits.",
      status: "Zero breaches"
    },
    {
      icon: "fa-microchip",
      color: "#00ffd5", // Teal
      secondaryColor: "#00b7ff", // Cyan
      title: "Neural Integration",
      description: "Seamlessly interface with existing technologies through our adaptive integration layer with self-healing connection protocols.",
      status: "5ms latency"
    },
    {
      icon: "fa-rocket",
      color: "#ff9500", // Orange
      secondaryColor: "#ff00aa", // Pink
      title: "Hyperdimensional Scaling",
      description: "Our distributed architecture automatically scales computational resources, with self-optimizing load balancing across nodes.",
      status: "∞ scalability"
    },
    {
      icon: "fa-brain",
      color: "#ff00aa", // Pink
      secondaryColor: "#6e00ff", // Purple
      title: "Collective Intelligence",
      description: "Multi-threaded collaboration environments with holographic data visualization and gesture-based interaction paradigms.",
      status: "98% adoption"
    },
    {
      icon: "fa-robot",
      color: "#00b7ff", // Cyan
      secondaryColor: "#00ffd5", // Teal
      title: "Autonomous Assistance",
      description: "Always-on cognitive assistance with predictive problem resolution and self-evolving knowledge architecture.",
      status: "24/7 uptime"
    }
  ];

  return (
    <section id="features" className="section-padding futuristic-gradient relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00b7ff] opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#6e00ff] opacity-5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white uppercase tracking-wide font-medium mb-4">
            Next-Gen Features
          </span>
          <h2 className="title-section mb-4">Advanced Capabilities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Our platform offers a comprehensive suite of quantum-enhanced tools designed to transcend conventional limitations, 
            providing unprecedented levels of intelligence, security, and adaptability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0" 
              ref={el => featureRefs.current[index] = el}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              data-aos="fade-up" 
              data-aos-delay={100 + index * 50}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated border */}
              <div className="p-6 relative">
                {/* Top status bar */}
                <div className="absolute top-0 left-0 right-0 p-2 border-b border-cyan-400/20 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-xs text-cyan-400 font-mono">SYS.ACTIVE</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">{feature.status}</div>
                </div>
                
                <div className="mt-6 flex flex-col h-full">
                  {/* Icon with glow */}
                  <div 
                    className="feature-icon w-16 h-16 flex items-center justify-center mb-5 mx-auto rounded-full relative transform-gpu transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.secondaryColor}20)`,
                      boxShadow: `0 0 20px ${feature.color}40`
                    }}
                  >
                    <i 
                      className={`fas ${feature.icon} text-2xl`}
                      style={{
                        color: feature.color,
                        textShadow: `0 0 10px ${feature.color}`
                      }}
                    ></i>
                    <div 
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        background: `radial-gradient(circle, ${feature.color}40 0%, transparent 70%)`
                      }}
                    ></div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 
                      className="text-xl font-bold mb-3 neon-text"
                      style={{ textShadow: `0 0 10px ${feature.color}50` }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 mb-6">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom connector line */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                  
                  {/* Interactive Button */}
                  <div className="mt-4 text-center">
                    <button 
                      className="px-4 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/80 bg-cyan-500/10 text-cyan-400"
                      style={{
                        textShadow: `0 0 5px ${feature.color}`
                      }}
                    >
                      <span className="mr-2">Explore</span>
                      <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Circuit Board Lines Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden rounded-lg">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`circuit-${index}`} width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10,10 L90,10 M10,50 L90,50 M10,90 L90,90 M10,10 L10,90 M50,10 L50,90 M90,10 L90,90" stroke={feature.color} strokeWidth="1" fill="none" />
                    <circle cx="10" cy="10" r="2" fill={feature.color} />
                    <circle cx="50" cy="10" r="2" fill={feature.color} />
                    <circle cx="90" cy="10" r="2" fill={feature.color} />
                    <circle cx="10" cy="50" r="2" fill={feature.color} />
                    <circle cx="50" cy="50" r="2" fill={feature.color} />
                    <circle cx="90" cy="50" r="2" fill={feature.color} />
                    <circle cx="10" cy="90" r="2" fill={feature.color} />
                    <circle cx="50" cy="90" r="2" fill={feature.color} />
                    <circle cx="90" cy="90" r="2" fill={feature.color} />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill={`url(#circuit-${index})`} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
