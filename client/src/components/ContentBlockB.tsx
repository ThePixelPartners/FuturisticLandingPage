export default function ContentBlockB() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-16 mt-12 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--neutral-dark))]">Tailored Solutions for Your Industry</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Every industry has unique challenges and opportunities. Our platform adapts to your specific needs, providing customized workflows and tools that drive results.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              From healthcare to finance, education to manufacturing, we've helped organizations across sectors transform their operations and achieve remarkable growth.
            </p>
            <a href="#" className="btn-gradient text-white px-8 py-3 rounded-full text-base uppercase font-semibold shadow-lg inline-block">
              Explore Solutions
            </a>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital product interface" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
