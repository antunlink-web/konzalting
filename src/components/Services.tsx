import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Home, TrendingDown, Monitor, Languages, Headphones } from 'lucide-react';
import { translations, Language } from '@/lib/i18n';

interface ServicesProps {
  language: Language;
}

export const Services = ({ language }: ServicesProps) => {
  const t = translations[language].services;

  const services = [
    {
      icon: Home,
      title: t.accommodation.title,
      description: t.accommodation.description,
    },
    {
      icon: Building2,
      title: t.company.title,
      description: t.company.description,
    },
    {
      icon: TrendingDown,
      title: t.optimization.title,
      description: t.optimization.description,
    },
    {
      icon: Monitor,
      title: t.it.title,
      description: t.it.description,
    },
    {
      icon: Languages,
      title: t.translation.title,
      description: t.translation.description,
    },
    {
      icon: Headphones,
      title: t.general.title,
      description: t.general.description,
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group shadow-card hover:shadow-elegant transition-spring hover:-translate-y-2 bg-gradient-card backdrop-blur-sm border-border/50 overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow/30 group-hover:shadow-glow transition-spring group-hover:scale-110">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
