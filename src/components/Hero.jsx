import { motion } from 'framer-motion';
import { SplineScene } from './ui/splite';
import { Spotlight } from './ui/spotlight';
import { Card } from './ui/card';
import { personalInfo } from '../data';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <Card className="w-full min-h-screen bg-black relative overflow-hidden border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col lg:flex-row h-full min-h-screen">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full glass-strong backdrop-blur-xl"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-300"></span>
                </span>
                <span className="text-sm font-medium text-gray-300">{personalInfo.availability}</span>
              </motion.div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Role */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                {personalInfo.role}
              </h2>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                {personalInfo.tagline}
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {Object.entries(personalInfo.stats).map(([key, value]) => (
                  <div key={key} className="glass-strong rounded-xl px-6 py-3 backdrop-blur-xl">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {value}+
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>View My Work</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 glass-strong rounded-full font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 pt-6"
              >
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href={personalInfo.social.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                  </svg>
                </a>
                <a
                  href={personalInfo.social.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                >
                  <span className="text-xl">🤗</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right content - 3D Robot */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-screen">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gray-600 rounded-full mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
