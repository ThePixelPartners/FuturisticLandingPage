import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();

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
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding testimonial-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-section">What Our Clients Say</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Parallel.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Grid for Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="mb-6">
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
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[hsl(var(--text-black))]">{testimonial.name}</h4>
                    <p className="text-sm text-[hsl(var(--neutral-dark))]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-card">
                      <div className="mb-6">
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
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image}
                          alt={`${testimonial.name} portrait`}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-[hsl(var(--text-black))]">{testimonial.name}</h4>
                          <p className="text-sm text-[hsl(var(--neutral-dark))]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Carousel Controls */}
            <div className="flex justify-center mt-8 items-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-[hsl(var(--primary-blue))]' : 'bg-gray-300'}`} 
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
