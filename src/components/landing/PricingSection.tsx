import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Info } from 'lucide-react';

const plans = [
  {
    title: 'ВНЖ по обучению',
    price: 'от 1999 €',
    features: [
      'Подготовка документов',
      'Сопровождение процесса',
      'Консультации по ВНЖ',
      'Помощь с бюрократией',
    ],
    cta: 'Получить консультацию',
    highlighted: false,
  },
  {
    title: 'Digital Nomad ВНЖ',
    price: 'от 1499 €',
    features: [
      'Анализ ситуации',
      'Подготовка документов',
      'Сопровождение подачи',
      'Консультации по легализации',
    ],
    cta: 'Обсудить',
    highlighted: false,
  },
  {
    title: 'Открытие компании',
    price: 'от 2999 €',
    badge: 'Популярно',
    features: [
      'Регистрация компании',
      'Подготовка документов',
      'Помощь с банком',
      'Консультации по структуре бизнеса',
      'Сопровождение процесса',
    ],
    cta: 'Начать',
    highlighted: true,
  },
  {
    title: 'Воссоединение семьи',
    price: 'от 599 € / человек',
    features: [
      'Подготовка документов',
      'Сопровождение подачи',
      'Консультации по процессу',
      'Индивидуальный подход',
    ],
    note: 'Если двое детей — условия обсуждаются индивидуально.',
    cta: 'Узнать подробнее',
    highlighted: false,
  },
];

const supportPlans = [
  {
    title: 'Юридический адрес',
    price: 'от 199 € / месяц',
    description: 'Предоставление юридического адреса для компании в Хорватии.',
  },
  {
    title: 'Бухгалтерия',
    price: 'от 249 € / месяц',
    description: 'Ведение бухгалтерии и базовое сопровождение бизнеса.',
  },
  {
    title: 'Переводчик для бухгалтерии',
    price: '+149 € / месяц',
    description: 'Помощь с коммуникацией и сопровождением на русском языке.',
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Тарифы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Прозрачные цены</h2>
          <p className="text-muted-foreground leading-relaxed">
            Стоимость зависит от вашей ситуации и сложности процесса. Ниже — базовые цены на основные услуги.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`bg-gradient-card border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-card relative flex flex-col ${
                plan.highlighted ? 'border-primary/50 shadow-glow/20' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent rounded-full text-xs font-bold text-primary-foreground whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <div className="text-3xl font-extrabold text-gradient mt-3">{plan.price}</div>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col flex-1">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <p className="text-xs text-muted-foreground italic mb-4 leading-relaxed">{plan.note}</p>
                )}
                <Button
                  asChild
                  className={`w-full rounded-xl ${
                    plan.highlighted
                      ? 'bg-gradient-accent text-primary-foreground hover:opacity-90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  <a href="https://wa.me/385915122888" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {plan.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {supportPlans.map((plan, i) => (
            <Card
              key={i}
              className="bg-card/40 backdrop-blur-xl border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-base font-semibold text-foreground">{plan.title}</h3>
                  <span className="text-base font-bold text-primary whitespace-nowrap">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-card/40 backdrop-blur-xl border-border/40">
            <CardContent className="p-7">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-3">Важно</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Каждая ситуация индивидуальна. Стоимость может зависеть от:
                  </p>
                  <ul className="text-sm text-foreground/80 space-y-1.5 mb-3">
                    <li>• текущего статуса в Хорватии</li>
                    <li>• сложности кейса</li>
                    <li>• количества документов</li>
                    <li>• срочности</li>
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Точная стоимость обсуждается после консультации.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
