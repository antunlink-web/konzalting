import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-5">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Контакт</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Напишите мне</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground/80 mb-2 block">Ваше имя</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                required
                className="bg-card/60 border-border/50 rounded-xl h-12 focus:border-primary/50"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground/80 mb-2 block">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="bg-card/60 border-border/50 rounded-xl h-12 focus:border-primary/50"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground/80 mb-2 block">Сообщение</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Расскажите о вашем вопросе..."
                required
                rows={5}
                className="bg-card/60 border-border/50 rounded-xl focus:border-primary/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-accent text-primary-foreground hover:opacity-90 rounded-xl h-12 font-bold"
            >
              <Send className="mr-2 h-4 w-4" />
              Отправить сообщение
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
