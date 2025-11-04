import { Language, translations } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background via-secondary/20 to-background py-16 border-t border-border/40">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-4">
          <p className="text-foreground/80 text-base font-semibold tracking-wide">
            © {currentYear}. {t.rights}
          </p>
          <p className="text-muted-foreground text-sm font-medium">
            {t.languages}
          </p>
        </div>
      </div>
    </footer>
  );
};
