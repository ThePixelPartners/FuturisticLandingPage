export default function ContentBlockA() {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team working together in modern office" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--neutral-dark))]">Empowering Teams to Achieve More</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We understand the challenges modern businesses face. Our platform is designed to simplify complex processes and enable your team to focus on what matters most.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              With Parallel, you gain a partner committed to your success through cutting-edge technology and unparalleled support.
            </p>
            <a href="#" className="btn-gradient text-white px-8 py-3 rounded-full text-base uppercase font-semibold shadow-lg inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
