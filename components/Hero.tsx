import React, { useEffect, useState } from 'react';

interface HeroProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<{ text: string; position?: 'top' | 'bottom' }> = ({ text, position = 'top' }) => (
  <span 
    className={`absolute left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium text-white bg-zinc-800/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-50 transform scale-95 group-hover:scale-100 ${
      position === 'top' 
        ? 'bottom-full mb-2' 
        : 'top-full mt-2'
    }`}
  >
    {text}
    {/* Arrow */}
    <span 
      className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${
        position === 'top'
          ? 'top-full border-t-zinc-800/90'
          : 'bottom-full border-b-zinc-800/90'
      }`}
    ></span>
  </span>
);

const Hero: React.FC<HeroProps> = ({ id, title, subtitle, description, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center min-h-[60vh] text-center p-8 md:p-16
                 bg-surface border border-border rounded-3xl overflow-hidden shadow-sm scroll-mt-32"
      aria-label="Welcome to Morning Song Concepts"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h2 
          className={`group relative cursor-help text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-zinc-900 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500">
            {title}
          </span>
          <Tooltip text="My proprietary trading strategy" position="bottom" />
        </h2>
        
        <p 
          className={`group relative cursor-help text-xl sm:text-2xl font-medium mb-6 text-zinc-600 max-w-2xl transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          aria-label={subtitle}
        >
          {subtitle}
          <Tooltip text="The core mission statement" position="top" />
        </p>
        
        <p 
          className={`group relative cursor-help text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          aria-label={description}
        >
          {description}
          <Tooltip text="A personal introduction" position="top" />
        </p>
        
        <div className={`transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           {children}
        </div>

        {/* Forex Chart Image */}
        <div className={`mt-16 w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000&auto=format&fit=crop" 
                    alt="Financial charts and graphs on a computer screen, representing forex trading" 
                    className="w-full h-auto object-cover max-h-[500px] transform group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => console.error("Error loading hero image:", e.currentTarget.src)}
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;