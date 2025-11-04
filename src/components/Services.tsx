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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
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
