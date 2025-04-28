export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 mb-12 md:mb-0">
            <h1 className="title-large text-white mb-6">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="text-white opacity-90 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Transform your organization with our cutting-edge platform and unlock new possibilities for growth, efficiency, and success.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#" className="btn-primary">
                Get Started
              </a>
              <a href="#" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--primary-blue))]">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-[hsl(var(--primary-purple))] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[hsl(var(--secondary-teal))] rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Digital business transformation" 
                className="rounded-lg shadow-2xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
