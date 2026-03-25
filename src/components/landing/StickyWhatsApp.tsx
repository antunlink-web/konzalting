import { MessageCircle } from 'lucide-react';

export const StickyWhatsApp = () => {
  return (
    <a
      href="href="https://wa.me/385915122888""
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
};
