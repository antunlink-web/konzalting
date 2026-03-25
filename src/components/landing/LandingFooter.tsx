export const LandingFooter = () => {
  return (
    <footer className="py-10 border-t border-border/30 bg-card/20">
      <div className="container mx-auto px-5 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Antun Palić. Все права защищены.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Хорватия • Русский • Английский • Хорватский
        </p>
      </div>
    </footer>
  );
};
