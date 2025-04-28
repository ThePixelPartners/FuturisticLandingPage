export default function ContentBlockB() {
  return (
    <section className="section-padding section-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-16 mt-12 md:mt-0">
            <h2 className="title-section">Tailored Solutions for Every Industry</h2>
            <p className="text-[hsl(var(--neutral-dark))] mb-6">
              Every industry has unique challenges and opportunities. Our platform adapts to your specific needs, providing customized workflows and tools that drive results.
            </p>
            <p className="text-[hsl(var(--neutral-dark))] mb-8">
              From healthcare to finance, education to manufacturing, we've helped organizations across sectors transform their operations and achieve remarkable growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-[hsl(var(--primary-purple))] mb-2">
                  <i className="fas fa-briefcase-medical text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Healthcare</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Streamline patient care and secure data management</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-[hsl(var(--secondary-teal))] mb-2">
                  <i className="fas fa-university text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Finance</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Enhance security and operational efficiency</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-[hsl(var(--secondary-orange))] mb-2">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="font-bold text-[hsl(var(--text-black))] mb-1">Education</h3>
                <p className="text-sm text-[hsl(var(--neutral-dark))]">Improve learning outcomes and administration</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
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
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--primary-purple))] rounded-lg opacity-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(var(--primary-blue))] rounded-lg opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital product interface" 
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
