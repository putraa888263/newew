import { User, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border 
                          transition-all duration-500 group-hover:border-primary/50 group-hover:glow-box">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2x1/AVvXsEiguDdg4wt1XGp10r-C9Js3qCRXQTB0tSx-Va80VWhA0jO1Ye-FivCVGnYV0X4z6RzhqAQ7V2AVkewxeqGnDsv1oT4CehRqcy55QI3LOCE-KbweU35Nbbg82jkAX1x1g0fw9B09Ypr16UxQJ1MWWjovY8bwg2RJ4gnFSJQPF-UVLhVY1GX_W0S4R-J92dvxc/s729/IMG-20250828-WA0004(1).jpg" // ganti
                alt="Profile"
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
          
          {/* Info */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-primary font-mono text-sm mb-2">Who am I?</p>
              <h2 className="section-title">
                Hi, I'm <span className="text-gradient">ADE PUTRA AZHARI</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              A passionate Network Engineer specializing in Mikrotik Router configuration 
              and network infrastructure. I design, implement, and maintain reliable 
              network solutions for businesses of all sizes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>MTCNA Certified</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "2+", label: "Years Exp" },
                { value: "50+", label: "Networks" },
                { value: "10+", label: "Certifications" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-card border border-border 
                           transition-all duration-300 hover:border-primary/50 card-hover"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
