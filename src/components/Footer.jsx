import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI Engineer crafting intelligent solutions for tomorrow's challenges
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 glass rounded-lg hover:bg-white/10 text-xs text-gray-400 hover:text-gray-300 transition-all duration-300 capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>using</span>
              <Code className="w-4 h-4 text-gray-400" />
              <span>React + Three.js</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
