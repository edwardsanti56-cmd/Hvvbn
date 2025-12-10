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
        <nav className="bg-surface/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg shadow-zinc-200/50 flex items-center gap-4 md:gap-8 overflow-x-auto max-w-full">
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
                    About
                </a>
            </li>
            <li>
                <a 
                    href="#strategy" 
                    onClick={(e) => handleNavClick(e, 'strategy')}
                    className="text-zinc-500 hover:text-zinc-900 transition-colors block py-1"
                >
                    Strategy
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
          subtitle="Your Future in Forex, Defined by Strategy."
          description="Greetings! I'm Benjamin Santiago, a 16-year-old forex trader. Welcome to my portfolio, where I introduce my unique trading methodology."
        >
          <a
            href="#strategy"
            onClick={(e) => handleNavClick(e, 'strategy')}
            className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-zinc-900 rounded-full hover:bg-zinc-800 hover:scale-105 transition-all duration-300 group shadow-lg shadow-purple-500/20 cursor-pointer"
            aria-label="View My Strategy"
          >
            Explore Strategy
            <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </Hero>

        {/* Partners Section */}
        <Partners />

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1000&auto=format&fit=crop"
                  alt="Benjamin Santiago"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover border border-zinc-200 bg-white grayscale"
                />
              </div>
            </div>
            <div className="md:w-7/12 text-lg text-zinc-600 leading-relaxed space-y-6">
              <p>
                At 16, my journey into the dynamic world of forex trading began. What started as curiosity quickly evolved into a profound passion for understanding market movements and developing robust strategies.
              </p>
              <p>
                This dedication led to the birth of my own trading methodology: <span className="text-purple-600 font-semibold">Morning Song Concepts (MSC)</span>. MSC is more than just a strategy; it's a reflection of my analytical mindset and commitment to disciplined trading.
              </p>
              <p>
                I believe in a structured approach that aims for consistent, sustainable growth while meticulously managing risk.
              </p>
            </div>
          </div>
        </Section>

        {/* Strategy Section */}
        <Section id="strategy" title="The Strategy">
          <div className="grid grid-cols-1 gap-8">
            <div className="text-lg text-zinc-600 leading-relaxed space-y-6">
              
              {/* Concept Text */}
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm">
                 <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Core Philosophy</h3>
                 <p className="mb-4">
                  <span className="text-pink-600 font-semibold">Morning Song Concepts (MSC)</span> revolves around identifying specific market conditions during key trading sessions, particularly focusing on volatility and liquidity shifts.
                </p>
                <p>
                  It incorporates a blend of technical analysis, price action, and a deep understanding of market structure. It's designed to provide clear entry and exit points, with built-in risk management protocols.
                </p>
              </div>

              {/* Chart Examples Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-zinc-200">
                    <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">Session Highlights</div>
                    <img 
                        src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Session Highlights Chart" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-zinc-200">
                    <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">Market Structure</div>
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                        alt="Market Structure Analysis" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
              </div>
              
              {/* Pillars */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-border text-center shadow-sm hover:border-purple-500/50 hover:shadow-md transition-all">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold text-zinc-900 mb-1">Analysis</h4>
                  <p className="text-sm text-zinc-500">Technical & Fundamental</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border text-center shadow-sm hover:border-pink-500/50 hover:shadow-md transition-all">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-bold text-zinc-900 mb-1">Risk Mgmt</h4>
                  <p className="text-sm text-zinc-500">Capital Protection First</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border text-center shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all">
                   <div className="text-3xl mb-2">⏱️</div>
                   <h4 className="font-bold text-zinc-900 mb-1">Timing</h4>
                   <p className="text-sm text-zinc-500">Session Specifics</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get in Touch">
          <p className="text-center text-xl mb-12 text-zinc-500">
            Interested in connecting? Reach out directly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ContactCard type="Phone" value="Call Me" link="tel:+256708758536" displayValue="0708 758 536" />
            <ContactCard type="WhatsApp" value="Chat" link="https://wa.me/256708758536" displayValue="WhatsApp" />
            <ContactCard type="Gmail" value="Email" link={`mailto:${emailAddress}`} displayValue="Send an Email" />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};