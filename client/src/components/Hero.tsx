import { useEffect, useRef } from 'react';
import placeholderVideo from '../assets/videos/placeholder.svg';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

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
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Video */}
      <div className="video-background">
        <img 
          src={placeholderVideo}
          alt="Background animation" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="video-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 mb-12 md:mb-0">
            <h1 
              ref={headlineRef} 
              className="title-large text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Innovative Solutions for Modern Businesses
            </h1>
            <p 
              ref={paragraphRef}
              className="text-white opacity-90 text-lg mb-8 max-w-lg mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transform your organization with our cutting-edge platform and unlock new possibilities for growth, efficiency, and success.
            </p>
            <div 
              ref={ctaContainerRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a href="#features" className="btn-primary btn-ripple">
                Get Started
              </a>
              <a href="#" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--primary-blue))]">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div 
            ref={imageContainerRef} 
            className="w-full md:w-1/2"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="relative float-animation">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-[hsl(var(--primary-purple))] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[hsl(var(--secondary-teal))] rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Digital business transformation" 
                className="rounded-lg shadow-2xl w-full h-auto relative z-10 glass-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
