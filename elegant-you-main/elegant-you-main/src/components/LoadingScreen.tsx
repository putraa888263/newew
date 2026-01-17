import { useEffect, useState } from "react";
import { Wifi, Router, Shield, Server } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowContent(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!showContent) {
    return (
      <div className="fixed inset-0 z-[100] bg-background animate-slide-up" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      {/* Animated network icons */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-primary/30 animate-ping" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary/50 animate-pulse" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Router className="w-10 h-10 text-primary animate-bounce" />
        </div>
        
        {/* Orbiting icons */}
        <div className="absolute inset-0 animate-spin-slow">
          <Wifi className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-5 h-5 text-primary/70" />
          <Shield className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-5 h-5 text-primary/70" />
          <Server className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-5 h-5 text-primary/70" />
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        <span className="text-foreground">NETWORK</span>{" "}
        <span className="text-primary">ENGINEER</span>
      </h1>
      
      <p className="text-muted-foreground text-sm mb-8 font-mono">
        Initializing network...
      </p>
      
      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <span className="mt-3 text-sm text-muted-foreground font-mono">
        {progress}%
      </span>
    </div>
  );
};

export default LoadingScreen;
