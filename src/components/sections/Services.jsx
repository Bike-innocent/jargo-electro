import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { Wrench, Zap, Settings, Cpu } from 'lucide-react';

export function Services() {
  const categories = [
    {
      title: "Electronics Repair",
      description: "Fast and reliable repair for TVs, laptops, smartphones, and home appliances.",
      icon: <Wrench size={32} className="text-secondary" />,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Electrical Wiring",
      description: "Professional house and office wiring, installations, and electrical upgrades.",
      icon: <Zap size={32} className="text-secondary" />,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "System Maintenance",
      description: "Routine check-ups and maintenance for your electronic systems to prevent breakdowns.",
      icon: <Settings size={32} className="text-secondary" />,
      image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Diagnostics",
      description: "Advanced troubleshooting to identify and fix tricky electrical and hardware issues.",
      icon: <Cpu size={32} className="text-secondary" />,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Section id="services" bg="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Specialized Services</h2>
        <p className="text-gray-600 text-lg">
          We offer a wide range of professional electronics and electrical services to keep your systems running safely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Card key={index} className="group cursor-pointer">
            <div className="h-48 overflow-hidden rounded-t-2xl relative">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 w-full h-full"></div>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
              />
            </div>
            <div className="p-6 relative">
              <div className="bg-white rounded-xl shadow-lg p-3 inline-block absolute -top-10 right-6 border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 mt-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>
              <div className="flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                Explore services
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
