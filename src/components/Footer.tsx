
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

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

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-green rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-heading font-bold">TechSolutions</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md font-body">
              Transforming businesses through innovative IT solutions. We deliver cutting-edge technology services that drive growth, efficiency, and digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-brand-blue transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-lg mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-body">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-16 pt-12">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="font-heading font-semibold text-xl mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6 lg:mb-0 font-body">Get the latest insights on technology trends and digital transformation.</p>
            </div>
            <div className="lg:flex-shrink-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-brand-blue transition-colors font-body"
                />
                <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="font-body">&copy; {currentYear} TechSolutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors font-body">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors font-body">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors font-body">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
