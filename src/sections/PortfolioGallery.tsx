import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { portfolioData, categoryColors, type ProjectCategory } from '@/data/portfolioData';
import { X, ExternalLink, Layers } from 'lucide-react';

const categories: (ProjectCategory | 'All')[] = [
  'All',
  'UI/UX Design',
  'Motion Graphics',
  '3D Animation',
  'Visual Design',
  'Fotografi',
  'Branding'
];

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory);

  return (
    <section
      ref={containerRef}
      id="works"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #ff6b9d 0%, transparent 70%)',
            right: '-200px',
            top: '20%',
            filter: 'blur(100px)',
            y
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
          <span className="font-mono text-xs text-[#ff6b9d] tracking-widest mb-4 block">
            FEATURED WORKS
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            SELECTED <span className="gradient-text">WORKS</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A curated collection of my best multimedia projects spanning design, animation, and visual arts
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{
                background: selectedCategory === category
                  ? `linear-gradient(135deg, ${category === 'All' ? '#4dabf7, #ff6b9d' : categoryColors[category as ProjectCategory]}, ${category === 'All' ? '#ff922b' : categoryColors[category as ProjectCategory]}80)`
                  : 'rgba(255, 255, 255, 0.05)',
                border: selectedCategory === category
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <motion.div
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <motion.span
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-mono mb-3"
                      style={{
                        backgroundColor: `${categoryColors[project.category]}20`,
                        color: categoryColors[project.category],
                        border: `1px solid ${categoryColors[project.category]}40`
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.category.toUpperCase()}
                    </motion.span>

                    {/* Title */}
                    <h3 className="font-display text-2xl text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description - Shows on Hover */}
                    <motion.p
                      className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* View Button */}
                    <motion.div
                      className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="text-xs font-mono text-[#4dabf7]">VIEW PROJECT</span>
                      <ExternalLink size={14} className="text-[#4dabf7]" />
                    </motion.div>
                  </div>

                  {/* Corner Decoration */}
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[project.category]}40, transparent)`
                    }}
                  >
                    <Layers size={16} style={{ color: categoryColors[project.category] }} />
                  </div>

                  {/* RGB Split Effect on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen"
                    style={{
                      background: `linear-gradient(45deg, ${categoryColors[project.category]}20, transparent)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-3xl"
              style={{
                background: 'rgba(26, 26, 26, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-20 relative">
                {/* Category */}
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-mono mb-4"
                  style={{
                    backgroundColor: `${categoryColors[selectedProject.category]}20`,
                    color: categoryColors[selectedProject.category],
                    border: `1px solid ${categoryColors[selectedProject.category]}40`
                  }}
                >
                  {selectedProject.category.toUpperCase()}
                </span>

                {/* Title */}
                <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Year:</span>
                    <span className="text-white text-sm font-mono">{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Tools:</span>
                    <div className="flex gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href={selectedProject.link}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-mono text-sm text-white"
                  style={{
                    background: `linear-gradient(135deg, ${categoryColors[selectedProject.category]}, ${categoryColors[selectedProject.category]}80)`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>VIEW LIVE PROJECT</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
