import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, Send, Github, Linkedin, ExternalLink, Download, FileText } from 'lucide-react';
import Earth from './ui/Earth';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong backdrop-blur-xl mb-6">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-400">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have an exciting AI project in mind? Let's collaborate and build something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 flex flex-col"
          >
            {/* 3D Earth */}
            <div className="hidden lg:block h-[400px] w-full glass rounded-2xl overflow-hidden backdrop-blur-xl">
              <Earth />
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 backdrop-blur-xl hover:bg-white/5 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {[
                  { icon: Github, label: 'GitHub', sublabel: 'View Repositories', url: personalInfo.social.github, bg: 'from-gray-700 to-gray-800' },
                  { icon: Linkedin, label: 'LinkedIn', sublabel: 'Professional Profile', url: personalInfo.social.linkedin, bg: 'from-gray-600 to-gray-700' },
                  { icon: null, label: 'Kaggle', sublabel: 'ML Competitions', url: personalInfo.social.kaggle, bg: 'from-gray-600 to-gray-700', isKaggle: true },
                  { icon: null, label: 'Hugging Face', sublabel: 'AI Models & Spaces', url: personalInfo.social.huggingface, bg: 'from-gray-600 to-gray-700', isHF: true }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${social.bg} transition-all duration-300`}>
                      {social.icon ? (
                        <social.icon className="w-5 h-5 text-white" />
                      ) : social.isKaggle ? (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                        </svg>
                      ) : (
                        <span className="text-xl">🤗</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{social.label}</div>
                      <div className="text-white font-medium">{social.sublabel}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold text-lg">Download Resume</span>
              <FileText className="w-5 h-5" />
            </motion.a>

            {/* Quick Info */}
            <div className="glass rounded-2xl p-6 backdrop-blur-xl">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-white font-medium">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-medium">{personalInfo.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 backdrop-blur-xl hover:bg-white/5 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass focus:bg-white/10 bg-black/50 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-2 focus-ring-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass focus:bg-white/10 bg-black/50 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-2 focus:ring-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl glass focus:bg-white/10 bg-black/50 text-white placeholder-gray-600 outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-gray-600"
                    placeholder="Tell me about your AI project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-black font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
