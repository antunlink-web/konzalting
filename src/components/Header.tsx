import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Language, translations } from '@/lib/i18n';
import { Briefcase } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onContactClick: () => void;
}

export const Header = ({ language, onLanguageChange, onContactClick }: HeaderProps) => {
  const t = translations[language].nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow/50 transition-spring hover:scale-110">
              <Briefcase className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline tracking-tight">
              Consulting
            </span>
          </div>

          <nav className="flex items-center gap-8">
            <a 
              href="#services" 
              className="text-foreground/70 hover:text-foreground transition-smooth font-medium hidden sm:inline relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
            >
              {t.services}
            </a>
            <Button 
              variant="ghost" 
              onClick={onContactClick}
              className="hidden sm:inline-flex hover:bg-accent/10 hover:text-accent transition-smooth font-medium"
            >
              {t.contact}
            </Button>
            <LanguageSwitcher 
              currentLanguage={language} 
              onLanguageChange={onLanguageChange} 
            />
          </nav>
        </div>
      </div>
    </header>
  );
};
