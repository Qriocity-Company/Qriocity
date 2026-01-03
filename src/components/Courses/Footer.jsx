import React from 'react';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Qriocity Ventures</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Chennai's first community-driven AI learning academy. Where curious minds become AI professionals.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Syllabus</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Mentors</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>+91-98765-43210</li>
                            <li>learn@qriocityventures.com</li>
                            <li>Chennai, India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Qriocity Ventures. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
