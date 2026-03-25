import { Button } from '@/components/ui/button';
import { MessageCircle, Send } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Давайте решим ваш вопрос
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Напишите мне — первая консультация бесплатна
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-accent text-primary-foreground hover:opacity-90 px-8 py-6 text-base rounded-2xl font-bold"
            >
              <a href="https://wa.me/385XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[hsl(200_100%_40%)] text-primary-foreground hover:bg-[hsl(200_100%_35%)] px-8 py-6 text-base rounded-2xl font-bold"
            >
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
