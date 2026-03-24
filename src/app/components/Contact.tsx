import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:olawalekasali1@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Let's Build Something Powerful
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-purple-900/20 border border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-8">
              <h3 className="text-2xl mb-6 text-white" style={{ fontWeight: 600 }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a href="mailto:olawalekasali1@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      olawalekasali1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-white">Available Worldwide (Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-8">
              <h3 className="text-2xl mb-6 text-white" style={{ fontWeight: 600 }}>
                Follow Me
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Iamholak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </a>

                <a
                  href="https://x.com/0xholak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Twitter</span>
                </a>

                <a
                  href="https://linkedin.com/in/kasali-olawale-habeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 p-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400" style={{ fontWeight: 600 }}>Available for Work</span>
              </div>
              <p className="text-gray-400 text-sm">Open to freelance projects and full-time opportunities</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
