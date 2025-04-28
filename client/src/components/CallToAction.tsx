export default function CallToAction() {
  return (
    <section id="contact" className="section-padding hero-gradient">
      <div className="container mx-auto px-4">
        <div className="bg-white py-16 px-6 md:p-16 rounded-xl shadow-xl max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="title-section">Ready to Transform Your Business?</h2>
            <p className="subtitle max-w-3xl mx-auto">
              Join thousands of companies that have already discovered the power of Parallel. 
              Get started today and see the difference our platform can make.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
              <a href="#" className="btn-primary">
                Start Your Free Trial
              </a>
              <a href="#" className="btn-secondary">
                Schedule a Demo
              </a>
            </div>
            
            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-[hsl(var(--neutral-dark))] mb-6">
                Have questions? Our team is here to help.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="flex items-center text-[hsl(var(--primary-blue))] hover:text-[hsl(var(--primary-purple))]">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>support@parallel.com</span>
                </a>
                <a href="#" className="flex items-center text-[hsl(var(--primary-blue))] hover:text-[hsl(var(--primary-purple))]">
                  <i className="fas fa-phone mr-2"></i>
                  <span>1-800-PARALLEL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
