export default function ContentBlockA() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(var(--secondary-teal))] rounded-lg opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--primary-blue))] rounded-lg opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working together in modern office" 
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-16">
            <h2 className="title-section">Empowering Teams to Achieve More</h2>
            <p className="text-[hsl(var(--neutral-dark))] mb-6">
              We understand the challenges modern businesses face. Our platform is designed to simplify complex processes and enable your team to focus on what matters most.
            </p>
            <p className="text-[hsl(var(--neutral-dark))] mb-8">
              With Parallel, you gain a partner committed to your success through cutting-edge technology and unparalleled support.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Intuitive collaboration tools</p>
              </div>
              <div className="flex items-center">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Streamlined workflow automation</p>
              </div>
              <div className="flex items-center">
                <div className="text-[hsl(var(--primary-blue))] mr-3">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-[hsl(var(--text-black))] font-medium">Real-time performance analytics</p>
              </div>
            </div>
            <div className="mt-10">
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
