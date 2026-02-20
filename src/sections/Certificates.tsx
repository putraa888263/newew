import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { certificatesData } from '@/data/certificatesData';
import { Award, Calendar, Building2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    
    if (info.offset.x > threshold || velocity > 500) {
      setCurrentIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
    } else if (info.offset.x < -threshold || velocity < -500) {
      setCurrentIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1));
    }
    x.set(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
  };

  return (
    <section
      id="certificates"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(151, 117, 250, 0.15) 0%, transparent 50%)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(77, 171, 247, 0.15) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs text-[#9775fa] tracking-widest mb-4 block">
            ACHIEVEMENTS
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            <span className="gradient-text">CERTIFICATES</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Professional certifications and recognitions that validate my expertise in multimedia and design
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative perspective-1000" ref={containerRef}>
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Carousel Container */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center preserve-3d">
            {certificatesData.map((cert, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === currentIndex;
              
              // Calculate 3D position
              const rotateY = offset * 45;
              const translateX = offset * 250;
              const translateZ = isActive ? 0 : -200;
              const scale = isActive ? 1 : 0.8;
              const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;

              return (
                <motion.div
                  key={cert.id}
                  className="absolute w-full max-w-md cursor-grab active:cursor-grabbing"
                  style={{
                    rotateY,
                    x: springX,
                    zIndex: certificatesData.length - absOffset
                  }}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    scale,
                    opacity,
                    rotateY
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  whileHover={isActive ? { scale: 1.02 } : {}}
                >
                  <div 
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                      isActive ? 'shadow-2xl' : ''
                    }`}
                    style={{
                      background: 'rgba(26, 26, 26, 0.9)',
                      border: isActive 
                        ? '2px solid rgba(151, 117, 250, 0.5)' 
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(151, 117, 250, 0.2)' 
                        : 'none'
                    }}
                  >
                    {/* Certificate Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                        <Award size={14} className="text-[#9775fa]" />
                        <span className="text-xs font-mono text-white">Verified</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-2xl text-white mb-3">
                        {cert.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-[#4dabf7]" />
                          <span className="text-xs text-gray-300">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[#ff6b9d]" />
                          <span className="text-xs text-gray-300">{cert.year}</span>
                        </div>
                      </div>

                      {/* View Button */}
                      {isActive && (
                        <motion.button
                          className="mt-6 w-full py-3 rounded-xl font-mono text-sm text-white flex items-center justify-center gap-2"
                          style={{
                            background: 'linear-gradient(135deg, #9775fa, #4dabf7)'
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>VIEW CERTIFICATE</span>
                          <ExternalLink size={14} />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {certificatesData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#9775fa] w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Certificate Counter */}
          <div className="text-center mt-6">
            <span className="font-mono text-sm text-gray-500">
              {String(currentIndex + 1).padStart(2, '0')} / {String(certificatesData.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Certificate List (Mobile) */}
        <div className="md:hidden mt-12 space-y-4">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="p-4 rounded-2xl glass-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-display text-lg text-white mb-1">{cert.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
