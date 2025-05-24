
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'Web Development',
      'Mobile Apps',
      'Cloud Solutions',
      'UI/UX Design',
      'Data Analytics',
      'Cybersecurity'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Case Studies',
      'White Papers',
      'Documentation',
      'Support',
      'FAQ',
      'Community'
    ]
  };

  return (
    <footer className="bg-tech-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-heading font-bold">TechSolutions</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative IT solutions. We deliver cutting-edge technology services that drive growth, efficiency, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-tech-blue rounded-full flex items-center justify-center hover:bg-tech-blue/80 transition-colors">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-tech-teal rounded-full flex items-center justify-center hover:bg-tech-teal/80 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-tech-orange rounded-full flex items-center justify-center hover:bg-tech-orange/80 transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-600/80 transition-colors">
                <span className="text-sm">📱</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-lg mb-4 text-tech-orange">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="font-heading font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-4 lg:mb-0">Get the latest insights on technology trends and digital transformation.</p>
            </div>
            <div className="lg:flex-shrink-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-tech-blue"
                />
                <button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} TechSolutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
