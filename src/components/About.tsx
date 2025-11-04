import { translations, Language } from '@/lib/i18n';
import profileImage from '@/assets/profile.jpeg';

interface AboutProps {
  language: Language;
}

export const About = ({ language }: AboutProps) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8 animate-fade-in">
              <div>
                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">
                  {t.subtitle}
                </p>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                  {t.title}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="px-5 py-2.5 bg-gradient-card backdrop-blur-sm text-primary rounded-xl text-sm font-semibold border border-border shadow-card hover:shadow-elegant transition-smooth">
                  🇭🇷 Hrvatski
                </div>
                <div className="px-5 py-2.5 bg-gradient-card backdrop-blur-sm text-primary rounded-xl text-sm font-semibold border border-border shadow-card hover:shadow-elegant transition-smooth">
                  🇬🇧 English
                </div>
                <div className="px-5 py-2.5 bg-gradient-card backdrop-blur-sm text-primary rounded-xl text-sm font-semibold border border-border shadow-card hover:shadow-elegant transition-smooth">
                  🇷🇺 Русский
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-25 group-hover:opacity-40 transition-smooth"></div>
                <div className="absolute -inset-1 bg-gradient-accent rounded-3xl opacity-20 blur"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-full max-w-md rounded-3xl shadow-elegant hover:shadow-glow transition-spring border-2 border-accent/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
