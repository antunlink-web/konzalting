import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle } from 'lucide-react';

const plans = [
  {
    title: 'Бесплатная консультация',
    price: 'Бесплатно',
    description: 'Обсудим ваш вопрос и составим план',
    features: ['15 минут по телефону/видео', 'Оценка вашей ситуации', 'Рекомендации по следующим шагам'],
    cta: 'Записаться',
    highlighted: false,
  },
  {
    title: 'Разовая помощь',
    price: 'от €50',
    description: 'Решение конкретной задачи',
    features: ['Один вопрос или задача', 'Перевод документов', 'Сопровождение на встрече', 'Оплата по факту'],
    cta: 'Узнать подробнее',
    highlighted: false,
  },
  {
    title: 'Открытие бизнеса',
    price: 'от €500',
    description: 'Полное сопровождение регистрации',
    features: ['Подготовка документов', 'Регистрация компании', 'Открытие банковского счёта', 'Получение OIB', 'Консультации по налогам'],
    cta: 'Начать',
    highlighted: true,
  },
  {
    title: 'Полная поддержка',
    price: 'от €200/мес',
    description: 'Постоянная помощь для вашего бизнеса',
    features: ['Текущие вопросы и задачи', 'Переводы и коммуникация', 'Оптимизация расходов', 'Приоритетная поддержка'],
    cta: 'Обсудить',
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Тарифы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Прозрачные цены</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`bg-gradient-card border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-card relative ${
                plan.highlighted ? 'border-primary/50 shadow-glow/20' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent rounded-full text-xs font-bold text-primary-foreground">
                  Популярный
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <div className="text-2xl font-extrabold text-foreground mt-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-xl ${
                    plan.highlighted
                      ? 'bg-gradient-accent text-primary-foreground hover:opacity-90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  <a href="https://wa.me/385XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {plan.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
