import { Mail, MessageCircle, Phone } from "lucide-react";

const contactLinks = [
  {
    title: "WhatsApp",
    description: "Chat with me directly for quick inquiries",
    icon: MessageCircle,
    url: "https://wa.me/+6289658370077",
    color: "hover:border-green-500/50",
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Email",
    description: "Send me a detailed message",
    icon: Mail,
    url: "siapmpls2019@gmail.com",
    color: "hover:border-yellow-500/50",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Phone",
    description: "Call me for urgent matters",
    icon: Phone,
    url: "tel:+6289658370077",
    color: "hover:border-blue-500/50",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-card/30 border-y border-border" id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="section-title">
            <span className="text-gradient">Contact</span> Me
          </h2>
          <p className="text-muted-foreground mt-4">
            Need help with your network infrastructure? Let's discuss your project!
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-2xl bg-card border border-border 
                           ${link.color} transition-all duration-300 hover:scale-105 group`}
                style={{ 
                  opacity: 0, 
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`p-4 rounded-2xl ${link.bgColor} ${link.iconColor} mb-4
                               group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
