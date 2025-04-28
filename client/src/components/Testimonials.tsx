import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useIsMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sample testimonials data
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "CEO, TechNova",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Parallel transformed our approach to data management. The platform's intuitive design and powerful features have significantly improved our productivity and decision-making processes."
    },
    {
      name: "Sophia Rodriguez",
      role: "CMO, GrowthMedia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The level of customer support we've received has been exceptional. The team at Parallel has been responsive, knowledgeable, and genuinely invested in our success."
    },
    {
      name: "David Chen",
      role: "CTO, InnovateCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Implementing Parallel was one of the best business decisions we've made. The ROI has been substantial, and our team productivity has increased by over 40% in just six months."
    },
    {
      name: "Emma Wilson",
      role: "VP of Operations, FutureTech",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Parallel's platform has streamlined our workflows and enhanced collaboration across departments. It's been a game-changer for our organization's efficiency."
    },
    {
      name: "James Parker",
      role: "Founder, InnovateNow",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The analytics capabilities in Parallel have given us insights we never had before. We're making more data-driven decisions and seeing real results."
    }
  ];

  // Add animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0d101e] to-[#141b33]" 
      ref={sectionRef}
    >
      {/* Abstract Geometric Animation Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          {/* Canvas for geometric animation - using different shapes */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff00e5" />
                <stop offset="100%" stopColor="#6e00ff" />
              </linearGradient>
              <linearGradient id="gradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ffd5" />
                <stop offset="100%" stopColor="#00b7ff" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated triangles */}
            <g className="triangles">
              <path d="M100,100 L200,150 L150,250 Z" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0s' }} />
              <path d="M500,150 L600,50 L650,200 Z" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.7s' }} />
              <path d="M850,300 L950,350 L900,450 Z" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1.4s' }} />
              <path d="M250,350 L350,300 L320,420 Z" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2.1s' }} />
              <path d="M650,400 L750,450 L700,550 Z" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2.8s' }} />
            </g>
            
            {/* Animated rectangles with rounded corners */}
            <g className="rectangles">
              <rect x="120" y="220" width="100" height="60" rx="10" ry="10" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <rect x="420" y="320" width="80" height="40" rx="8" ry="8" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1s' }} />
              <rect x="720" y="120" width="120" height="70" rx="12" ry="12" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-float" style={{ animationDelay: '1.7s' }} />
              <rect x="220" y="420" width="90" height="50" rx="9" ry="9" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-float" style={{ animationDelay: '2.4s' }} />
              <rect x="520" y="520" width="110" height="65" rx="11" ry="11" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-float" style={{ animationDelay: '3.1s' }} />
            </g>
            
            {/* Animated circles */}
            <g className="circles" filter="url(#glow)">
              <circle cx="250" cy="150" r="25" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse-slow" />
              <circle cx="550" cy="250" r="20" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <circle cx="750" cy="350" r="30" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <circle cx="350" cy="450" r="22" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
              <circle cx="650" cy="150" r="28" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </g>
            
            {/* Animated zigzag paths */}
            <g className="zigzags">
              <path d="M50,300 L100,250 L150,300 L200,250 L250,300 L300,250" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              <path d="M400,200 L450,150 L500,200 L550,150 L600,200 L650,150" fill="none" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
              <path d="M700,500 L750,450 L800,500 L850,450 L900,500 L950,450" fill="none" stroke="url(#gradient4)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1.2s' }} />
            </g>
            
            {/* Animated dots for particle effect */}
            <g className="particles">
              {Array.from({ length: 20 }).map((_, i) => (
                <circle 
                  key={i}
                  cx={100 + (i * 50) % 800} 
                  cy={100 + Math.floor(i / 4) * 80} 
                  r="2" 
                  fill={i % 2 === 0 ? "#00b7ff" : "#6e00ff"} 
                  className="animate-pulse" 
                  style={{ animationDelay: `${i * 0.1}s` }} 
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white uppercase tracking-wide font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="title-section mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with our futuristic platform.
          </p>
        </div>
        
        {/* Desktop and Mobile Swiper Carousel */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="testimonial-swiper py-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card h-full flex flex-col relative group">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-6 flex-grow flex flex-col bg-[#0a0d19]/80 rounded-lg border border-cyan-400/20 backdrop-filter backdrop-blur-lg">
                    <div className="mb-6 flex-grow">
                      <div className="mb-4">
                        <i className="fas fa-quote-left text-3xl text-gradient-cyan"></i>
                      </div>
                      <p className="text-blue-100 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex text-cyan-400 mb-4 space-x-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    
                    {/* User profile */}
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 float-animation border-2 border-cyan-400/30">
                        <img 
                          src={testimonial.image}
                          alt={`${testimonial.name} portrait`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white neon-text">{testimonial.name}</h4>
                        <p className="text-sm text-blue-200">{testimonial.role}</p>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="ml-auto">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                        <span className="text-xs text-cyan-400 ml-1 font-mono">VERIFIED</span>
                      </div>
                    </div>
                    
                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 opacity-5 rounded-lg overflow-hidden pointer-events-none">
                      <svg viewBox="0 0 200 200" width="100%" height="100%" className="absolute inset-0">
                        <pattern id={`circuit-pattern-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M10,10 L40,10 M10,25 L40,25 M10,40 L40,40 M10,10 L10,40 M25,10 L25,40 M40,10 L40,40" stroke={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} strokeWidth="0.5" fill="none" />
                          <circle cx="10" cy="10" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="25" cy="10" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="40" cy="10" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="10" cy="25" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="25" cy="25" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="40" cy="25" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="10" cy="40" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="25" cy="40" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                          <circle cx="40" cy="40" r="1" fill={index % 2 === 0 ? "#00b7ff" : "#6e00ff"} />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#circuit-pattern-${index})`} />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
