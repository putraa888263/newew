import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Instagram, Linkedin, Github, Youtube, Twitter, Palette } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Twitter,
  Palette
};

export function SocialMedia() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(77, 171, 247, 0.1) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs text-[#4dabf7] tracking-widest mb-4 block">
            CONNECT WITH ME
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            LET'S <span className="gradient-text">CONNECT</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Follow my journey and connect with me on various social platforms
          </p>
        </motion.div>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {profileData.socialLinks.map((social, index) => {
            const IconComponent = iconMap[social.icon];
            
            return (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'rgba(26, 26, 26, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${social.color}30 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  />

                  {/* Icon */}
                  {IconComponent && (
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent 
                        size={32} 
                        className="text-gray-400 group-hover:text-white transition-colors duration-300"
                      />
                    </motion.div>
                  )}

                  {/* Border Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `2px solid ${social.color}`,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                  />

                  {/* Corner Accents */}
                  <div 
                    className="absolute top-2 left-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  <div 
                    className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider"
                    style={{
                      background: social.color,
                      color: '#000'
                    }}
                  >
                    {social.platform}
                  </div>
                </motion.div>

                {/* Platform Name (Mobile) */}
                <div className="md:hidden text-center mt-3">
                  <span className="text-xs text-gray-400 font-mono">{social.platform}</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '5K+', label: 'Followers' },
            { value: '3+', label: 'Years Experience' },
            { value: '20+', label: 'Happy Clients' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass-light"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display text-3xl md:text-4xl gradient-text block mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
