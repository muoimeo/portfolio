import {
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Nguyen Minh Khang",
  role: "Frontend Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "hello@example.com",
  phone: "+84 900 000 000",
  summary:
    "Toi thiet ke va xay dung san pham web co giao dien gon, toc do tot, trai nghiem ro rang va de mo rong.",
  focus: ["Next.js", "TypeScript", "UI Engineering", "Motion Design"],
  availability: "Open for freelance and full-time roles",
};

export const socials = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/your-username", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: Linkedin },
];

export const stats = [
  { value: "3+", label: "years building web apps" },
  { value: "18", label: "projects shipped" },
  { value: "94", label: "Lighthouse performance target" },
];

export const services = [
  {
    title: "Frontend Architecture",
    description:
      "Xay dung UI co cau truc component ro rang, type-safe va phu hop voi toc do phat trien cua team.",
    icon: Code2,
  },
  {
    title: "Product Interface",
    description:
      "Thiet ke dashboard, landing experience va workflow co tinh scan cao, de dung tren desktop lan mobile.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Launch Optimization",
    description:
      "Toi uu performance, SEO metadata, motion va responsive behavior truoc khi dua len production.",
    icon: Rocket,
  },
];

export const projects = [
  {
    name: "Finance Command Center",
    type: "SaaS Dashboard",
    year: "2026",
    description:
      "Bang dieu khien tai chinh voi realtime metrics, bo loc nang cao va chart state ro rang cho van hanh hang ngay.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    accent: "from-brass/80 via-coral/70 to-mint/70",
  },
  {
    name: "Creator Booking Flow",
    type: "Marketplace",
    year: "2025",
    description:
      "Luon dat lich nhieu buoc cho creator, gom pricing, lich trong, confirm va email handoff.",
    stack: ["React", "Framer Motion", "Prisma", "Stripe"],
    accent: "from-mint/80 via-sky-400/70 to-brass/70",
  },
  {
    name: "Studio Portfolio System",
    type: "Brand Website",
    year: "2025",
    description:
      "He thong portfolio cho studio voi CMS-ready content, animation tiet che va SEO metadata day du.",
    stack: ["Next.js", "MDX", "Tailwind", "Vercel"],
    accent: "from-coral/80 via-rose-400/70 to-brass/70",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "REST API",
  "Git",
  "Figma",
  "Vercel",
];

export const timeline = [
  {
    period: "2026",
    title: "Frontend Developer",
    company: "Product Team / Freelance",
    detail:
      "Tap trung vao Next.js app, dashboard noi bo, portfolio cao cap va cac flow co yeu cau UX ro.",
  },
  {
    period: "2024 - 2025",
    title: "Web Developer",
    company: "Digital Studio",
    detail:
      "Xay landing page, admin surface, component library va cai thien performance cho nhieu client.",
  },
  {
    period: "2023",
    title: "Junior Developer",
    company: "Startup Projects",
    detail:
      "Lam viec voi React, API integration, responsive layout va quy trinh deploy len cloud platform.",
  },
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: "#", icon: MapPin },
  { label: "Status", value: profile.availability, href: "#", icon: Sparkles },
];
