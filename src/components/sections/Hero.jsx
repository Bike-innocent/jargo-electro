import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-bg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 border border-secondary/20">
              #1 Electronics Repair & Service in the City
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
              Expert Electronics <br className="hidden md:block"/> 
              Repair & Wiring Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              We offer professional electronics fixing, secure wiring installations, and comprehensive maintenance. Quick, reliable, and guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                <Button variant="primary" size="lg" className="gap-2">
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="gap-2 bg-white">
                  Explore Services
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Available 24/7
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Verified Quality
              </div>
            </div>
          </div>

          {/* Hero Image / Illustration visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white aspect-[4/3] md:aspect-auto md:h-[600px] flex items-center justify-center">
               <img 
                 src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Electronics repair logic board" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[bounce_3s_infinite]">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">5k+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Happy Customers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
