import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '@/data/profileData';
import { Instagram, Linkedin, Github, Youtube, Twitter, Palette, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';

const socialIcons = [
  { icon: Instagram, url: profileData.socialLinks[0].url, color: '#E4405F' },
  { icon: Linkedin, url: profileData.socialLinks[1].url, color: '#0A66C2' },
  { icon: Github, url: profileData.socialLinks[2].url, color: '#FFFFFF' },
  { icon: Youtube, url: profileData.socialLinks[3].url, color: '#FF0000' },
  { icon: Twitter, url: profileData.socialLinks[4].url, color: '#1DA1F2' },
  { icon: Palette, url: profileData.socialLinks[5].url, color: '#1769FF' }
];

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="relative pt-32 pb-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(77, 171, 247, 0.15) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-20 px-4"
          style={{ scale }}
        >
          <motion.span
            className="font-mono text-xs text-[#4dabf7] tracking-widest mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.span>
          
          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            LET'S WORK
            <br />
            <span className="gradient-text-animated">TOGETHER</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-sm max-w-md mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>

          {/* Contact Button */}
          <motion.a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-sm text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #4dabf7, #ff6b9d)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            <span>SAY HELLO</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          className="max-w-4xl mx-auto px-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="p-6 rounded-2xl glass-light text-center">
              <Mail size={24} className="mx-auto mb-3 text-[#4dabf7]" />
              <span className="font-mono text-xs text-gray-500 block mb-1">EMAIL</span>
              <a 
                href={`mailto:${profileData.email}`}
                className="text-white text-sm hover:text-[#4dabf7] transition-colors"
              >
                {profileData.email}
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl glass-light text-center">
              <MapPin size={24} className="mx-auto mb-3 text-[#ff6b9d]" />
              <span className="font-mono text-xs text-gray-500 block mb-1">LOCATION</span>
              <span className="text-white text-sm">{profileData.location}</span>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl glass-light text-center">
              <span className="font-mono text-xs text-gray-500 block mb-3">SOCIALS</span>
              <div className="flex justify-center gap-3">
                {socialIcons.slice(0, 4).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    whileHover={{ 
                      scale: 1.2,
                      background: social.color 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon size={14} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kinetic Typography Marquee */}
        <div className="relative py-12 overflow-hidden border-y border-white/5">
          <motion.div
            className="flex whitespace-nowrap"
            style={{ x: marqueeX }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="font-display text-[8rem] md:text-[12rem] text-transparent tracking-tighter mx-8"
                  style={{
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  MULTIMEDIA.CREATIVE
                </span>
                <span className="text-[#4dabf7] text-4xl mx-4">•</span>
                <span className="font-display text-[8rem] md:text-[12rem] gradient-text tracking-tighter mx-8">
                  DESIGN
                </span>
                <span className="text-[#ff6b9d] text-4xl mx-4">•</span>
                <span className="font-display text-[8rem] md:text-[12rem] text-transparent tracking-tighter mx-8"
                  style={{
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  DEVELOP
                </span>
                <span className="text-[#ff922b] text-4xl mx-4">•</span>
                <span className="font-display text-[8rem] md:text-[12rem] gradient-text tracking-tighter mx-8">
                  CREATE
                </span>
                <span className="text-[#9775fa] text-4xl mx-4">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-2xl">
                <span className="gradient-text">M</span>
                <span className="text-white/60">.CREATIVE</span>
              </span>
            </motion.div>

            {/* Copyright */}
            <motion.p
              className="text-gray-500 text-xs font-mono flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={12} className="text-[#ff6b9d] fill-[#ff6b9d]" />
              </motion.span>
              by {profileData.name}
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs font-mono">BACK TO TOP</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight size={16} className="rotate-[-45deg]" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
