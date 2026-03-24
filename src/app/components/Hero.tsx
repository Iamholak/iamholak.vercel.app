import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

interface HeroProps {
  introReady: boolean;
}

const heroHeadingVariants = {
  hidden: {
    opacity: 1,
    y: -110,
    scale: 1.28,
  },
  visible: {
    opacity: 1,
    x: [0, 34, -30, 22, -14, 7, -3, 0],
    y: [-110, 38, -30, 18, -11, 5, 0],
    scale: [1.28, 0.9, 1.055, 0.975, 1.018, 0.995, 1],
    rotateZ: [0, 1.7, -1.4, 0.9, -0.42, 0.2, -0.08, 0],
    transition: {
      duration: 2.45,
      times: [0, 0.18, 0.34, 0.52, 0.68, 0.82, 0.92, 1],
      ease: "easeOut",
    },
  },
};

const heroBodyVariants = {
  hidden: {
    opacity: 1,
    y: -70,
    scale: 1.18,
  },
  visible: {
    opacity: 1,
    x: [0, 24, -21, 15, -9, 4, -2, 0],
    y: [-70, 24, -18, 10, -6, 3, 0],
    scale: [1.18, 0.94, 1.035, 0.985, 1.012, 0.996, 1],
    rotateZ: [0, 1.05, -0.82, 0.46, -0.22, 0.1, -0.04, 0],
    transition: {
      duration: 2.45,
      times: [0, 0.18, 0.34, 0.52, 0.68, 0.82, 0.92, 1],
      ease: "easeOut",
    },
  },
};

export function Hero({ introReady }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heroTilt, setHeroTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = e.clientX / window.innerWidth - 0.5;
      const normalizedY = e.clientY / window.innerHeight - 0.5;

      setMousePosition({
        x: normalizedX * 20,
        y: normalizedY * 20,
      });

      setHeroTilt({
        rotateX: normalizedY * -18,
        rotateY: normalizedX * 24,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-purple-600/30 blur-[120px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-blue-600/30 blur-[120px]"
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 [perspective:1800px]">
        <motion.div
          animate={heroTilt}
          transition={{ type: "spring", stiffness: 78, damping: 16, mass: 0.72 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative rounded-[2rem] border border-white/5 bg-[linear-gradient(180deg,rgba(10,10,15,0.35),rgba(10,10,15,0.08))] px-6 py-16 text-center md:px-12"
        >
          <motion.div
            animate={{
              x: mousePosition.x * -2.4,
              y: mousePosition.y * -2.1,
              rotateY: heroTilt.rotateY * 1.15,
              rotateX: heroTilt.rotateX * 0.7,
            }}
            transition={{ type: "spring", stiffness: 72, damping: 15 }}
            style={{ transform: "translateZ(65px)" }}
            className="pointer-events-none absolute left-0 top-1/2 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),rgba(59,130,246,0.06)_45%,transparent_72%)] blur-[2px] lg:block"
          />

          <motion.div
            animate={{
              x: mousePosition.x * 2.4,
              y: mousePosition.y * -2,
              rotateY: heroTilt.rotateY * 1.25,
              rotateX: heroTilt.rotateX * 0.75,
            }}
            transition={{ type: "spring", stiffness: 72, damping: 15 }}
            style={{ transform: "translateZ(65px)" }}
            className="pointer-events-none absolute right-0 top-[40%] hidden h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.26),rgba(59,130,246,0.05)_46%,transparent_74%)] blur-[2px] lg:block"
          />

          <motion.div
            animate={{
              x: mousePosition.x * 1.8,
              y: mousePosition.y * 1.4,
              rotateX: heroTilt.rotateX * 0.35,
              rotateY: heroTilt.rotateY * 0.35,
            }}
            transition={{ type: "spring", stiffness: 68, damping: 14 }}
            style={{ transform: "translateZ(32px)" }}
            className="pointer-events-none absolute inset-x-10 inset-y-8 rounded-[2rem] border border-blue-500/10"
          />

        <motion.h1
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          variants={heroHeadingVariants}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          style={{ fontWeight: 800, transform: "translateZ(120px)" }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            I Build Scalable
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Web Apps, AI Tools
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            & Crypto Solutions
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          variants={heroBodyVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          style={{ transform: "translateZ(90px)" }}
        >
          Full-Stack Developer | AI Builder | Electronics Engineer | Web3 Enthusiast
        </motion.p>

        <motion.div
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          variants={heroBodyVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ transform: "translateZ(110px)" }}
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all"
            style={{ fontWeight: 600 }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          variants={heroBodyVariants}
          className="relative flex items-center justify-center gap-6"
          style={{ transform: "translateZ(75px)" }}
        >
          <a
            href="https://github.com/Iamholak/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/5 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://x.com/0xholak"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/5 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all hover:scale-110"
          >
            <Twitter className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://linkedin.com/in/kasali-olawale-habeeb"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/5 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-all hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
        </motion.div>

        {/* 3D Avatar Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-32 right-0 hidden lg:block"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-purple-500/30"
          />
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-purple-400/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-purple-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
