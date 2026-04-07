import React from 'react';
import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" bg="neutral" className="border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About JargoElectronics</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Founded in 2018, JargoElectronics started with a simple mission: to provide fast, reliable, and safe electrical repairs and wiring. We believe in building relationships with our customers so you always have a trusted technical partner you can rely on.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Whether you need a simple appliance fix or a complete building wiring overhaul, our knowledgeable technicians take the time to understand your needs and execute the perfect solution.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-gray-200">
          <div>
            <h4 className="text-4xl font-bold text-secondary mb-2">5+</h4>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Years Experience</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-secondary mb-2">10k</h4>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Repairs Completed</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-secondary mb-2">3</h4>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Store Locations</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
