import { CheckCircle2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const points = [
  'Живу и работаю в Хорватии',
  'Помогаю с открытием бизнеса, документами и бюрократией',
  'Говорю на русском, английском и хорватском',
  'Индивидуальный подход к каждому клиенту',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Обо мне</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ваш надёжный помощник в Хорватии
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Я помогаю русскоязычным людям решать вопросы в Хорватии — от регистрации компании до повседневных задач. 
              Моя цель — сделать вашу жизнь проще, убрав языковые и бюрократические барьеры.
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl object-cover border border-border/50 shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
