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
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center mb-10 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-inner">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse mr-3"></div>
            <p className="text-white/90 font-semibold text-sm tracking-widest uppercase">{t.subtitle}</p>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.05] tracking-[-0.02em]">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            {t.description}
          </p>
          
          <Button 
            size="lg" 
            onClick={onContactClick}
            className="relative bg-gradient-accent text-background hover:shadow-glow shadow-elegant transition-spring group px-10 py-7 text-lg rounded-2xl font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-smooth"></span>
            <span className="relative">{t.cta}</span>
            <ArrowRight className="relative ml-3 h-5 w-5 group-hover:translate-x-2 transition-spring" />
          </Button>
        </div>
      </div>
    </section>
  );
};
