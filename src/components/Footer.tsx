import { Language, translations } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-3">
          <p className="text-foreground/70 text-base font-medium">
            © {currentYear}. {t.rights}
          </p>
          <p className="text-muted-foreground text-sm">
            {t.languages}
          </p>
        </div>
      </div>
    </footer>
  );
};
