import React from 'react';
import { Section } from '../ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <Section id="contact" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Store</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have a question about a product? Need a repair? Drop by our store or contact us via WhatsApp for an immediate response.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-3 rounded-full text-primary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                <p className="text-gray-600">123 Tech Avenue, Innovation District<br/>Metropolis, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-3 rounded-full text-primary mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Phone / WhatsApp</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-3 rounded-full text-primary mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                <p className="text-gray-600">support@electrotech.dummy.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-3 rounded-full text-primary mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Store Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
               <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858]">
                 Chat on WhatsApp Now
               </Button>
            </a>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-3xl overflow-hidden min-h-[400px] border border-gray-100 shadow-inner relative flex items-center justify-center">
          {/* A simple styled element simulating a map area */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-sm m-8 rounded-2xl border border-white/40 shadow-lg">
            <MapPin size={48} className="text-primary mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Area</h3>
            <p className="text-gray-600 font-medium">Embed Google Maps iframe here</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
