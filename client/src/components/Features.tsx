export default function Features() {
  const features = [
    {
      icon: "fa-chart-line",
      title: "Data-Driven Insights",
      description: "Make informed decisions with our comprehensive analytics and reporting tools."
    },
    {
      icon: "fa-shield-alt",
      title: "Enterprise Security",
      description: "Protect your valuable assets with our state-of-the-art security infrastructure."
    },
    {
      icon: "fa-sync-alt",
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows without any disruption."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--neutral-dark))]">Our Core Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide innovative solutions designed to elevate your business to new heights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center card-lift">
              <div className="bg-[hsl(var(--neutral-light))] inline-flex p-4 rounded-full mb-6">
                <i className={`fas ${feature.icon} text-3xl text-[hsl(var(--primary-purple))]`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(var(--neutral-dark))]">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
