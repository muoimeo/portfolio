"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Layers3, Target, Trophy, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";
import { projectDetailLabels, projectDetails, type ProjectSlug } from "@/lib/project-details";
import { translations } from "@/lib/translations";

const validSlugs = new Set<ProjectSlug>([
  "kindy-mate-ai-companion",
  "rag-codebase-qa-pipeline",
  "brfn-digital-marketplace",
  "critical-care-ccu-dashboard",
  "vehicle-damage-detection",
]);

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const dict = translations[language];
  const labels = projectDetailLabels[language];
  const slug = params.slug;

  if (!validSlugs.has(slug as ProjectSlug)) {
    return (
      <ProjectShell>
        <div className="mx-auto flex min-h-[70vh] max-w-container-max flex-col items-center justify-center px-margin-mobile text-center md:px-margin-desktop">
          <p className="mb-3 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            404
          </p>
          <h1 className="mb-4 font-display text-[40px] font-bold text-on-background">
            {labels.notFoundTitle}
          </h1>
          <p className="mb-8 max-w-xl text-secondary dark:text-gray-400">
            {labels.notFoundBody}
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-label-md text-label-md text-on-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back}
          </Link>
        </div>
      </ProjectShell>
    );
  }

  const detail = projectDetails[language][slug as ProjectSlug];
  const project = dict.projects.items.find((item) => item.slug === slug);
  const projectIndex = dict.projects.items.findIndex((item) => item.slug === slug);
  const previousProject =
    dict.projects.items[(projectIndex - 1 + dict.projects.items.length) % dict.projects.items.length];
  const nextProject = dict.projects.items[(projectIndex + 1) % dict.projects.items.length];
  const gradientClass =
    project?.category === "AI/ML"
      ? "from-primary/25 via-surface-container-high to-surface"
      : "from-emerald-500/20 via-surface-container-high to-surface";

  if (!project) {
    return null;
  }

  return (
    <ProjectShell>
      <main className="mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap pt-12 md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary-fixed-dim"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back}
          </Link>

          <section className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <p className="mb-4 font-label-md text-label-md uppercase tracking-[0.22em] text-primary dark:text-primary-fixed-dim">
                {labels.project}
              </p>
              <h1 className="mb-6 max-w-4xl font-display text-[42px] font-bold leading-tight text-on-background md:text-[64px]">
                {project.name}
              </h1>
              <p className="max-w-3xl font-body-lg text-body-lg text-secondary dark:text-gray-300">
                {detail.summary}
              </p>
            </div>

            <aside className="rounded-2xl border border-outline-variant/30 bg-surface p-6 shadow-sm dark:border-gray-800">
              <MetaItem icon={Target} label={labels.status} value={detail.status} />
              <MetaItem icon={Layers3} label={labels.timeline} value={detail.timeline} />
              <MetaItem icon={UserRound} label={labels.role} value={detail.role} />
            </aside>
          </section>

          <section
            className={`mt-12 grid gap-6 ${
              detail.demoImage ? "lg:grid-cols-[minmax(0,1.45fr)_360px]" : "lg:grid-cols-1"
            }`}
          >
            {detail.demoImage && (
              <ProjectPreview detail={detail} gradientClass={gradientClass} labels={labels} />
            )}
            <ProjectSummaryPanel
              links={detail.links}
              labels={labels}
              stack={project.stack}
              wide={!detail.demoImage}
            />
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <ContentBlock title={labels.problem} body={detail.problem} />
            <ListBlock title={labels.contribution} items={detail.contribution} />
          </section>

          <section className="mt-8 space-y-8">
            <ListBlock title={labels.implementation} items={detail.implementation} columns />
            <div className="grid gap-8 lg:grid-cols-2">
              <ListBlock title={labels.impact} items={detail.impact} icon="check" />
              <ListBlock title={labels.learnings} items={detail.learnings} icon="award" />
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group flex min-h-32 items-center gap-5 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 text-left transition-all hover:-translate-y-1 hover:border-primary dark:border-gray-800 dark:bg-surface"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
              <div className="min-w-0">
                <p className="mb-2 font-label-md text-label-md text-secondary dark:text-gray-500">
                  {labels.previous}
                </p>
                <h2 className="text-balance font-headline-md text-headline-md text-on-background transition-colors group-hover:text-primary">
                  {previousProject.name}
                </h2>
              </div>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex min-h-32 items-center justify-end gap-5 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 text-right transition-all hover:-translate-y-1 hover:border-primary dark:border-gray-800 dark:bg-surface"
            >
              <div className="min-w-0">
                <p className="mb-2 font-label-md text-label-md text-secondary dark:text-gray-500">
                  {labels.next}
                </p>
                <h2 className="text-balance font-headline-md text-headline-md text-on-background transition-colors group-hover:text-primary">
                  {nextProject.name}
                </h2>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </section>
        </motion.div>
      </main>
    </ProjectShell>
  );
}

function ProjectShell({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const dict = translations[language];

  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md transition-colors duration-300 dark:border-outline-variant/10 dark:bg-surface/80">
        <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <Link href="/" className="font-display text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            {dict.hero.name}
          </Link>
          <div className="hidden items-center gap-gutter md:flex">
            <Link className="font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim" href="/#projects">
              {dict.nav.projects}
            </Link>
            <Link className="font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim" href="/#experience">
              {dict.nav.experience}
            </Link>
            <Link className="font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim" href="/#research">
              {dict.nav.research}
            </Link>
            <Link className="font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim" href="/#skills">
              {dict.nav.skills}
            </Link>
            <Link className="font-label-md text-label-md text-secondary transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-primary-fixed-dim" href="/#awards">
              {dict.nav.awards}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-primary px-5 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 active:opacity-80 dark:hover:bg-primary/80 sm:inline-flex"
            >
              {dict.nav.resume}
            </a>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

function ProjectPreview({
  detail,
  gradientClass,
  labels,
}: {
  detail: { demoImage?: string; demoImageAlt?: string };
  gradientClass: string;
  labels: { preview: string; demoMissing: string };
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = detail.demoImage && !imageFailed;

  return (
    <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface shadow-sm dark:border-gray-800">
      <div className="border-b border-outline-variant/30 px-5 py-4 dark:border-gray-800">
        <p className="font-label-md text-label-md text-secondary dark:text-gray-400">
          {labels.preview}
        </p>
      </div>
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradientClass}`}>
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:32px_32px]" />
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={detail.demoImage}
            alt={detail.demoImageAlt ?? labels.preview}
            className="relative h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="relative flex h-full items-center justify-center p-8 text-center">
            <div className="max-w-sm rounded-xl border border-white/30 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-black/20">
              <p className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim">
                {labels.demoMissing}
              </p>
              {detail.demoImage && (
                <p className="mt-2 text-xs text-secondary dark:text-gray-400">
                  {detail.demoImage}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectSummaryPanel({
  labels,
  links,
  stack,
  wide,
}: {
  labels: { links: string; stack: string; unavailable: string };
  links: Array<{ label: string; href: string; disabled?: boolean }>;
  stack: string[];
  wide?: boolean;
}) {
  return (
    <aside
      className={`rounded-2xl border border-outline-variant/30 bg-surface p-6 shadow-sm dark:border-gray-800 ${
        wide ? "lg:grid lg:grid-cols-[minmax(0,760px)_auto] lg:items-start lg:justify-between lg:gap-10" : ""
      }`}
    >
      <div>
        <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
          {labels.stack}
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-container-high/70 px-3 py-1 font-label-sm text-label-sm text-primary dark:border dark:border-gray-800 dark:bg-surface-container-low dark:text-primary-fixed-dim"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={wide ? "mt-8 lg:mt-0 lg:justify-self-end lg:text-right" : "mt-8"}>
        <h2 className="mb-4 font-headline-md text-headline-md text-on-background">
          {labels.links}
        </h2>
        <LinkList labels={labels} links={links} />
      </div>
    </aside>
  );
}

function LinkList({
  labels,
  links,
}: {
  labels: { unavailable: string };
  links: Array<{ label: string; href: string; disabled?: boolean }>;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) =>
        link.disabled ? (
          <span
            key={link.label}
            className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/30 px-4 py-2 font-label-md text-label-md text-secondary dark:border-gray-800 dark:text-gray-500"
          >
            {link.label}
            <span className="text-xs">({labels.unavailable})</span>
          </span>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-transform hover:-translate-y-0.5"
          >
            {link.label}
            <ExternalLink className="h-4 w-4" />
          </a>
        ),
      )}
    </div>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-outline-variant/30 py-4 first:pt-0 last:border-b-0 last:pb-0 dark:border-gray-800">
      <div className="mb-2 flex items-center gap-2 text-primary dark:text-primary-fixed-dim">
        <Icon className="h-4 w-4" />
        <span className="font-label-sm text-label-sm uppercase tracking-[0.16em]">{label}</span>
      </div>
      <p className="font-body-md text-body-md text-on-background">{value}</p>
    </div>
  );
}

function ContentBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-outline-variant/30 bg-surface p-6 dark:border-gray-800">
      <h2 className="mb-4 font-headline-md text-headline-md text-on-background">{title}</h2>
      <p className="font-body-md text-body-md text-secondary dark:text-gray-400">{body}</p>
    </article>
  );
}

function ListBlock({
  title,
  items,
  icon = "dot",
  columns = false,
}: {
  title: string;
  items: string[];
  icon?: "dot" | "check" | "award";
  columns?: boolean;
}) {
  return (
    <article className="rounded-2xl border border-outline-variant/30 bg-surface p-6 dark:border-gray-800">
      <h2 className="mb-5 font-headline-md text-headline-md text-on-background">{title}</h2>
      <ul className={columns ? "grid gap-4 md:grid-cols-2" : "space-y-4"}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-body-md text-body-md text-secondary dark:text-gray-400">
            <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-fixed-dim">
              {icon === "check" ? (
                <ArrowRight className="h-3 w-3" />
              ) : icon === "award" ? (
                <Trophy className="h-3 w-3" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              )}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
