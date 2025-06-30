import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Dining', path: '/dining' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Check if current page is Gallery or Contact
  const isGalleryOrContact = location.pathname === '/gallery' || location.pathname === '/contact';

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
              isScrolled
                  ? isGalleryOrContact
                      ? 'bg-white shadow-md' // Solid background for Gallery/Contact when scrolled
                      : 'bg-white/95 backdrop-blur-sm shadow-md'
                  : isGalleryOrContact
                      ? 'bg-white shadow-md' // Solid background for Gallery/Contact initially
                      : 'bg-white/30 backdrop-blur-md border-b border-white/20'
          }`}
      >
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                  to="/"
                  className={`text-2xl font-script transition-colors duration-300 ${
                      isScrolled || isGalleryOrContact ? 'text-teal-800' : 'text-white'
                  }`}
              >
                Morning Star Resort
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 uppercase ${
                            isActive(item.path)
                                ? isScrolled || isGalleryOrContact
                                    ? 'text-teal-800 bg-teal-100/80'
                                    : 'text-white bg-white/20 backdrop-blur-sm'
                                : isScrolled || isGalleryOrContact
                                    ? 'text-[#5f6b8c] hover:text-teal-800 hover:bg-teal-100/80'
                                    : 'text-white/90 hover:text-white hover:bg-white/20'
                        }`}
                    >
                      {item.name}
                    </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-colors duration-300 focus:outline-none ${
                      isScrolled || isGalleryOrContact
                          ? 'text-gray-700 hover:text-teal-800'
                          : 'text-white hover:text-white/80'
                  }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
                  {navItems.map((item) => (
                      <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                              isActive(item.path)
                                  ? 'text-teal-800 bg-teal-100'
                                  : 'text-[#5f6b8c] hover:text-teal-800 hover:bg-teal-100'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;