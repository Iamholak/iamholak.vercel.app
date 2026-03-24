import { motion } from "motion/react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    year: "2024-Present",
    title: "Senior Full-Stack Developer",
    type: "work",
    icon: Briefcase,
    description: "Leading development of enterprise-scale web applications with focus on AI integration and blockchain solutions.",
    highlights: ["Built 15+ production apps", "Led team of 5 developers", "Implemented CI/CD pipelines"],
  },
  {
    year: "2022-2024",
    title: "Full-Stack Developer",
    type: "work",
    icon: Briefcase,
    description: "Developed SaaS platforms and mobile applications for startups and established businesses.",
    highlights: ["React & React Native expert", "Built RESTful APIs", "Integrated payment systems"],
  },
  {
    year: "Jan 2022-Apr 2023",
    title: "Machine Operator",
    type: "work",
    icon: Briefcase,
    description: "Operated and monitored large-format industrial printing machines for banners, stickers, and related materials.",
    highlights: ["Lagnes Prints", "Industrial Machines", "Maintenance", "QA/QC", "Troubleshooting"],
  },
  {
    year: "2021",
    title: "Web3 Certification",
    type: "education",
    icon: Trophy,
    description: "Specialized training in blockchain development, smart contracts, and decentralized applications.",
    highlights: ["Solidity programming", "DApp development", "Web3.js integration"],
  },
  {
    year: "2019-2021",
    title: "Junior Developer",
    type: "work",
    icon: Briefcase,
    description: "Started professional journey building responsive web applications and learning modern frameworks.",
    highlights: ["Mastered React ecosystem", "Built 20+ websites", "Learned cloud deployment"],
  },
  {
    year: "2025",
    title: "National Diploma in Electrical Electronics Engineering",
    type: "education",
    icon: GraduationCap,
    description: "Graduated with upper credit with a 3.02 out of 4.",
    highlights: ["Upper Credit", "3.02/4.00", "Electrical Electronics Engineering"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 uppercase tracking-wider text-sm">My Journey</span>
          <h2 className="text-5xl md:text-6xl mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From beginner to advanced builder - a journey of continuous learning and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} mb-8 md:mb-0 ml-20 md:ml-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">
                        {item.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        item.type === "work"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-green-500/20 text-green-300 border border-green-500/30"
                      }`}>
                        {item.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>

                    <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
