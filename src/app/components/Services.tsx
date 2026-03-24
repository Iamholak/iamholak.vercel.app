import { motion } from "motion/react";
import { Globe, Smartphone, Brain, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and user-friendly.",
    features: ["Responsive Design", "RESTful APIs", "Database Integration", "Cloud Deployment"],
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps using React Native. Seamless experiences on both iOS and Android.",
    features: ["Cross-Platform", "Native Features", "Push Notifications", "App Store Launch"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrate cutting-edge AI capabilities into your applications. From chatbots to image generation and data analysis.",
    features: ["OpenAI Integration", "Custom AI Models", "Natural Language Processing", "ML Solutions"],
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Layers,
    title: "SaaS Systems",
    description: "Complete SaaS platforms with authentication, subscriptions, analytics, and admin dashboards.",
    features: ["User Management", "Payment Integration", "Analytics Dashboard", "API Development"],
    gradient: "from-violet-500 to-violet-600",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf608_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider text-sm">What I Offer</span>
          <h2 className="text-5xl md:text-6xl mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-8 hover:border-purple-400/50 transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Have a custom project in mind? Let's discuss how I can help bring it to life.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all"
            style={{ fontWeight: 600 }}
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
