import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Контакт', href: '#contact' },
];

export const LandingHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center">
              <User className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Antun Palić</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            size="sm"
            className="bg-gradient-accent text-primary-foreground hover:opacity-90 rounded-xl font-semibold"
          >
            <a href="https://wa.me/385XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              Написать
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
