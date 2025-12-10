import React from 'react';
import Hero from './components/Hero'; // Changed to default import
import { Section } from './components/Section';
import { ContactCard } from './components/ContactCard';
import { Footer } from './components/Footer';
import { Partners } from './components/Partners';

export const App: React.FC = () => {
  const emailAddress = 'ssakaedward299@gmail.com';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Adjust for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-zinc-900">
      {/* Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-surface/90 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg shadow-zinc-200/50 flex items-center gap-4 md:gap-8 overflow-x-auto max-w-full">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            MSC
          </a>
          <ul className="flex gap-4 md:space-x-6 text-sm font-medium whitespace-nowrap">
            <li>
                <a 
                    href="#about" 
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="text-zinc-500 hover:text-zinc-900 transition-colors block py-1"
                >
                    Founder
                </a>
            </li>
            <li>
                <a 
                    href="#strategy" 
                    onClick={(e) => handleNavClick(e, 'strategy')}
                    className="text-zinc-500 hover:text-zinc-900 transition-colors block py-1"
                >
                    Methodology
                </a>
            </li>
            <li>
                <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="text-zinc-500 hover:text-zinc-900 transition-colors block py-1"
                >
                    Contact
                </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow pt-24 px-4 pb-20 max-w-7xl mx-auto w-full flex flex-col gap-6">
        
        {/* Hero Section */}
        <Hero
          id="home"
          title="Morning Song Concepts"
          subtitle="White Merry Model — Sated Motion Model"
          description="A proprietary structure-based trading system developed by Semb Benjamin. Built on first-principles structure analysis, refined through session research, and systematic study of internal orderflow."
        >
          <a
            href="#strategy"
            onClick={(e) => handleNavClick(e, 'strategy')}
            className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-zinc-900 rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300 group shadow-lg shadow-purple-500/20 cursor-pointer"
            aria-label="View My Strategy"
          >
            View Documentation
            <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </Hero>

        {/* Partners Section */}
        <Partners />

        {/* About Section */}
        <Section id="about" title="About the Founder">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="https://i.postimg.cc/mkJ4vFxy/20251204-110733.jpg"
                  alt="Semb Benjamin"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover border border-zinc-200 bg-white grayscale"
                />
              </div>
            </div>
            <div className="md:w-7/12 text-lg text-zinc-600 leading-relaxed space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900">Semb Benjamin</h3>
              <p className="font-medium text-purple-600">Founder & Lead Strategist, MSC</p>
              
              <p>
                Semb Benjamin is among the youngest documented forex traders to construct a full proprietary trading strategy — including model design, session research, structure principles, entry models, and a verified trading plan — entirely from original research.
              </p>
              <p>
                Beginning his journey at age 16, Benjamin moved beyond basic technical analysis to develop <strong>Morning Song Concepts (MSC)</strong>. His work represents a shift towards professional, quantitative-style market analysis, focusing on session-based behavior and internal liquidity engineering.
              </p>
              <p>
                His vision is clear: to establish a professional trading legacy and contribute rigorous, tested research to the East African trading community.
              </p>
            </div>
          </div>
        </Section>

        {/* Strategy Section */}
        <Section id="strategy" title="Methodology & Models">
          <div className="flex flex-col gap-12">
            
            {/* Mission Statement */}
            <div className="border-l-4 border-purple-600 pl-6 py-2 bg-purple-50 rounded-r-xl">
               <blockquote className="text-xl md:text-2xl font-medium text-zinc-800 italic leading-relaxed">
                "Morning Song Concepts (MSC) is a proprietary trading methodology developed from first-principles structure analysis, refined through thousands of chart hours, detailed session research, and systematic study of internal orderflow."
               </blockquote>
            </div>

            {/* Core Philosophy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        Session Framework
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                        MSC does not trade random movement. We define strict windows for Asian expectation, London retracement, and New York expansion to align with institutional volume.
                    </p>
                </div>
                <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                        Internal Orderflow
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                         Systematic study of internal structure, distinguishing between counter-internal and pro-internal conditions, specifically targeting liquidity engineering and sweeps.
                    </p>
                </div>
                <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Entry Conditions
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                        Entries are not time-based but context-based. We require clear liquidity context, displacement, and sweep confirmation before execution.
                    </p>
                </div>
            </div>

            {/* The Models */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2">Proprietary Models</h3>
                
                {/* White Merry Model */}
                <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex-1 relative z-10">
                        <div className="inline-block px-3 py-1 bg-purple-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">New York Reversal</div>
                        <h4 className="text-3xl font-bold mb-4">White Merry Model</h4>
                        <p className="text-zinc-300 mb-6 leading-relaxed">
                            The rarest and highest-quality setup in the MSC arsenal. This reversal model capitalizes on the liquidity inducement created during the London session.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-300">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">▹</span>
                                <span><strong>Context:</strong> London creates inducement.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">▹</span>
                                <span><strong>Execution:</strong> NYC sweeps internal structure followed by a liquidity shift.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400 mt-1">▹</span>
                                <span><strong>Key mechanics:</strong> Reversal displacement and rigorous entry confirmation.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-5/12 relative z-10 min-h-[200px] bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-4 flex items-center justify-center">
                        <span className="text-zinc-500 text-sm font-mono">Model Schematic Restricted</span>
                    </div>
                </div>

                {/* Sated Motion Model */}
                <div className="flex flex-col md:flex-row-reverse gap-8 bg-white border border-border p-8 rounded-3xl shadow-sm">
                    <div className="flex-1">
                         <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">London Continuation</div>
                        <h4 className="text-3xl font-bold text-zinc-900 mb-4">Sated Motion Model</h4>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            A high-probability continuation model designed for the London session. It focuses on pro-trend movement following specific structural alignments.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-600">
                             <li className="flex items-start gap-2">
                                <span className="text-pink-600 mt-1">▹</span>
                                <span><strong>Objective:</strong> Capture the primary leg of the session expansion.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-600 mt-1">▹</span>
                                <span><strong>Sequence:</strong> Sweep → Displacement → Entry Zone.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-600 mt-1">▹</span>
                                <span><strong>Discipline:</strong> Strict avoidance of counter-internal conditions.</span>
                            </li>
                        </ul>
                    </div>
                     <div className="md:w-5/12 min-h-[200px] bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center">
                        <span className="text-zinc-400 text-sm font-mono">Model Schematic Restricted</span>
                    </div>
                </div>
            </div>

            {/* Academic Section */}
            <div className="pt-8 border-t border-zinc-200">
                <h3 className="text-lg font-bold text-zinc-900 mb-4">Research & Validation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-zinc-50 rounded-xl">
                        <div className="text-2xl font-bold text-zinc-900 mb-1">16</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Age Started</div>
                    </div>
                     <div className="p-4 bg-zinc-50 rounded-xl">
                        <div className="text-2xl font-bold text-zinc-900 mb-1">2+</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Proprietary Models</div>
                    </div>
                     <div className="p-4 bg-zinc-50 rounded-xl">
                        <div className="text-2xl font-bold text-zinc-900 mb-1">1000s</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Chart Hours</div>
                    </div>
                     <div className="p-4 bg-zinc-50 rounded-xl">
                        <div className="text-2xl font-bold text-zinc-900 mb-1">First</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wide">Principles Design</div>
                    </div>
                </div>
            </div>

          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Professional Inquiries">
          <p className="text-center text-xl mb-12 text-zinc-500 max-w-2xl mx-auto">
            Open for strategy discussions, proprietary firm networking, and educational consultation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ContactCard type="Phone" value="Direct Line" link="tel:+256708758536" displayValue="+256 708 758 536" />
            <ContactCard type="WhatsApp" value="WhatsApp" link="https://wa.me/256708758536" displayValue="Message Me" />
            <ContactCard type="Gmail" value="Email" link={`mailto:${emailAddress}`} displayValue="Send Inquiry" />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};