import { translations, Language } from '@/lib/i18n';
import profileImage from '@/assets/profile.jpeg';

interface AboutProps {
  language: Language;
}

export const About = ({ language }: AboutProps) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  {t.subtitle}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  {t.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  🇭🇷 Hrvatski
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  🇬🇧 English
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  🇷🇺 Русский
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-full max-w-md rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
