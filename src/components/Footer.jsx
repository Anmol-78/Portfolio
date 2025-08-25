import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="py-6 px-4 bg-card border-t border-border mt-12 flex flex-col items-center relative">
    <p className="text-sm text-muted-foreground text-center">
      &copy; {new Date().getFullYear()} Anmol Goyal.co. All rights reserved.
    </p>
    <a
      href="#hero"
      className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full 
      bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      aria-label="Back to Top"
    >
      <ArrowUp size={20} />
    </a>
  </footer>
);
