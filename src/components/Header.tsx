
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },  
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
            </div>
            <span className="text-xl font-heading font-bold text-gray-800 mt-2 ml-2">TeckySoft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-brand-blue transition-colors duration-200 font-medium font-body relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-brand-blue hover:bg-blue-50 font-medium"
            >
              Get Quote
            </Button> */}
            <Link to="/contact">
              <Button 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-brand-blue transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-100 bg-white rounded-2xl shadow-lg mx-4">
            <nav className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-brand-blue transition-colors duration-200 font-medium font-body py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                {/* <Button 
                  variant="outline" 
                  className="border-gray-200 text-gray-600 hover:border-brand-blue hover:text-brand-blue rounded-xl"
                >
                  Get Quote
                </Button> */}
                <Link to="/contact">
                  <Button 
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl shadow-lg w-full"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
