import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { translations, Language } from '@/lib/i18n';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export const Hero = ({ language, onContactClick }: HeroProps) => {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center mb-8 px-5 py-2.5 bg-accent/10 backdrop-blur-md rounded-full border border-accent/20 shadow-glow/20">
            <p className="text-accent font-semibold text-sm tracking-wide">{t.subtitle}</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-[1.1] tracking-tighter">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t.description}
          </p>
          
          <Button 
            size="lg" 
            onClick={onContactClick}
            className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-glow transition-spring group px-8 py-6 text-lg rounded-xl font-semibold"
          >
            {t.cta}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-spring" />
          </Button>
        </div>
      </div>
    </section>
  );
};
