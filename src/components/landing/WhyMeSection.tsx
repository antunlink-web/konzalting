import { Shield, Clock, Heart, Zap, MessageSquare, ThumbsUp } from 'lucide-react';

const reasons = [
  { icon: Shield, text: 'Проверенный опыт работы с клиентами из СНГ' },
  { icon: Clock, text: 'Быстрая реакция — отвечаю в течение часа' },
  { icon: Heart, text: 'Индивидуальный подход, а не шаблоны' },
  { icon: Zap, text: 'Решаю вопросы быстро и эффективно' },
  { icon: MessageSquare, text: 'Всегда на связи — WhatsApp, Telegram, Email' },
  { icon: ThumbsUp, text: 'Довольные клиенты рекомендуют друзьям' },
];

export const WhyMeSection = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Преимущества</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему выбирают меня</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/20 transition-colors">
              <reason.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground/85 font-medium text-sm">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
