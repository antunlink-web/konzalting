import { Briefcase, FileText, Languages, Home, Calculator, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Briefcase,
    title: 'Открытие бизнеса',
    description:
      'Регистрация компаний в Хорватии, помощь с документами, банком и сопровождением запуска бизнеса.',
  },
  {
    icon: BadgeCheck,
    title: 'ВНЖ и легализация',
    description:
      'Сопровождение по ВНЖ, Digital Nomad, обучению и воссоединению семьи.',
  },
  {
    icon: FileText,
    title: 'Документы и бюрократия',
    description:
      'Помощь с государственными органами, заявлениями, переводами и официальной коммуникацией.',
  },
  {
    icon: Languages,
    title: 'Переводы и коммуникация',
    description:
      'Устный и письменный перевод, сопровождение на встречах и помощь в общении с гос. органами и компаниями.',
  },
  {
    icon: Calculator,
    title: 'Бухгалтерия и бизнес-поддержка',
    description:
      'Помощь с бухгалтерией, коммуникацией с бухгалтером и сопровождением бизнеса.',
  },
  {
    icon: Home,
    title: 'Недвижимость',
    description:
      'Помощь при аренде и покупке недвижимости, проверка документов и сопровождение процесса.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Услуги</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Чем я могу помочь</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-gradient-card border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
            >
              <CardContent className="p-7">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
