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
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
            <p className="text-accent font-bold text-xs uppercase tracking-widest">Services</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-[-0.02em]">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative shadow-card hover:shadow-elegant transition-spring hover:-translate-y-2 bg-card/80 backdrop-blur-xl border-border/60 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-smooth"></div>
                <CardHeader className="space-y-5 relative">
                  <div className="relative h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow/40 group-hover:shadow-glow transition-spring group-hover:scale-105">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-100 blur-xl transition-smooth"></div>
                    <Icon className="h-8 w-8 text-accent-foreground relative z-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-3xl transition-spring"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
