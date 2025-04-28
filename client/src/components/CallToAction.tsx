export default function CallToAction() {
  return (
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
        <p className="text-white opacity-90 text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of companies that have already discovered the power of Parallel.
        </p>
        <div className="flex justify-center">
          <a 
            href="#" 
            className="bg-white text-[hsl(var(--primary-purple))] px-8 py-3 rounded-full text-base uppercase font-semibold shadow-lg hover:shadow-xl transition duration-300 inline-block"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
