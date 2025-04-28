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
      className="section-padding testimonial-section overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="title-section">What Our Clients Say</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Parallel.
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
                <div className="testimonial-card glass-card p-8 h-full flex flex-col">
                  <div className="mb-6 flex-grow">
                    <div className="text-[hsl(var(--primary-blue))] mb-4">
                      <i className="fas fa-quote-left text-3xl opacity-50"></i>
                    </div>
                    <p className="text-[hsl(var(--neutral-dark))] mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex text-yellow-400 mb-4">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 float-animation">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} portrait`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[hsl(var(--text-black))]">{testimonial.name}</h4>
                      <p className="text-sm text-[hsl(var(--neutral-dark))]">{testimonial.role}</p>
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
