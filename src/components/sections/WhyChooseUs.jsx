import React from 'react';
import { Section } from '../ui/Section';
import { ShieldCheck, Truck, HeadphonesIcon, Award } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award size={28} />,
      title: "Premium Quality",
      description: "We source our products directly from authorized distributors ensuring 100% genuine electronics."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Warranty",
      description: "All our devices come with comprehensive manufacturer warranties and our own store guarantee."
    },
    {
      icon: <Truck size={28} />,
      title: "Fast Delivery",
      description: "Same-day delivery within the city and reliable shipping for nationwide orders."
    },
    {
      icon: <HeadphonesIcon size={28} />,
      title: "Expert Support",
      description: "Our certified tech team is always ready to help you choose or troubleshoot your devices."
    }
  ];

  return (
    <Section id="why-us" bg="neutral">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Hundreds of Customers Trust Us</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We don't just sell electronics; we provide a complete tech experience. From the moment you walk into our store to long after your purchase, we ensure you get the best value and support.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1 bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-secondary">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-2xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Customer support team"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Committed to Excellence</h3>
              <p className="text-white/80">Experience retail like never before.</p>
            </div>
          </div>
          
          <div className="absolute top-8 -right-8 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </Section>
  );
}
