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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Consulting
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors hidden sm:inline"
            >
              {t.services}
            </a>
            <Button 
              variant="ghost" 
              onClick={onContactClick}
              className="hidden sm:inline-flex"
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
