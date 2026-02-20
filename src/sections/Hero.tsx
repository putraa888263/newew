import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { profileData } from '@/data/profileData';
import { ChevronDown, MapPin, Mail } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const nameX1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const nameX2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #4dabf7 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            filter: 'blur(80px)',
            x: mousePosition.x * 50,
            y: mousePosition.y * 50
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ff6b9d 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
            filter: 'blur(80px)',
            x: mousePosition.x * -30,
            y: mousePosition.y * -30
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ff922b 0%, transparent 70%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ opacity, scale }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Typography */}
          <div className="flex-1 text-center lg:text-left">
            {/* Role Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#51cf66] animate-pulse" />
              <span className="font-mono text-xs text-gray-300 tracking-wider">
                {profileData.role}
              </span>
            </motion.div>

            {/* Main Name - 3D Effect */}
            <div className="perspective-1000 mb-6">
              <div className="preserve-3d">
                <motion.h1
                  className="font-display text-responsive-hero leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.span
                    className="inline-block text-white"
                    style={{ x: nameX1 }}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.4, 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {profileData.firstName}
                  </motion.span>
                </motion.h1>
                <motion.h1
                  className="font-display text-responsive-hero leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <motion.span
                    className="inline-block gradient-text-animated"
                    style={{ x: nameX2 }}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {profileData.lastName}
                  </motion.span>
                </motion.h1>
              </div>
            </div>

            {/* Animated Role Ticker */}
            <motion.div
              className="h-8 overflow-hidden mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, -32, -64, -96, -128, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                }}
              >
                {profileData.subRoles.map((role, index) => (
                  <div
                    key={index}
                    className="h-8 flex items-center justify-center lg:justify-start"
                  >
                    <span className="font-mono text-sm tracking-widest text-gray-400">
                      {role}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {profileData.bio}
            </motion.p>

            {/* Info Pills */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-light">
                <MapPin size={14} className="text-[#4dabf7]" />
                <span className="text-xs text-gray-300">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-light">
                <Mail size={14} className="text-[#ff6b9d]" />
                <span className="text-xs text-gray-300">{profileData.email}</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-sm tracking-wider text-white relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #4dabf7, #ff6b9d)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">EXPLORE MY WORK</span>
              <motion.span
                className="relative z-10"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={18} />
              </motion.span>
              
              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #ff6b9d, #ff922b)'
                }}
              />
            </motion.a>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.8, 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
            }}
          >
            {/* Image Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              {/* Glow Behind */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #4dabf7, #ff6b9d)'
                }}
              />
              
              {/* Main Image */}
              <motion.img
                src={profileData.profileImage}
                alt={profileData.name}
                className="relative w-full h-full object-cover rounded-3xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-mono text-xs text-gray-300">{profileData.major}</span>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 border-2 border-[#4dabf7] rounded-lg"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#ff6b9d] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-mono text-xs text-gray-500 tracking-wider">SCROLL</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
