import { Network, Router, Shield, Wifi, Server, Cable, Globe, Radio, MonitorSmartphone, Cloud } from "lucide-react";

const skills = [
  "Mikrotik RouterOS", "VLAN Configuration", "Firewall", "VPN Setup",
  "Network Security", "Load Balancing", "Bandwidth Management", "Hotspot",
  "Routing Protocol", "Wireless Network", "QoS", "Network Monitoring"
];

const networkIcons = [
  { icon: Router, name: "Router" },
  { icon: Network, name: "Network" },
  { icon: Shield, name: "Security" },
  { icon: Wifi, name: "Wireless" },
  { icon: Server, name: "Server" },
  { icon: Cable, name: "Cable" },
  { icon: Globe, name: "Internet" },
  { icon: Radio, name: "Radio" },
  { icon: MonitorSmartphone, name: "Monitoring" },
  { icon: Cloud, name: "Cloud" },
];

const SkillsMarquee = () => {
  const doubledSkills = [...skills, ...skills];
  const doubledIcons = [...networkIcons, ...networkIcons];

  return (
    <section className="py-8 overflow-hidden border-y-2 border-foreground bg-primary">
      {/* Skills Text Marquee */}
      <div className="flex animate-marquee mb-6">
        {doubledSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-8 whitespace-nowrap"
          >
            <span className="text-2xl md:text-3xl font-bold text-primary-foreground hover:text-foreground transition-colors duration-300">
              {skill}
            </span>
            <span className="text-foreground text-xl">•</span>
          </div>
        ))}
      </div>
      
      {/* Icons Marquee - Reverse Direction */}
      <div className="flex animate-marquee-reverse">
        {doubledIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 whitespace-nowrap group"
            >
              <div className="p-3 rounded-xl bg-background border-2 border-foreground 
                            group-hover:bg-primary/10 
                            transition-all duration-300">
                <IconComponent className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-sm font-medium text-primary-foreground group-hover:text-foreground transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsMarquee;
