import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg'
            : 'bg-white shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center gap-2 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Qriocity</span>
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider group-hover:scale-110 transition-transform">Ventures</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium transition-all hover:scale-105">Testimonials</a>
                        <a href="#curriculum" className="text-gray-600 hover:text-primary font-medium transition-all hover:scale-105">Syllabus</a>
                        <a href="#projects" className="text-gray-600 hover:text-primary font-medium transition-all hover:scale-105">Projects</a>
                        <a href="#pricing" className="text-gray-600 hover:text-primary font-medium transition-all hover:scale-105">Pricing</a>
                        <a href="#faq" className="text-gray-600 hover:text-primary font-medium transition-all hover:scale-105">FAQs</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2 transition-transform hover:scale-110"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 absolute w-full shadow-lg animate-slide-up">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors" onClick={toggleMenu}>Testimonials</a>
                        <a href="#curriculum" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors" onClick={toggleMenu}>Syllabus</a>
                        <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors" onClick={toggleMenu}>Projects</a>
                        <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium transition-colors" onClick={toggleMenu}>Pricing</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
