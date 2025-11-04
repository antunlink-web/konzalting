import { useState } from 'react';
import { Language } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
        onContactClick={scrollToContact}
      />
      <main className="pt-20">
        <Hero language={language} onContactClick={scrollToContact} />
        <About language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
