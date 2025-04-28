export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-montserrat tracking-tight">
              Transform Your Business with Parallel
            </h1>
            <p className="text-white opacity-90 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Unleash your company's potential with our innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#" className="btn-gradient text-white px-8 py-3 rounded-full text-base uppercase font-semibold shadow-lg inline-block">
                Get Started
              </a>
              <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base uppercase font-semibold hover:bg-white hover:text-[hsl(var(--primary-purple))] transition-colors inline-block">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating on a digital project" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
