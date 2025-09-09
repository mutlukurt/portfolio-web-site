import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sample data for search functionality
  const searchData = [
    { id: 1, title: 'About Me', content: 'Learn about my background and experience', section: 'about' },
    { id: 2, title: 'Services', content: 'Brand Identity, Product Design, Interaction Design', section: 'services' },
    { id: 3, title: 'Skills', content: 'User Research, Visual Design, User Testing, Prototyping', section: 'skills' },
    { id: 4, title: 'Contact', content: 'Get in touch for collaborations', section: 'contact' },
  ];

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileNavClick = (href) => {
    // Close menu first
    setIsMenuOpen(false);
    
    // Wait for menu animation to complete, then scroll
    setTimeout(() => {
      scrollToSection(href);
    }, 300);
  };

  const handleSearchResultClick = (section) => {
    const href = `#${section}`;
    setSearchQuery('');
    setSearchResults([]);
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => {
        scrollToSection(href);
      }, 300);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-serif font-bold text-primary-purple">
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 hover:text-primary-purple transition-colors duration-200 font-medium group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-soft-blue/30 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200 w-48"
              />
            </div>
            
            {/* Search Results */}
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border overflow-hidden"
                >
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchResultClick(result.section)}
                      className="w-full px-4 py-3 text-left hover:bg-soft-blue/20 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-gray-800">{result.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{result.content}</div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-purple hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-soft-blue/30 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleMobileNavClick(item.href)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-purple hover:bg-soft-blue/20 rounded-md transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 font-medium">Search Results:</div>
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchResultClick(result.section)}
                      className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-soft-blue/20 rounded-md transition-colors duration-200"
                    >
                      <div className="font-medium text-gray-800">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.content}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;