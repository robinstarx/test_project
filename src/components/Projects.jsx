import { motion } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-400">Featured Projects</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              AI Projects Portfolio
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge AI solutions leveraging the latest in machine learning and natural language processing
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/5 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="text-4xl glass-strong rounded-2xl p-3 backdrop-blur-xl">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white backdrop-blur-xl rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink className="w-6 h-6 text-black" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full glass text-gray-300 hover:bg-white/10 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gray-500 to-gray-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={projects[0]?.github?.replace(/\/[^\/]+$/, '')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-strong rounded-full font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
