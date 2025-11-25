import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-32 p-8 md:p-12 bg-surface border border-border rounded-3xl shadow-sm" aria-labelledby={`${id}-title`}>
      <div className="w-full">
        <h2 id={`${id}-title`} className="text-3xl font-bold text-left mb-10 text-zinc-900 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full inline-block"></span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};