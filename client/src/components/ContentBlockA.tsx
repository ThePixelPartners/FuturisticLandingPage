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
      className="section-padding parallax-section py-24 relative"
      ref={sectionRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0" ref={imageRef} data-aos="fade-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(var(--secondary-teal))] rounded-lg opacity-10 float-animation"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--primary-blue))] rounded-lg opacity-10 float-animation" style={{ animationDelay: '1s' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working together in modern office" 
                className="rounded-lg shadow-xl w-full h-auto relative z-10 glass-card"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-16" ref={contentRef} data-aos="fade-left">
            <h2 className="title-section content-item">Empowering Teams to Achieve More</h2>
            <p className="text-[hsl(var(--neutral-dark))] mb-6 content-item">
              We understand the challenges modern businesses face. Our platform is designed to simplify complex processes and enable your team to focus on what matters most.
            </p>
            <p className="text-[hsl(var(--neutral-dark))] mb-8 content-item">
              With Parallel, you gain a partner committed to your success through cutting-edge technology and unparalleled support.
            </p>
            <div className="space-y-4">
              <div className="flex items-center content-item">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Intuitive collaboration tools</p>
              </div>
              <div className="flex items-center content-item">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Streamlined workflow automation</p>
              </div>
              <div className="flex items-center content-item">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Real-time performance analytics</p>
              </div>
            </div>
            <div className="mt-10 content-item">
              <a href="#" className="btn-primary inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
