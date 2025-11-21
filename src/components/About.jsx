import { motion } from 'framer-motion';
import { skills, personalInfo } from '../data';
import { Brain, Code, Cpu, TrendingUp, BookOpen, Award } from 'lucide-react';
import TechSphere from './ui/TechSphere';

export default function About() {
  const iconMap = {
    "AI/ML Frameworks": Brain,
    "Machine Learning": Cpu,
    "Programming Languages": Code,
    "DevOps & MLOps": TrendingUp,
    "Data & Databases": BookOpen,
    "Web Development": Award
  };

  return (
    <section id="about" className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03),transparent_40%)]" />

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
            <Brain className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-400">About Me</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Expertise & Skills
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {Object.entries(personalInfo.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 backdrop-blur-xl hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                  {value}+
                </span>
              </div>
              <div className="text-sm text-gray-500 font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-gray-600 to-gray-400 rounded-full transition-all duration-500 mt-3" />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <TechSphere skills={skills} />
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 backdrop-blur-xl hover:bg-white/5 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-400 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative p-3 rounded-full bg-white/5">
                <TrendingUp className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Currently Learning
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {personalInfo.currentlyLearning?.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 rounded-xl bg-white/5 border border-gray-700 text-gray-300 font-medium hover:bg-white/10 hover:border-gray-600 transition-all duration-300 cursor-default"
              >
                <span className="mr-2">📚</span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <div className="glass rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-sm text-gray-500 mb-1">Location</div>
            <div className="text-xl font-semibold text-white">{personalInfo.location}</div>
          </div>
          <div className="glass rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-sm text-gray-500 mb-1">Email</div>
            <a href={`mailto:${personalInfo.email}`} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
