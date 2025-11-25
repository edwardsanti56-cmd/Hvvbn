import React from 'react';

interface ContactCardProps {
  type: 'Phone' | 'WhatsApp' | 'Gmail';
  value: string;
  link: string;
  displayValue?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ type, value, link, displayValue }) => {
  const getIcon = (contactType: string) => {
    switch (contactType) {
      case 'Phone':
        return (
          <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.5-2.5 3 3-2.5 2.5 4.5 4.5a1 1 0 01.684.948V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
          </svg>
        );
      case 'WhatsApp':
        return (
          <svg className="w-6 h-6 text-zinc-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.92L2.01 22.04L7.29 20.61C8.84 21.46 10.53 21.91 12.04 21.91C17.5 21.91 21.95 17.46 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM17.18 16.28C16.94 16.74 16.35 16.89 15.86 16.64C15.38 16.39 12.56 14.88 12.11 14.63C11.66 14.38 11.33 14.39 11.1 14.64C10.87 14.9 10.22 15.65 10.03 15.89C9.84 16.14 9.68 16.17 9.4 16.03C9.13 15.89 8.23 15.22 7.15 14.28C6.31 13.56 5.75 12.67 5.51 12.26C5.28 11.85 5.3 11.66 5.51 11.45C5.69 11.27 5.92 10.95 6.13 10.69C6.34 10.43 6.47 10.39 6.66 10.36C6.84 10.33 7.04 10.32 7.23 10.37C7.42 10.42 7.66 10.66 7.82 10.86C7.99 11.06 8.16 11.3 8.28 11.45C8.4 11.6 8.46 11.62 8.57 11.56C9.07 11.31 9.94 10.98 10.9 10.09C11.65 9.4 12.23 8.78 12.43 8.44C12.63 8.1 12.82 8.01 13 8.04C13.18 8.07 13.62 8.35 14.07 8.64C14.53 8.94 14.82 9.12 14.95 9.21C15.08 9.3 15.17 9.28 15.3 9.22C15.42 9.15 16.34 8.61 16.59 8.2C16.84 7.79 16.69 7.42 16.56 7.2C16.44 7 16.24 6.94 16.04 6.91C15.84 6.89 15.66 6.88 15.5 6.88C15.34 6.88 15.08 6.94 14.78 7.23C14.49 7.52 13.78 8.2 13.78 9.58C13.78 10.96 14.78 12.29 14.92 12.43C15.06 12.57 16.92 13.88 17.18 14.01C17.44 14.15 17.59 14.23 17.68 14.39C17.77 14.56 17.77 15.32 17.18 16.28Z"></path>
          </svg>
        );
      case 'Gmail':
        return (
          <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  // Only open in new tab if it is a web link (http/https).
  // Protocols like mailto: and tel: should not open in a new tab.
  const isWebLink = link.startsWith('http');

  return (
    <a
      href={link}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-zinc-200
                 hover:bg-zinc-50 hover:border-purple-500/30 hover:shadow-md
                 transition-all duration-300 transform hover:-translate-y-1
                 w-full text-center group cursor-pointer shadow-sm"
      aria-label={`Contact via ${type}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 group-hover:bg-purple-200 transition-colors">
        {getIcon(type)}
      </div>
      <h3 className="text-lg font-bold text-zinc-900 mb-1">{value}</h3>
      <p className="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors">
        {displayValue || type}
      </p>
    </a>
  );
};