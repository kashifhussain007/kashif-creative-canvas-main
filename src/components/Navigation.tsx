
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Code, Mail, Star } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kashif Hussain</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-400"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 w-full text-left"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 mt-4"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
