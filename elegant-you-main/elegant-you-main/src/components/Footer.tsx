import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-mono">
          © {currentYear} — All rights reserved
        </p>
        
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Made with <Heart className="w-4 h-4 text-primary animate-pulse" /> by 
          <span className="text-primary font-semibold">Ade Putra Azhari</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
