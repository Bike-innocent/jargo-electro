import React from 'react';
import { Wrench } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 border-b border-gray-700/50 pb-12">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Wrench size={24} className="text-secondary" />
              <span className="font-bold text-xl text-white">JargoElectronics</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for expert electronics repair, professional wiring, and maintenance services.
            </p>
            <div className="flex gap-4 cursor-pointer text-gray-400">
              <svg className="hover:text-secondary transition-colors w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <svg className="hover:text-secondary transition-colors w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <svg className="hover:text-secondary transition-colors w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-secondary transition-colors">Why Choose Us</a></li>
            </ul>
          </div>
          
        

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} JargoElectronics. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & built as a premium template.</p>
        </div>
      </div>
    </footer>
  );
}
