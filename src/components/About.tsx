import { translations, Language } from '@/lib/i18n';
import profileImage from '@/assets/profile.jpeg';

interface AboutProps {
  language: Language;
}

export const About = ({ language }: AboutProps) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-secondary/40">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 space-y-8 animate-fade-in">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest">
                    {t.subtitle}
                  </p>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] leading-tight">
                  {t.title}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="group px-6 py-3 bg-card/80 backdrop-blur-xl text-foreground rounded-2xl text-sm font-bold border border-accent/30 shadow-card hover:shadow-glow hover:border-accent/60 transition-spring">
                  <span className="group-hover:text-accent transition-smooth">🇭🇷 Hrvatski</span>
                </div>
                <div className="group px-6 py-3 bg-card/80 backdrop-blur-xl text-foreground rounded-2xl text-sm font-bold border border-accent/30 shadow-card hover:shadow-glow hover:border-accent/60 transition-spring">
                  <span className="group-hover:text-accent transition-smooth">🇬🇧 English</span>
                </div>
                <div className="group px-6 py-3 bg-card/80 backdrop-blur-xl text-foreground rounded-2xl text-sm font-bold border border-accent/30 shadow-card hover:shadow-glow hover:border-accent/60 transition-spring">
                  <span className="group-hover:text-accent transition-smooth">🇷🇺 Русский</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent rounded-[2rem] blur-3xl opacity-30 group-hover:opacity-50 transition-spring"></div>
                <div className="absolute -inset-0.5 bg-gradient-accent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-spring blur-sm"></div>
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="relative w-full max-w-md rounded-[2rem] shadow-elegant border-2 border-accent/20 group-hover:border-accent/40 transition-spring"
                  />
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-spring"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
