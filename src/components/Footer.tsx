import { Language, translations } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-primary-foreground/80 text-sm mb-2">
            © {currentYear}. {t.rights}
          </p>
          <p className="text-primary-foreground/60 text-xs">
            {t.languages}
          </p>
        </div>
      </div>
    </footer>
  );
};
