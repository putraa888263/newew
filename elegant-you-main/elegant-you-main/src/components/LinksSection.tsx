import { Youtube, Instagram, Github, ExternalLink, Linkedin, Globe } from "lucide-react";

const socialLinks = [
  {
    title: "YouTube",
    description: "Watch my network tutorials & project showcases",
    icon: Youtube,
    url: "https://youtube.com/@putra.p9986?si=E6Iets7gf4u7w2cs",
    color: "hover:border-red-500/50",
    iconColor: "text-red-500",
  },
  {
    title: "GitHub",
    description: "Explore my network scripts & configurations",
    icon: Github,
    url: "https://github.com/putraa888263",
    color: "hover:border-gray-400/50",
    iconColor: "text-gray-400",
  },
  {
    title: "LinkedIn",
    description: "Connect professionally",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
    color: "hover:border-blue-500/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Instagram",
    description: "Follow my networking journey",
    icon: Instagram,
    url: "https://www.instagram.com/aih_siade?igsh=aDJpOWNsYXppbWt4",
    color: "hover:border-pink-500/50",
    iconColor: "text-pink-500",
  },
  {
    title: "Personal Website",
    description: "Visit my main portfolio site",
    icon: Globe,
    url: "https://yourwebsite.com",
    color: "hover:border-primary/50",
    iconColor: "text-primary",
  },
];

const LinksSection = () => {
  return (
    <section className="py-20 px-6" id="links">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">My Links</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Find me across the web — portfolio, tutorials, and more
          </p>
        </div>
        
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-button group ${link.color}`}
                style={{ 
                  opacity: 0, 
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`p-3 rounded-xl bg-secondary ${link.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                        transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
