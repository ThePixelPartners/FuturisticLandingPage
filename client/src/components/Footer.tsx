export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--text-black))] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-[hsl(var(--primary-blue))]">P</span>arallel
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary-blue))] transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary-blue))] transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary-blue))] transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary-blue))] transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--primary-blue))] transition-colors">API Reference</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-md bg-[rgba(255,255,255,0.05)] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[hsl(var(--primary-blue))]" 
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Parallel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[hsl(var(--primary-blue))] text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
