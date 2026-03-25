import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center mb-8 px-5 py-2.5 bg-primary/10 backdrop-blur-xl rounded-full border border-primary/20">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse mr-3"></div>
            <p className="text-foreground/80 font-medium text-sm tracking-wide">
              Открытие бизнеса • Документы • Переводы • Общение с гос. органами
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
            Помогаю русскоязычным в Хорватии{' '}
            <span className="text-gradient">решить любые вопросы</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Без стресса. На русском языке. С местной экспертизой.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-glow/40 px-8 py-6 text-base rounded-2xl font-bold group"
            >
              <a href="<a href="https://wa.me/385915122888" target="_blank" rel="noopener noreferrer">" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border/60 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/40 px-8 py-6 text-base rounded-2xl font-semibold group"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
