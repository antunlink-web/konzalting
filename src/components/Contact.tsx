import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { translations, Language } from '@/lib/i18n';

interface ContactProps {
  language: Language;
}

export const Contact = ({ language }: ContactProps) => {
  const t = translations[language].contact;

  const handleContact = () => {
    window.location.href = 'mailto:contact@example.com';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            {t.description}
          </p>
          <Button 
            size="lg" 
            onClick={handleContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
          >
            <Mail className="mr-2 h-5 w-5" />
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
