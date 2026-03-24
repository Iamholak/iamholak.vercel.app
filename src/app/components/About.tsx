import { motion } from "motion/react";
import { Award, Code, Cpu, Rocket, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "../../public/images/profile/profile.png";
import foregroundImage from "../../public/images/profile/background/forebackground.png";

const stats = [
  { icon: Code, label: "Projects Completed", value: "50+", color: "from-purple-500 to-purple-600" },
  { icon: Users, label: "Happy Clients", value: "30+", color: "from-blue-500 to-blue-600" },
  { icon: Rocket, label: "Years Experience", value: "5+", color: "from-indigo-500 to-indigo-600" },
  { icon: Award, label: "Technologies", value: "20+", color: "from-violet-500 to-violet-600" },
];

export function About() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 uppercase tracking-wider text-sm">Who I Am</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl mb-6 text-white" style={{ fontWeight: 600 }}>
                Kasali Olawale H., known professionally as Holak
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I build digital systems at the intersection of software and hardware. As a full-stack
                developer, AI builder, electronics engineer, and Web3 enthusiast, I focus on products that
                solve real problems and still feel refined, fast, and dependable in production.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My work spans scalable web apps, mobile experiences, AI integrations, and crypto-powered
                tools. I like clear system design, strong product thinking, and technical decisions that hold
                up under growth.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                People know me as Holak. The 0xHolak name is only for my X handle, not my public identity.
                I bring the same mindset to frontend polish, backend architecture, and electronics-driven
                problem solving.
              </p>
            </motion.div>

            {/* Image and profile card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm p-8 hover:border-purple-400/50 transition-all group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 grid gap-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.2),rgba(37,99,235,0.18))] p-4">
                    <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_35%),linear-gradient(180deg,#060816,#0b1120)]">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] opacity-50" />
                      <img
                        src={foregroundImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                      />
                      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060816] to-transparent" />

                      <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        onClick={() => setIsPreviewOpen(true)}
                        className="absolute bottom-6 left-1/2 z-10 h-60 w-60 -translate-x-1/2 overflow-hidden rounded-full border-4 border-purple-400/40 bg-[linear-gradient(180deg,#0f172a,#111827)] shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-transform hover:scale-[1.02]"
                        aria-label="Open profile preview"
                      >
                        <img
                          src={profileImage}
                          alt="Kasali Olawale H. portrait"
                          className="h-full w-full object-cover"
                        />
                      </motion.button>

                      <div className="absolute left-4 top-4 rounded-full border border-purple-400/30 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.3em] text-purple-200 backdrop-blur-sm">
                        Holak
                      </div>
                      <div className="absolute right-4 bottom-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Profile</p>
                        <p className="mt-1 text-sm text-white">Kasali Olawale H.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-400 text-sm uppercase tracking-wider">Holak</span>
                    <h4 className="text-2xl mt-2 text-white" style={{ fontWeight: 600 }}>
                      Product-minded engineer
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Full-stack product engineering</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cpu className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300">AI integrations and workflow tooling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Rocket className="h-4 w-4 text-indigo-400" />
                      <span className="text-gray-300">Electronics engineering background</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-violet-400" />
                      <span className="text-gray-300">Known as Holak</span>
                    </div>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 blur-xl"
              />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative w-full max-w-3xl rounded-[2rem] border border-purple-500/20 bg-[linear-gradient(180deg,#171433,#111827)] p-6 shadow-[0_0_80px_rgba(0,0,0,0.55)]">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-5 right-5 z-10 rounded-full border border-white/10 bg-black/60 p-3 text-white transition-colors hover:border-purple-400/50 hover:text-purple-200"
              aria-label="Close profile preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_35%),linear-gradient(180deg,#060816,#0b1120)] p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={foregroundImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] opacity-50" />

              <div className="relative flex min-h-[32rem] items-center justify-center">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-purple-400/40 bg-[linear-gradient(180deg,#0f172a,#111827)] shadow-[0_0_50px_rgba(168,85,247,0.25)]">
                  <img
                    src={profileImage}
                    alt="Kasali Olawale H. portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <p className="relative mt-4 text-center text-sm text-gray-400">
                Press <span className="text-white">Esc</span>, click outside, or use the close button.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
