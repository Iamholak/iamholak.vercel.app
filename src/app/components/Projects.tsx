import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const filters = ["All", "Web", "AI", "Crypto", "Mobile"] as const;

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  slides: string[];
};

const projects: Project[] = [
  {
    name: "ChainFlow Analytics",
    category: "Crypto",
    description:
      "A real-time blockchain analytics dashboard for wallet monitoring, token insights, and on-chain activity alerts.",
    stack: ["React", "TypeScript", "WebSockets", "Ethers.js"],
    slides: ["Wallet tracking", "Token activity", "Alert engine"],
  },
  {
    name: "NovaStack SaaS",
    category: "Web",
    description:
      "A multi-tenant SaaS platform with authentication, team workspaces, billing flows, and admin reporting.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    slides: ["Workspace UI", "Billing flows", "Admin reports"],
  },
  {
    name: "SignalMind AI",
    category: "AI",
    description:
      "An AI workflow assistant for summarization, content generation, and team knowledge retrieval across tools.",
    stack: ["React", "OpenAI API", "Express", "Vector Search"],
    slides: ["Chat actions", "Knowledge search", "Agent workflows"],
  },
  {
    name: "PulsePay Mobile",
    category: "Mobile",
    description:
      "A mobile-first fintech experience focused on fast payments, onboarding, and secure transaction history.",
    stack: ["React Native", "Expo", "Firebase", "REST API"],
    slides: ["Onboarding UI", "Transfers", "Transaction log"],
  },
];

function ProjectViewer({
  project,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  project: Project;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[120] bg-black/88 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_28%)]" />

      <div className="relative flex min-h-screen items-center justify-center p-6 md:p-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-white/10 bg-black/60 p-3 text-white transition-colors hover:border-purple-400/50 hover:text-purple-200"
          aria-label="Close preview"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="w-full max-w-6xl rounded-[2rem] border border-purple-500/20 bg-[linear-gradient(180deg,#171433,#111827)] p-5 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.55)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-purple-200">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.35em]">
                {project.category} Image View
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onPrev}
                className="rounded-full border border-purple-500/30 bg-black/40 p-3 text-gray-300 transition-colors hover:border-purple-400/50 hover:text-white"
                aria-label={`Previous ${project.category} preview`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full border border-purple-500/30 bg-black/40 p-3 text-gray-300 transition-colors hover:border-purple-400/50 hover:text-white"
                aria-label={`Next ${project.category} preview`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mx-auto h-[70vh] max-h-[46rem] w-full max-w-4xl">
            {project.slides.map((slide, index) => {
              const offset = index - activeIndex;
              const isActive = offset === 0;
              const normalizedOffset =
                offset < -1
                  ? project.slides.length + offset
                  : offset > 1
                    ? offset - project.slides.length
                    : offset;

              return (
                <motion.div
                  key={slide}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (!isActive) return;
                    if (info.offset.x <= -80) onNext();
                    if (info.offset.x >= 80) onPrev();
                  }}
                  animate={{
                    x: normalizedOffset * 48,
                    y: Math.abs(normalizedOffset) * 14,
                    scale: isActive ? 1 : 0.95,
                    rotate: isActive ? 0 : normalizedOffset * 4,
                    opacity: Math.abs(normalizedOffset) > 1 ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className={`absolute inset-0 rounded-[2rem] border p-5 ${
                    isActive
                      ? "z-20 cursor-grab border-purple-400/40 bg-slate-950 active:cursor-grabbing"
                      : "z-10 border-slate-700 bg-slate-950"
                  }`}
                >
                  <div className="flex h-full flex-col rounded-[1.6rem] border border-slate-700 bg-[linear-gradient(180deg,#0f172a,#111827)] p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-3 text-purple-200">
                      <Sparkles className="h-5 w-5" />
                      <span className="text-xs uppercase tracking-[0.35em]">
                        {project.category} Screen
                      </span>
                    </div>

                    <div className="grid flex-1 place-items-center rounded-[1.6rem] border border-slate-700 bg-slate-950 p-8 md:p-12 text-center">
                      <div>
                        <div className="mb-4 text-3xl md:text-5xl text-white" style={{ fontWeight: 700 }}>
                          {slide}
                        </div>
                        <p className="mx-auto max-w-lg text-base md:text-xl text-gray-400">
                          Full-screen project preview area. Replace these mock screens with real project
                          screenshots when you add assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {project.slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => onSelect(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-purple-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Show ${slide}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectThumbnail({
  category,
  title,
  activeIndex,
  slides,
  onOpen,
}: {
  category: string;
  title: string;
  activeIndex: number;
  slides: string[];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="block w-full rounded-2xl border border-slate-700 bg-[linear-gradient(180deg,#171433,#111827)] p-4 text-left transition-colors hover:border-purple-400/40"
      aria-label={`Open ${title} preview`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

        <div className="relative grid min-h-64 place-items-center p-8">
          <div className="w-full max-w-md rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#111827,#0b1120)] p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-200">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.3em]">
                  {category}
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-28 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(168,85,247,0.18),rgba(59,130,246,0.14))]" />
              <div className="text-lg text-white" style={{ fontWeight: 600 }}>
                {slides[activeIndex]}
              </div>
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <span
                    key={slide}
                    className={`h-2 rounded-full ${
                      index === activeIndex ? "w-8 bg-purple-400" : "w-2 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [viewerProjectIndex, setViewerProjectIndex] = useState<number | null>(null);
  const [viewerSlideIndex, setViewerSlideIndex] = useState(0);
  const [thumbnailSlides, setThumbnailSlides] = useState<number[]>(projects.map(() => 0));

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  const openViewer = (projectIndex: number) => {
    setViewerProjectIndex(projectIndex);
    setViewerSlideIndex(thumbnailSlides[projectIndex]);
  };

  const closeViewer = () => {
    setViewerProjectIndex(null);
  };

  const goPrev = () => {
    if (viewerProjectIndex === null) return;
    const slides = projects[viewerProjectIndex].slides;
    setViewerSlideIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goNext = () => {
    if (viewerProjectIndex === null) return;
    const slides = projects[viewerProjectIndex].slides;
    setViewerSlideIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const setThumbnailSlide = (projectIndex: number) => {
    setThumbnailSlides((current) =>
      current.map((value, index) =>
        index === projectIndex
          ? (value + 1) % projects[projectIndex].slides.length
          : value,
      ),
    );
  };

  const activeProject = viewerProjectIndex === null ? null : projects[viewerProjectIndex];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb10_0%,transparent_40%),radial-gradient(circle_at_bottom,#8b5cf610_0%,transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400">
            Selected Work
          </span>
          <h2
            className="mt-4 mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-5xl text-transparent md:text-6xl"
            style={{ fontWeight: 700 }}
          >
            Projects That Ship
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Product-minded builds across SaaS, AI, Web3, and mobile with a focus
            on performance, clarity, and scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                filter === activeFilter
                  ? "border-purple-400/50 bg-purple-500/20 text-white"
                  : "border-purple-500/20 bg-white/5 text-gray-300 hover:border-purple-400/40 hover:bg-purple-500/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => {
            const index = projects.findIndex((item) => item.name === project.name);

            return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-950/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(37,99,235,0.18))] p-6">
                  <ProjectThumbnail
                    category={project.category}
                    title={project.name}
                    activeIndex={thumbnailSlides[index]}
                    slides={project.slides}
                    onOpen={() => openViewer(index)}
                  />
                </div>

                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                      {project.category}
                    </span>
                    <h3
                      className="mt-3 text-2xl text-white"
                      style={{ fontWeight: 600 }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setThumbnailSlide(index)}
                    className="rounded-full border border-purple-500/30 bg-black/30 px-3 py-1 text-xs text-purple-200 transition-colors hover:border-purple-400/50 hover:text-white"
                  >
                    Next Thumb
                  </button>
                </div>

                <p className="mb-6 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-purple-300 transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Case Study
                  </a>
                  <a
                    href="https://github.com/Iamholak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <div className="absolute right-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>
              </div>
            </motion.article>
          )})}
        </div>
      </div>

      {activeProject && (
        <ProjectViewer
          project={activeProject}
          activeIndex={viewerSlideIndex}
          onClose={closeViewer}
          onPrev={goPrev}
          onNext={goNext}
          onSelect={setViewerSlideIndex}
        />
      )}
    </section>
  );
}
