import { useEffect, useState } from "react";
import { Briefcase, Phone } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ENGINEER";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLinks = () => {
    const element = document.getElementById('links');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(84_81%_44%_/_0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float animation-delay-300" />
      
      {/* Status badge */}
      <div className="opacity-0 animate-fade-in-up mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          SIAP UNTUK PRAKTEK KERJA LAPANGAN 
        </span>
      </div>
      
      {/* Main heading */}
      <div className="text-center space-y-4 relative z-10">
        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
          <span className="text-foreground block">NETWORK</span>
          <span className="text-primary">{displayText}</span>
          <span className="text-primary animate-blink">|</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed border-l-4 border-primary pl-4 text-left">
          Network Engineer Spesialis Mikrotik RouterOS & Network Infrastructure
        </p>
      </div>
      
      {/* CTA Buttons */}
      <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-md px-4">
        <button
          onClick={scrollToLinks}
          className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
                     bg-primary text-primary-foreground font-bold text-lg
                     hover:bg-primary/90 transition-all duration-300 hover:scale-105
                     shadow-lg shadow-primary/25 border-2 border-foreground"
        >
          <Briefcase className="w-5 h-5" />
          LIHAT KARYA
        </button>
        
        <button
          onClick={scrollToContact}
          className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
                     bg-background text-foreground font-bold text-lg
                     hover:bg-muted transition-all duration-300 hover:scale-105
                     border-2 border-foreground"
        >
          <Phone className="w-5 h-5" />
          HUBUNGI SAYA
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="opacity-0 animate-fade-in-up animation-delay-500 absolute bottom-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-mono">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
