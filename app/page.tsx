"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, Check, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { NetworkCanvas } from "@/components/network-canvas";

export default function Home() {
  const { language } = useLanguage();
  const dict = translations[language];

  const [activeFilter, setActiveFilter] = useState<"all" | "aiMl" | "web">("all");
  const [activeSection, setActiveSection] = useState("projects");
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "bvnm.workspace@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Failed to copy", err);
      }
      document.body.removeChild(textArea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  // Scrollspy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ["projects", "experience", "research", "skills", "awards"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = dict.projects.items.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "aiMl") return project.category === "AI/ML";
    if (activeFilter === "web") return project.category === "Web";
    return true;
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="flex min-h-screen flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md transition-colors duration-300 dark:border-outline-variant/10 dark:bg-surface/80">
        <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <div className="font-display text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            {dict.hero.name}
          </div>
          
          <div className="hidden items-center gap-gutter md:flex">
            <a
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary dark:hover:text-primary-fixed-dim ${
                activeSection === "projects"
                  ? "border-b-2 border-primary font-bold text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim"
                  : "text-secondary dark:text-secondary-fixed-dim"
              }`}
              href="#projects"
            >
              {dict.nav.projects}
            </a>
            <a
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary dark:hover:text-primary-fixed-dim ${
                activeSection === "experience"
                  ? "border-b-2 border-primary font-bold text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim"
                  : "text-secondary dark:text-secondary-fixed-dim"
              }`}
              href="#experience"
            >
              {dict.nav.experience}
            </a>
            <a
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary dark:hover:text-primary-fixed-dim ${
                activeSection === "research"
                  ? "border-b-2 border-primary font-bold text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim"
                  : "text-secondary dark:text-secondary-fixed-dim"
              }`}
              href="#research"
            >
              {dict.nav.research}
            </a>
            <a
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary dark:hover:text-primary-fixed-dim ${
                activeSection === "skills"
                  ? "border-b-2 border-primary font-bold text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim"
                  : "text-secondary dark:text-secondary-fixed-dim"
              }`}
              href="#skills"
            >
              {dict.nav.skills}
            </a>
            <a
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary dark:hover:text-primary-fixed-dim ${
                activeSection === "awards"
                  ? "border-b-2 border-primary font-bold text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim"
                  : "text-secondary dark:text-secondary-fixed-dim"
              }`}
              href="#awards"
            >
              {dict.nav.awards}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 active:opacity-80 dark:hover:bg-primary/80"
            >
              {dict.nav.resume}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-surface-container-high/50 pb-section-gap pt-20 transition-colors duration-300 dark:from-background dark:to-background">
        <NetworkCanvas />
        <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-container-max flex-col items-center px-margin-mobile text-center md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto mb-8 relative group"
          >
            {/* Soft background glow decoration */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300 scale-95" />
            
            {/* The circular border frame */}
            <div className="relative w-36 h-36 rounded-full border border-outline-variant/30 bg-surface/50 dark:border-outline-variant/10 dark:bg-surface/10 backdrop-blur-md overflow-hidden shadow-sm flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-surface-container-high dark:bg-surface-container-low flex items-center justify-center">
                {/* Profile Pic Placeholder */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    // Fallback to a User icon SVG if the image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const svg = parent.querySelector('.fallback-svg');
                      if (svg) svg.classList.remove('hidden');
                    }
                  }}
                />
                <svg
                  className="fallback-svg hidden w-16 h-16 text-secondary dark:text-gray-400 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-display text-display tracking-tight text-on-background"
          >
            {dict.hero.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim"
          >
            {dict.hero.role}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 max-w-2xl font-body-lg text-body-lg text-secondary dark:text-gray-300"
          >
            {dict.hero.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pointer-events-auto flex gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-primary px-8 py-3 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-300 hover:bg-primary/95 hover:shadow-[0px_8px_30px_rgba(59,130,246,0.15)] active:scale-98 dark:hover:bg-primary/80"
            >
              {dict.hero.viewProjects}
            </a>
            <button
              onClick={handleCopyEmail}
              className="rounded-lg border border-outline bg-transparent px-8 py-3 font-label-md text-label-md text-secondary transition-colors duration-300 hover:border-primary hover:text-primary dark:border-gray-600 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
            >
              {dict.hero.contactMe}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="mx-auto flex w-full max-w-container-max flex-col gap-section-gap px-margin-mobile pb-section-gap pt-12 md:px-margin-desktop">
        
        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="mb-12">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-background">
              {dict.projects.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveFilter("all")}
                className={`rounded-full px-4 py-2 font-label-md text-label-md transition-all duration-200 border ${
                  activeFilter === "all"
                    ? "bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30"
                    : "border-outline-variant/30 text-secondary hover:bg-surface-container-high/40 hover:text-on-background dark:border-gray-700 dark:text-gray-300 dark:hover:bg-surface-container-low"
                }`}
              >
                {dict.projects.filters.all}
              </button>
              <button
                onClick={() => setActiveFilter("aiMl")}
                className={`rounded-full px-4 py-2 font-label-md text-label-md transition-all duration-200 border ${
                  activeFilter === "aiMl"
                    ? "bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30"
                    : "border-outline-variant/30 text-secondary hover:bg-surface-container-high/40 hover:text-on-background dark:border-gray-700 dark:text-gray-300 dark:hover:bg-surface-container-low"
                }`}
              >
                {dict.projects.filters.aiMl}
              </button>
              <button
                onClick={() => setActiveFilter("web")}
                className={`rounded-full px-4 py-2 font-label-md text-label-md transition-all duration-200 border ${
                  activeFilter === "web"
                    ? "bg-primary/10 border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30"
                    : "border-outline-variant/30 text-secondary hover:bg-surface-container-high/40 hover:text-on-background dark:border-gray-700 dark:text-gray-300 dark:hover:bg-surface-container-low"
                }`}
              >
                {dict.projects.filters.web}
              </button>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const gradientClass =
                  project.category === "AI/ML"
                    ? "from-primary/20 to-surface-container-low dark:to-surface"
                    : "from-purple-500/20 to-surface-container-low dark:to-surface";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3 }}
                    key={project.name}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0px_8px_30px_rgba(59,130,246,0.08)] focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-gray-800 dark:bg-surface dark:hover:border-primary/50 dark:hover:shadow-[0px_8px_30px_rgba(59,130,246,0.15)]"
                    >
                      <div className="relative h-48 overflow-hidden bg-surface-container-high/30">
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-2 flex flex-wrap items-center gap-2 font-headline-md text-headline-md text-on-background transition-colors duration-200 group-hover:text-primary">
                          <span>{project.name}</span>
                          {project.isOngoing && (
                            <span className="inline-flex select-none items-center rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                              {dict.projects.ongoingBadge}
                            </span>
                          )}
                        </h3>
                        <p className="mb-6 flex-1 font-body-md text-body-md text-secondary dark:text-gray-400">
                          {project.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-surface-container-high/70 px-3 py-1 font-label-sm text-label-sm text-primary dark:border dark:border-gray-800 dark:bg-surface-container-low dark:text-primary-fixed-dim"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Experience & Education Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="mb-10 font-headline-lg text-headline-lg text-on-background">
            {dict.experience.title}
          </h2>
          <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
            
            {/* Internship Card */}
            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-surface flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary dark:bg-surface-container-low dark:text-primary-primary-fixed-dim">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  {dict.experience.internshipsTitle}
                </h3>
              </div>
              
              <div className="space-y-8 divide-y divide-outline-variant/20 dark:divide-gray-800/50">
                {dict.experience.internships.map((internship, index) => (
                  <div key={internship.company} className={`${index > 0 ? "pt-8" : ""}`}>
                    <div className="mb-4 border-l-2 border-primary/20 pl-4 dark:border-gray-800">
                      <h4 className="font-headline-md text-[18px] font-bold text-on-background">
                        {internship.role}
                      </h4>
                      <p className="text-sm font-semibold text-primary dark:text-primary-fixed-dim mt-1">
                        {internship.company}
                      </p>
                      <p className="text-xs text-secondary dark:text-gray-500 mt-0.5">
                        {internship.period}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {internship.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-secondary dark:text-gray-400">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 dark:bg-primary-fixed-dim/50" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-surface">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary dark:bg-surface-container-low dark:text-primary-fixed-dim">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  {dict.experience.educationTitle}
                </h3>
              </div>
              
              <div className="mb-6 border-l-2 border-primary/20 pl-4 dark:border-gray-800">
                <h4 className="font-headline-md text-[18px] font-bold text-on-background">
                  {dict.experience.educationDegree}
                </h4>
                <p className="text-sm font-semibold text-primary dark:text-primary-fixed-dim mt-1">
                  {dict.experience.educationSchool}
                </p>
                <p className="text-xs text-secondary dark:text-gray-500 mt-0.5">
                  {dict.experience.educationPeriod}
                </p>
              </div>

              <ul className="space-y-4">
                {dict.experience.educationDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-secondary dark:text-gray-400">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 dark:bg-primary-fixed-dim/50" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-surface md:p-12"
        >
          <h2 className="mb-10 text-center font-headline-lg text-headline-lg text-on-background">
            {dict.skills.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Languages Column */}
            <div className="flex flex-col">
              <h3 className="mb-6 border-b border-outline-variant/30 pb-2 font-headline-md text-[18px] font-bold text-primary dark:text-white">
                {dict.skills.categories.languages.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {dict.skills.categories.languages.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 font-label-md text-label-md text-primary dark:bg-surface-container-low dark:text-gray-300 dark:border dark:border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML Column */}
            <div className="flex flex-col">
              <h3 className="mb-6 border-b border-outline-variant/30 pb-2 font-headline-md text-[18px] font-bold text-primary dark:text-white">
                {dict.skills.categories.aiMl.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {dict.skills.categories.aiMl.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 font-label-md text-label-md text-primary dark:bg-surface-container-low dark:text-gray-300 dark:border dark:border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div className="flex flex-col">
              <h3 className="mb-6 border-b border-outline-variant/30 pb-2 font-headline-md text-[18px] font-bold text-primary dark:text-white">
                {dict.skills.categories.backend.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {dict.skills.categories.backend.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 font-label-md text-label-md text-primary dark:bg-surface-container-low dark:text-gray-300 dark:border dark:border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div className="flex flex-col">
              <h3 className="mb-6 border-b border-outline-variant/30 pb-2 font-headline-md text-[18px] font-bold text-primary dark:text-white">
                {dict.skills.categories.tools.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {dict.skills.categories.tools.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 font-label-md text-label-md text-primary dark:bg-surface-container-low dark:text-gray-300 dark:border dark:border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="mb-10 font-headline-lg text-headline-lg text-on-background">
            {dict.research.title}
          </h2>
          <div className="rounded-2xl border border-outline-variant/30 bg-surface p-8 transition-shadow duration-300 hover:shadow-[0px_4px_20px_rgba(30,41,59,0.05)] dark:border-gray-800 dark:hover:shadow-[0px_4px_20px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="flex-1">
                <h3 className="mb-4 font-headline-md text-headline-md text-on-background">
                  {dict.research.paperTitle}
                </h3>
                <p className="mb-6 font-body-md text-body-md text-secondary dark:text-gray-400">
                  {dict.research.description}
                </p>
                <a
                  href="/rag_paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary transition-all duration-200 hover:underline dark:text-primary-fixed-dim"
                >
                  {dict.research.readPaper}{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex min-w-[200px] flex-col items-center justify-center rounded-xl border border-primary/20 bg-surface-container-high p-6 dark:border-primary/30 dark:bg-surface-container-low">
                <span className="mb-2 font-display text-[40px] font-bold leading-none text-primary dark:text-primary-fixed-dim">
                  {dict.research.statValue}
                </span>
                <span className="text-center font-label-md text-label-md text-secondary dark:text-gray-400">
                  {dict.research.statLabel}
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section
          id="awards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="mb-10 font-headline-lg text-headline-lg text-on-background">
            {dict.awards.title}
          </h2>
          <div className="relative ml-4 border-l-2 border-outline-variant/30 space-y-12 transition-colors duration-300 dark:border-gray-800 md:ml-0 md:pl-8">
            {dict.awards.items.map((award, i) => (
              <div className="relative pl-6 md:pl-0" key={award.title}>
                {award.isLive ? (
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-background dark:-left-[41px] flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  </div>
                ) : (
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background dark:-left-[41px]" />
                )}
                <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    {award.title}
                  </h3>
                  <span className="font-label-md text-label-md text-secondary dark:text-gray-500">
                    {award.period}
                  </span>
                </div>
                <p className="max-w-2xl font-body-md text-body-md text-secondary dark:text-gray-400">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full border-t border-outline-variant/30 bg-surface dark:border-outline-variant/10 dark:bg-surface">
        <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between py-gutter px-margin-mobile md:flex-row md:px-margin-desktop">
          <div className="mb-4 font-body-md text-body-md text-on-secondary-fixed-variant dark:text-secondary-fixed-dim md:mb-0">
            {dict.footer.copyright}
          </div>
          <div className="flex gap-6">
            <a
              className="font-body-md text-body-md text-on-secondary-fixed-variant underline underline-offset-4 transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim"
              href="https://linkedin.com/in/bui-vu-nhat-minh-042b73320"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="font-body-md text-body-md text-on-secondary-fixed-variant underline underline-offset-4 transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim"
              href="https://github.com/muoimeo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="font-body-md text-body-md text-on-secondary-fixed-variant underline underline-offset-4 transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim"
              href="https://gitlab.uwe.ac.uk/bvn2-minh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
            </a>
            <button
              className="font-body-md text-body-md text-on-secondary-fixed-variant underline underline-offset-4 transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim"
              onClick={handleCopyEmail}
            >
              Email
            </button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showToast && (
          <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface/90 px-6 py-3 text-sm font-label-md text-on-background shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-surface-container-low/90 whitespace-nowrap"
            >
              <Check className="h-4 w-4 text-emerald-500" />
              <span>{dict.hero.emailCopied}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
