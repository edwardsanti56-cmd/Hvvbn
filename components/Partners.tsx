import React from 'react';

export const Partners: React.FC = () => {
  const partners = [
    { 
      name: 'Exness', 
      logo: 'https://logo.clearbit.com/exness.com', 
      url: 'https://www.exness.com' 
    },
    { 
      name: 'TradingView', 
      logo: 'https://logo.clearbit.com/tradingview.com', 
      url: 'https://www.tradingview.com' 
    },
    { 
      name: 'MetaTrader 5', 
      logo: 'https://logo.clearbit.com/metatrader5.com', 
      url: 'https://www.metatrader5.com' 
    },
    { 
      name: 'Google Classroom', 
      logo: 'https://logo.clearbit.com/classroom.google.com', 
      url: 'https://classroom.google.com' 
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-4">
        <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">
            Powered by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
                <a 
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                >
                    <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-8 h-8 rounded-md object-contain bg-transparent group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            // If logo fails, we hide the image and just show text
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <span className="text-lg font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors">
                        {partner.name}
                    </span>
                </a>
            ))}
        </div>
    </div>
  );
};
