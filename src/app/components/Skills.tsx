import { motion } from "motion/react";
import {
  Bot,
  Brush,
  Code2,
  Cpu,
  FileText,
  Settings,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Electronics Engineering",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
    skills: [
      "Circuit Design & Analysis",
      "Power Supply Systems (DC/AC)",
      "Solar PV Systems",
      "Battery Systems & Charge Controllers",
      "Electrical Testing & Troubleshooting",
      "CAD & Simulation Software",
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
    skills: [
      "HTML, CSS, JavaScript",
      "Website Development",
      "Domain Management",
      "Responsive Web Design",
      "Technical Problem-Solving",
    ],
  },
  {
    title: "Graphic Design",
    icon: Brush,
    color: "from-indigo-500 to-indigo-600",
    skills: ["Visual Design", "Brand Identity", "Digital Graphics", "Layout Design"],
  },
  {
    title: "Technical Operations",
    icon: Settings,
    color: "from-violet-500 to-violet-600",
    skills: [
      "Machine Operations",
      "Automotive Assembly",
      "Vehicle Electrical Installation",
      "Industrial Printing",
      "Preventive Maintenance",
    ],
  },
  {
    title: "Content Writing",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
    skills: ["Technical Writing", "Content Creation", "Documentation", "Audience-Focused Materials"],
  },
  {
    title: "Professional Skills",
    icon: Users,
    color: "from-fuchsia-500 to-purple-600",
    skills: ["Team Collaboration", "Communication", "Time Management", "Project Coordination", "Quality Assurance"],
  },
  {
    title: "AI & Web3 Tools",
    icon: Bot,
    color: "from-emerald-500 to-cyan-600",
    skills: ["OpenAI API", "Prompt Workflows", "WebSockets", "Firebase", "Smart Contract Integration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf610_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider text-sm">Technical Expertise</span>
          <h2 className="text-5xl md:text-6xl mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid items-stretch md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative h-full"
            >
              <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-8 hover:border-purple-400/50 transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                {/* Icon Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl text-white" style={{ fontWeight: 600 }}>
                      {category.title}
                    </h3>
                  </div>
                  <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills List */}
                <div className="grid flex-1 content-start gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 rounded-lg border border-purple-500/10 bg-black/20 px-4 py-3 text-left text-gray-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br ${category.color} opacity-20 blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Core builder stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Node.js", "TypeScript", "React Native", "Tailwind CSS", "OpenAI", "Web3"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/20 hover:border-purple-400/50 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
