import { MapPin, Languages, Globe, Users } from 'lucide-react';

const items = [
  { icon: MapPin, text: 'Живу в Хорватии' },
  { icon: Languages, text: 'Русский / Английский / Хорватский' },
  { icon: Globe, text: 'Опыт: ЕС + Восточная Европа' },
  { icon: Users, text: 'Бизнес и частные клиенты' },
];

export const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
