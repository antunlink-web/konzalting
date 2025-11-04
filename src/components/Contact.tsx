import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { translations, Language } from '@/lib/i18n';
import { Send } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface ContactProps {
  language: Language;
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const Contact = ({ language }: ContactProps) => {
  const t = translations[language].contact;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7a6fbce5-f71b-4f52-a58e-12bcbbd3a492', // Replace with your actual key
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t.success,
          variant: 'default',
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: t.error,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
              <p className="text-white/90 font-bold text-xs uppercase tracking-widest">Get In Touch</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-[-0.02em]">
              {t.title}
            </h2>
            <p className="text-xl text-white/70 font-light">
              {t.description}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-spring"></div>
            <div className="relative bg-card/90 backdrop-blur-2xl rounded-3xl shadow-elegant border border-white/10 p-10 animate-scale-in">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-foreground">{t.name}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t.name} 
                            {...field} 
                            className="h-12 rounded-2xl bg-background/60 backdrop-blur-sm border-border/60 focus:border-accent focus:ring-accent/20 transition-smooth shadow-inner"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-foreground">{t.email}</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder={t.email} 
                            {...field} 
                            className="h-12 rounded-2xl bg-background/60 backdrop-blur-sm border-border/60 focus:border-accent focus:ring-accent/20 transition-smooth shadow-inner"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-foreground">{t.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.message}
                            className="min-h-[180px] rounded-2xl bg-background/60 backdrop-blur-sm border-border/60 focus:border-accent focus:ring-accent/20 transition-smooth resize-none shadow-inner"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="relative w-full h-14 bg-gradient-accent hover:shadow-glow transition-spring text-lg font-bold rounded-2xl overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-smooth"></span>
                    <Send className="relative mr-2 h-5 w-5" />
                    <span className="relative">{isSubmitting ? t.sending : t.send}</span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
