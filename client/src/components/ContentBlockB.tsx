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
    <section id="solutions" className="section-padding section-gray">
      <div className="container mx-auto px-4">
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
                    className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-white transition-transform duration-300 transform hover:scale-110"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-3xl`}></i>
                  </button>
                </div>
                
                {/* Actual video element */}
                <video 
                  ref={videoRef}
                  className="w-full h-auto"
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-typing-on-smartphone-in-business-settings-2202-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Video caption */}
            <div className="mt-4 text-center text-sm text-[hsl(var(--neutral-dark))]">
              Experience our platform's intuitive interface and powerful features in action.
            </div>
          </div>
        </div>
        
        {/* Industry solutions section */}
        <div className="flex flex-col-reverse md:flex-row items-center mt-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-16 mt-12 md:mt-0" data-aos="fade-right">
            <h2 className="title-section">Tailored Solutions for Every Industry</h2>
            <p className="text-[hsl(var(--neutral-dark))] mb-6">
              Every industry has unique challenges and opportunities. Our platform adapts to your specific needs, providing customized workflows and tools that drive results.
            </p>
            <p className="text-[hsl(var(--neutral-dark))] mb-8">
              From healthcare to finance, education to manufacturing, we've helped organizations across sectors transform their operations and achieve remarkable growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" ref={industryCardsRef}>
              <div className="bg-white p-4 rounded-lg shadow-sm industry-card glass-card">
                <div className="text-[hsl(var(--primary-purple))] mb-2">
                  <i className="fas fa-briefcase-medical text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Healthcare</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Streamline patient care and secure data management</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm industry-card glass-card">
                <div className="text-[hsl(var(--secondary-teal))] mb-2">
                  <i className="fas fa-university text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Finance</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Enhance security and operational efficiency</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm industry-card glass-card">
                <div className="text-[hsl(var(--secondary-orange))] mb-2">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Education</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Improve learning outcomes and administration</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm industry-card glass-card">
                <div className="text-[hsl(var(--primary-blue))] mb-2">
                  <i className="fas fa-industry text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Manufacturing</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Optimize operations and supply chain management</p>
              </div>
            </div>
            
            <a href="#" className="btn-primary inline-block">
              Explore Solutions
            </a>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative float-animation">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--primary-purple))] rounded-lg opacity-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--primary-blue))] rounded-lg opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital product interface" 
                className="rounded-lg shadow-xl w-full h-auto relative z-10 glass-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
