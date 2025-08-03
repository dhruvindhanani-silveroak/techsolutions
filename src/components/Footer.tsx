
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'UI/UX Design', href: '/services#ui-ux-design' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      // { name: 'Our Team', href: '/team' },
      // { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
  };

  const socialLinks = [
    // { icon: Github, href: 'https://github.com/teckysoft', label: 'GitHub' },
    // { icon: Twitter, href: 'https://twitter.com/teckysoft', label: 'Twitter' },
    // { icon: Linkedin, href: 'https://linkedin.com/company/teckysoft', label: 'LinkedIn' },
    // { icon: Instagram, href: 'https://instagram.com/teckysoft', label: 'Instagram' },
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
              <span className="text-xl font-heading font-bold">TeckySoft</span>
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
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 font-body">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="font-body">&copy; {currentYear} TeckySoft. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors font-body">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors font-body">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors font-body">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
