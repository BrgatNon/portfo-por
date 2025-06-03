
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center py-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6 animate-fade-in">
              Sa
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Student & Aspiring Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate about creating innovative solutions through code. 
              Currently studying computer science and building projects that make a difference.
            </p>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToPortfolio}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
