export default function Features() {
  const features = [
    {
      icon: "fa-chart-line",
      color: "primary-blue",
      title: "Data-Driven Insights",
      description: "Make informed decisions with our comprehensive analytics and reporting tools that provide real-time insights into your business operations."
    },
    {
      icon: "fa-shield-alt",
      color: "primary-purple",
      title: "Enterprise Security",
      description: "Protect your valuable assets with our state-of-the-art security infrastructure, ensuring your data remains safe and compliant."
    },
    {
      icon: "fa-sync-alt",
      color: "secondary-teal",
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows without any disruption, enhancing productivity across your entire organization."
    },
    {
      icon: "fa-rocket",
      color: "secondary-orange",
      title: "Scalable Solutions",
      description: "Our platform grows with your business, providing the flexibility and performance you need to meet evolving demands."
    },
    {
      icon: "fa-users",
      color: "primary-pink",
      title: "Collaborative Workspace",
      description: "Empower your team with intuitive tools designed for effective collaboration and streamlined communication."
    },
    {
      icon: "fa-headset",
      color: "primary-blue",
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you, ensuring you get the most out of our platform."
    }
  ];

  return (
    <section id="features" className="section-padding section-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-section">Powerful Features for Your Business</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Our platform offers a comprehensive suite of tools designed to enhance efficiency, 
            security, and collaboration across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-start">
                <div className={`bg-[hsl(var(--${feature.color}))] bg-opacity-10 p-4 rounded-lg mr-4`}>
                  <i className={`fas ${feature.icon} text-xl text-[hsl(var(--${feature.color}))]`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--text-black))]">{feature.title}</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
