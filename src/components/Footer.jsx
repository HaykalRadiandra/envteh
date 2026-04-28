const Footer = () => {
  return (
    <footer className="py-20 bg-brand-light-gray dark:bg-brand-charcoal border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-bold flex items-center gap-2 mb-8">
              <span className="text-brand-orange">Env</span>
              <span className="text-brand-magenta">teh</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm mb-8">
              Leading the way in custom software development and digital transformation. Building quality software since 2024.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-brand-orange hover:text-brand-orange transition-all">
                  <span className="sr-only">{social}</span>
                  {/* Placeholder for social icons */}
                  <div className="w-5 h-5 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-orange transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-brand-orange transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Contact</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li>hello@envteh.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Avenue, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <p>© 2024 Envteh Software. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
