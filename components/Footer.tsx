import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 pb-6 mt-12 w-full max-w-7xl mx-auto">
      <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group shadow-sm">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors duration-700"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-none mb-8">
                    Let's trade <br /> <span className="text-zinc-400">smarter.</span>
                </h2>
                <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
                    <a 
                        href="mailto:ssakaedward299@gmail.com" 
                        className="group/link flex items-center gap-3 text-lg md:text-2xl text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        <span className="border-b border-zinc-300 group-hover/link:border-zinc-900 pb-1 transition-colors break-all md:break-normal">
                            ssakaedward299@gmail.com
                        </span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-zinc-100">
                <div className="flex gap-6 mb-6 md:mb-0">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">Twitter / X</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">LinkedIn</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">Instagram</a>
                </div>

                <div className="text-left md:text-right w-full md:w-auto">
                    <p className="text-zinc-400 text-xs mb-1">&copy; {new Date().getFullYear()} Morning Song Concepts.</p>
                    <p className="text-zinc-300 text-[10px] uppercase tracking-widest font-semibold">Kampala, Uganda</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};