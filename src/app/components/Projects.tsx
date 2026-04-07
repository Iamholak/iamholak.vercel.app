import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import clueLanding from "../../public/project/clueinterview/landing.png";
import clueHistory from "../../public/project/clueinterview/history.png";
import clueProfile from "../../public/project/clueinterview/profile.png";
import clueSession from "../../public/project/clueinterview/session.png";
import clueSetting from "../../public/project/clueinterview/setting.png";
import clueSettingTwo from "../../public/project/clueinterview/setting2.png";
import flixorbLanding from "../../public/project/flixorb/landing.png";
import flixorbWelcome from "../../public/project/flixorb/flixorb_welcome.png";
import flixorbUserHome from "../../public/project/flixorb/userhome.png";
import flixorbSeriesView from "../../public/project/flixorb/seriesview.png";
import flixorbWatch from "../../public/project/flixorb/watch.png";
import flixorbReels from "../../public/project/flixorb/reels.png";
import flixorbCreatorDashboard from "../../public/project/flixorb/creatordashboard.png";
import flixorbAdminDashboard from "../../public/project/flixorb/admindashboard.png";
import flixorbLicenseLanding from "../../public/project/flixorb_lisensinng_server/flixorb-license-server.vercel.app_.png";
import flixorbLicenseShotOne from "../../public/project/flixorb_lisensinng_server/Screenshot 2026-04-07 000447.png";
import flixorbLicenseShotTwo from "../../public/project/flixorb_lisensinng_server/Screenshot 2026-04-07 000515.png";
import checkDockieLanding from "../../public/project/check-dockie/check-dockie.png";
import checkDockieDownload from "../../public/project/check-dockie/check-dockie-download.png";
import checkDockieDashboard from "../../public/project/check-dockie/dashnoard.png";
import checkDockieDoctorLogin from "../../public/project/check-dockie/doctor-login.png";
import checkDockieAdminLogin from "../../public/project/check-dockie/admin-login.png";
import checkDockieSetting from "../../public/project/check-dockie/setting.png";
import sortBillsLanding from "../../public/project/sortbills/sortbill-landing.png";
import sortBillsLandingTwo from "../../public/project/sortbills/sortbill-landing2.png";
import sortBillsLandingThree from "../../public/project/sortbills/sort-bill-landing3.png";
import sortBillsLoginUser from "../../public/project/sortbills/login-user.png";
import sortBillsOtp from "../../public/project/sortbills/otp.png";
import sortBillsUserDashboard from "../../public/project/sortbills/user-dashboard.png";
import sortBillsUserDashboardService from "../../public/project/sortbills/user-dashboard-service.png";
import sortBillsUserWallet from "../../public/project/sortbills/user-wallet.png";
import sortBillsAdminDash from "../../public/project/sortbills/admin-dash.png";
import sortBillsAdminSetting from "../../public/project/sortbills/admin-setting.png";
import fuudyLanding from "../../public/project/fuudy/fuudy1.png";
import fuudyLandingTwo from "../../public/project/fuudy/fuudy2.png";
import fuudyFoodView from "../../public/project/fuudy/fuudy-food.png";
import fuudyProfile from "../../public/project/fuudy/fuudy-profile.png";
import fuudyUserLogin from "../../public/project/fuudy/fuudy-login.png";
import fuudySellerLogin from "../../public/project/fuudy/seller-login.png";
import fuudySellerDashboard from "../../public/project/fuudy/seller-dashboard.png";
import fuudySellerOrder from "../../public/project/fuudy/seller-order.png";
import fuudySellerSetting from "../../public/project/fuudy/seller-setting.png";
import fuudyAdminLogin from "../../public/project/fuudy/fuudy-admin-login.png";
import fuudyAdminDash from "../../public/project/fuudy/admin-dash.png";
import fuudyAdminDashOrder from "../../public/project/fuudy/admin-dash-order.png";
import fuudyAdminDashSetting from "../../public/project/fuudy/admin-dash-setting.png";

const filters = ["All", "Web", "AI", "Crypto", "Desktop"] as const;

type ProjectSlide = {
  title: string;
  image: string;
};

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  slides: ProjectSlide[];
  liveUrl: string;
  sourceUrl: string;
};

const HOME_PROJECT_NAMES = new Set([
  "Flixorb",
  "Clue Interview",
  "Check Dockie",
  "Fuudy",
  "SortBills",
]);

const projects: Project[] = [
  {
    name: "Flixorb",
    category: "Web",
    description:
      "A video universe platform built for immersive streaming, creator flows, and content discovery across a modern web app experience.",
    stack: ["React", "Next.js", "PostgreSQL", "Web App"],
    slides: [
      { title: "Landing", image: flixorbLanding },
      { title: "Welcome", image: flixorbWelcome },
      { title: "User Home", image: flixorbUserHome },
      { title: "Series View", image: flixorbSeriesView },
      { title: "Watch", image: flixorbWatch },
      { title: "Reels", image: flixorbReels },
      { title: "Creator Dashboard", image: flixorbCreatorDashboard },
      { title: "Admin Dashboard", image: flixorbAdminDashboard },
    ],
    liveUrl: "https://flixorb.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/flixorb",
  },
  {
    name: "Clue Interview",
    category: "Desktop",
    description:
      "A desktop interview workflow app built with React and Electron, designed for guided sessions, history tracking, and operator control.",
    stack: ["React", "Electron", "TypeScript", "Desktop UI"],
    slides: [
      { title: "Landing", image: clueLanding },
      { title: "Session", image: clueSession },
      { title: "History", image: clueHistory },
      { title: "Profile", image: clueProfile },
      { title: "Settings", image: clueSetting },
      { title: "Settings Panel", image: clueSettingTwo },
    ],
    liveUrl: "https://clueinterview.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/clueinterview",
  },
  {
    name: "Flixorb Licensing Server",
    category: "Web",
    description:
      "A lightweight licensing server interface for Flixorb, focused on key validation, access control, and management flows for deployment-ready licensing operations.",
    stack: ["HTML", "CSS", "JavaScript"],
    slides: [
      { title: "Landing", image: flixorbLicenseLanding },
      { title: "Dashboard View", image: flixorbLicenseShotOne },
      { title: "License Flow", image: flixorbLicenseShotTwo },
    ],
    liveUrl: "https://flixorb-license-server.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/",
  },
  {
    name: "Check Dockie",
    category: "Web",
    description:
      "A healthcare-focused web app experience for doctor access, admin controls, onboarding, and patient-facing product flows across a polished booking platform.",
    stack: ["React", "Web App", "Healthcare UI", "Product Platform"],
    slides: [
      { title: "Landing", image: checkDockieLanding },
      { title: "Download", image: checkDockieDownload },
      { title: "Dashboard", image: checkDockieDashboard },
      { title: "Doctor Login", image: checkDockieDoctorLogin },
      { title: "Admin Login", image: checkDockieAdminLogin },
      { title: "Settings", image: checkDockieSetting },
    ],
    liveUrl: "https://checkdockie.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/Check-Dockie",
  },
  {
    name: "Fuudy",
    category: "Web",
    description:
      "A food ordering marketplace built for customer discovery, seller operations, and admin oversight across a multi-role commerce platform.",
    stack: ["React", "Next.js", "PostgreSQL", "Marketplace"],
    slides: [
      { title: "Landing", image: fuudyLanding },
      { title: "Landing Two", image: fuudyLandingTwo },
      { title: "Food View", image: fuudyFoodView },
      { title: "Profile", image: fuudyProfile },
      { title: "User Login", image: fuudyUserLogin },
      { title: "Seller Login", image: fuudySellerLogin },
      { title: "Seller Dashboard", image: fuudySellerDashboard },
      { title: "Seller Orders", image: fuudySellerOrder },
      { title: "Seller Settings", image: fuudySellerSetting },
      { title: "Admin Login", image: fuudyAdminLogin },
      { title: "Admin Dashboard", image: fuudyAdminDash },
      { title: "Admin Orders", image: fuudyAdminDashOrder },
      { title: "Admin Settings", image: fuudyAdminDashSetting },
    ],
    liveUrl: "https://fuudy-web.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/fuudy",
  },
  {
    name: "SortBills",
    category: "Web",
    description:
      "A billing and service management web app built for streamlined user onboarding, wallet flows, admin operations, and service control inside a modern product dashboard.",
    stack: ["React", "Next.js", "PostgreSQL", "Web App"],
    slides: [
      { title: "Landing", image: sortBillsLanding },
      { title: "Landing Two", image: sortBillsLandingTwo },
      { title: "Landing Three", image: sortBillsLandingThree },
      { title: "User Login", image: sortBillsLoginUser },
      { title: "OTP Verification", image: sortBillsOtp },
      { title: "User Dashboard", image: sortBillsUserDashboard },
      { title: "Service Dashboard", image: sortBillsUserDashboardService },
      { title: "Wallet", image: sortBillsUserWallet },
      { title: "Admin Dashboard", image: sortBillsAdminDash },
      { title: "Admin Settings", image: sortBillsAdminSetting },
    ],
    liveUrl: "https://sortbills-web.vercel.app/",
    sourceUrl: "https://github.com/Iamholak/sortbills",
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
                  key={slide.title}
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

                    <div className="grid flex-1 place-items-center rounded-[1.6rem] border border-slate-700 bg-slate-950 p-4 md:p-6 text-center">
                      <div>
                        <img
                          src={slide.image}
                          alt={`${project.name} ${slide.title}`}
                          className="mx-auto max-h-[46vh] w-auto rounded-2xl border border-white/10 object-contain shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                        />
                        <div className="mt-5 mb-2 text-2xl md:text-4xl text-white" style={{ fontWeight: 700 }}>
                          {slide.title}
                        </div>
                        <p className="mx-auto max-w-lg text-base md:text-lg text-gray-400">
                          {project.name} preview screen.
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
                key={slide.title}
                type="button"
                onClick={() => onSelect(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-purple-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Show ${slide.title}`}
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
  slides: ProjectSlide[];
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
              <img
                src={slides[activeIndex].image}
                alt={`${title} ${slides[activeIndex].title}`}
                className="h-28 w-full rounded-2xl border border-white/10 object-cover"
              />
              <div className="text-lg text-white" style={{ fontWeight: 600 }}>
                {slides[activeIndex].title}
              </div>
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <span
                    key={slide.title}
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

function ProjectGrid({
  items,
  thumbnailSlides,
  onOpenViewer,
  onNextThumb,
}: {
  items: Project[];
  thumbnailSlides: number[];
  onOpenViewer: (projectIndex: number) => void;
  onNextThumb: (projectIndex: number) => void;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((project) => {
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
                  onOpen={() => onOpenViewer(index)}
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
                  onClick={() => onNextThumb(index)}
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
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-purple-300 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Project
                </a>
                <a
                  href={project.sourceUrl}
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
        );
      })}
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [viewerProjectIndex, setViewerProjectIndex] = useState<number | null>(null);
  const [viewerSlideIndex, setViewerSlideIndex] = useState(0);
  const [thumbnailSlides, setThumbnailSlides] = useState<number[]>(projects.map(() => 0));
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );
  const homeProjects = visibleProjects.filter((project) => HOME_PROJECT_NAMES.has(project.name));

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

        <ProjectGrid
          items={homeProjects}
          thumbnailSlides={thumbnailSlides}
          onOpenViewer={openViewer}
          onNextThumb={setThumbnailSlide}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => setIsAllProjectsOpen(true)}
            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-4 text-white transition-all hover:border-purple-400/50 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            style={{ fontWeight: 600 }}
          >
            View All Projects
          </button>
        </motion.div>
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

      {isAllProjectsOpen && (
        <div className="fixed inset-0 z-[110] overflow-y-auto bg-black/92 backdrop-blur-md">
          <div className="mx-auto min-h-screen max-w-7xl px-6 py-24">
            <div className="mb-12 flex items-start justify-between gap-6">
              <div>
                <span className="text-sm uppercase tracking-wider text-purple-400">
                  Full Archive
                </span>
                <h3
                  className="mt-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl text-transparent md:text-5xl"
                  style={{ fontWeight: 700 }}
                >
                  All Projects
                </h3>
                <p className="mt-3 max-w-2xl text-gray-400">
                  Full project listing page. The home section stays tighter while this view shows everything.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAllProjectsOpen(false)}
                className="rounded-full border border-white/10 bg-black/60 p-3 text-white transition-colors hover:border-purple-400/50 hover:text-purple-200"
                aria-label="Close all projects"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ProjectGrid
              items={visibleProjects}
              thumbnailSlides={thumbnailSlides}
              onOpenViewer={openViewer}
              onNextThumb={setThumbnailSlide}
            />
          </div>
        </div>
      )}
    </section>
  );
}
