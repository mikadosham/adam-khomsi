"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectPreview from "@/components/project-preview";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSupabase,
  SiStripe,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiFirebase,
  SiNodedotjs,
  SiJavascript,
  SiOpenai,
  SiZod,
  SiShadcnui,
} from "react-icons/si";

export default function ProjectsPage() {
  // Helper function to get tech icon and color
  const getTechInfo = (techName: string) => {
    const techMap: Record<
      string,
      {
        icon: React.ComponentType<{
          className?: string;
          style?: React.CSSProperties;
        }>;
        color: string;
      }
    > = {
      "Next.js": { icon: SiNextdotjs, color: "#000000" },
      React: { icon: SiReact, color: "#61DAFB" },
      TypeScript: { icon: SiTypescript, color: "#3178C6" },
      Supabase: { icon: SiSupabase, color: "#3ECF8E" },
      Stripe: { icon: SiStripe, color: "#635BFF" },
      TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
      Zod: { icon: SiZod, color: "#443E38" },
      "Framer Motion": { icon: SiFramer, color: "#FF0055" },
      OpenAI: { icon: SiOpenai, color: "#412991" },
      Mapbox: { icon: SiReact, color: "#4264FB" },
      Firebase: { icon: SiFirebase, color: "#FFCA28" },
      "PWA/Service Workers": { icon: SiReact, color: "#5A0FC8" },
      "Node.js": { icon: SiNodedotjs, color: "#339933" },
      "CSS Modules": { icon: SiReact, color: "#1572B6" },
      "AI/ML APIs": { icon: SiReact, color: "#61DAFB" },
      Vercel: { icon: SiVercel, color: "#000000" },
      JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
      "Modern Web APIs": { icon: SiJavascript, color: "#F7DF1E" },
      "Responsive Design": { icon: SiTailwindcss, color: "#06B6D4" },
      "ShadCN/UI": { icon: SiShadcnui, color: "#000000" },
      "Radix UI": { icon: SiReact, color: "#161618" },
      "React Hook Form": { icon: SiReact, color: "#EC5990" },
      "React Dropzone": { icon: SiReact, color: "#61DAFB" },
      "React Day Picker": { icon: SiReact, color: "#61DAFB" },
      "Lucide React": { icon: SiReact, color: "#F56565" },
      PostgreSQL: { icon: SiReact, color: "#336791" },
      "API Routes": { icon: SiNextdotjs, color: "#000000" },
      Webhooks: { icon: SiReact, color: "#4A90E2" },
      "Real-time subscriptions": { icon: SiSupabase, color: "#3ECF8E" },
      "Cron jobs": { icon: SiNodedotjs, color: "#339933" },
      "TanStack Query": { icon: SiReact, color: "#FF4154" },
      Zustand: { icon: SiReact, color: "#443E38" },
      "React hooks": { icon: SiReact, color: "#61DAFB" },
      "Server state": { icon: SiReact, color: "#61DAFB" },
      "Stripe Connect": { icon: SiStripe, color: "#635BFF" },
      "Payment Intents": { icon: SiStripe, color: "#635BFF" },
      "Automated payouts": { icon: SiStripe, color: "#635BFF" },
      "Node-ical": { icon: SiNodedotjs, color: "#339933" },
      ESLint: { icon: SiReact, color: "#4B32C3" },
      pnpm: { icon: SiNodedotjs, color: "#F69220" },
    };

    return techMap[techName] || { icon: null, color: "#666666" };
  };

  const projects = [
    {
      title: "Rehostly",
      description:
        "A comprehensive platform empowering vacation rental hosts to manage repeat guests independently. Hosts can manage their listings, automate guest communications, and create their own branded booking website to bypass platform fees.",
      longDescription:
        "Rehostly is a full-stack SaaS platform designed specifically for vacation rental hosts to build lasting relationships with their repeat guests. The platform enables hosts to create their own branded booking websites, manage property listings independently, and automate personalized email communications with past guests. With integrated payment processing and a sophisticated host dashboard, Rehostly transforms how hosts manage their repeat business, allowing them to reduce dependency on booking platforms while increasing direct bookings and profit margins.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Stripe",
        "TailwindCSS",
        "Framer Motion",
        "Zod",
        "OpenAI",
        "ShadCN/UI",
      ],
      features: [
        "Custom branded booking websites for each host",
        "Comprehensive listing management dashboard",
        "Automated email campaigns for repeat guests",
        "Direct payment processing bypassing platform fees",
        "Guest relationship management and communication tools",
        "Real-time booking availability and calendar sync",
        "Multi-property management for portfolio hosts",
        "Analytics and earnings tracking",
        "Mobile-responsive guest booking experience",
        "Automated follow-up sequences for past guests",
        "Integration with existing property management tools",
        "Secure payment handling with Stripe Connect",
        "Customizable booking flows and policies",
        "Guest database with booking history",
        "Professional host onboarding and setup",
      ],
      architecture: {
        frontend: [
          "Next.js",
          "React",
          "TypeScript",
          "TailwindCSS",
          "ShadCN/UI",
          "Framer Motion",
          "Radix UI",
          "Zod",
          "Lucide React",
        ],
        backend: [
          "Supabase",
          "PostgreSQL",
          "Next.js API Routes",
          "Webhooks",
          "Real-time subscriptions",
          "Cron jobs",
        ],
        stateManagement: [
          "TanStack Query",
          "Zustand",
          "React hooks",
          "Server state",
        ],
        payments: [
          "Stripe Connect",
          "Payment Intents",
          "Webhooks",
          "Automated payouts",
        ],
        aiAndServices: [
          "OpenAI",
          "Mapbox",
          "Resend",
          "Node-ical",
        ],
        development: [
          "TypeScript",
          "ESLint",
          "pnpm",
          "Vercel",
        ],
      },
      image: "/rehostly-preview.jpg",
      demoUrl: "https://rehostly.ca",
      githubUrl: "#",
      featured: true,
      year: "2024",
      status: "Live",
    },
    {
      title: "JazzHunt",
      description:
        "A specialized platform for instrumentalists to discover music in their instrument's key and organize setlists for live performances. Features offline capabilities for seamless use during gigs.",
      longDescription:
        "JazzHunt is a comprehensive music discovery and performance management platform tailored specifically for instrumentalists. Musicians can search and filter songs by key signature to find music that perfectly suits their instrument, making practice and performance preparation more efficient. The integrated setlist organizer allows musicians to create, manage, and access their performance repertoire during live gigs. Built as a Progressive Web App with offline functionality, JazzHunt ensures musicians have reliable access to their music library even in venues with poor connectivity.",
      tech: [
        "React",
        "Firebase",
        "PWA/Service Workers",
        "Node.js",
        "CSS Modules",
      ],
      features: [
        "Key signature search and filtering for instrument compatibility",
        "Comprehensive setlist organizer for live performances",
        "Progressive Web App with offline access during gigs",
        "Music discovery tailored to specific instruments",
        "Real-time setlist management and organization",
        "Offline-first architecture for reliable venue performance",
        "Sheet music and lead sheet storage capabilities",
        "Performance-ready interface optimized for mobile devices",
        "Firebase-powered real-time synchronization",
        "Custom service workers for enhanced offline experience",
      ],
      image: "/jazzhunt-screenshot.png",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2022 - Present",
      status: "Live",
    },
    {
      title: "TruthPulse 5000",
      description:
        "AI-powered fact-checking application that verifies statements, questions, and URLs with source credibility assessment.",
      longDescription:
        "TruthPulse 5000 is an AI-driven fact-checking web application designed to help users quickly validate information. The app uses artificial intelligence to cross-reference and assess the accuracy of submitted content, whether it's statements, questions, or website URLs. It provides verdicts along with reliable sources, making it a valuable tool for information verification in our digital age.",
      tech: ["Next.js", "AI/ML APIs", "React", "TypeScript", "Vercel"],
      features: [
        "AI-powered fact verification system",
        "Statement and URL verification",
        "Source credibility assessment",
        "Real-time fact-checking results",
        "Simple and intuitive interface",
        "Reliable source attribution",
      ],
      image: "/truth-pulse-screenshot.png",
      demoUrl: "https://truth-pulse-rho.vercel.app/",
      githubUrl: "https://github.com/mikadosham/truth-pulse",
      featured: false,
      year: "2024",
      status: "Live",
    },
    {
      title: "DiffRead",
      description:
        "A developer support tool that makes .diff files human-readable, born from the need to clearly communicate code changes to clients and team members.",
      longDescription:
        "DiffRead was created to solve a common problem in developer support: making it easy for clients and non-technical stakeholders to understand what changes need to be made to their files. Traditional .diff files are notoriously difficult to read and interpret, creating communication barriers between developers and clients. DiffRead transforms complex diff outputs into clear, visual representations that highlight exactly what changes need to be made and where, making code review and change implementation much more accessible for everyone involved.",
      tech: ["JavaScript", "Modern Web APIs", "Responsive Design"],
      features: [
        "Clear visual representation of .diff file changes",
        "Side-by-side comparison of file modifications",
        "Intuitive highlighting of additions, deletions, and modifications",
        "Easy-to-understand change summaries for non-technical users",
        "Support for various diff formats and file types",
        "Clean, accessible interface for better communication",
        "Perfect for developer support and client communication",
        "Eliminates confusion when explaining code changes",
        "Responsive design for desktop and mobile viewing",
        "No technical expertise required to understand changes",
      ],
      image: "/diffread-screenshot.png",
      demoUrl: "https://diffread.com/",
      githubUrl: "https://github.com/mikadosham/diffread",
      featured: false,
      year: "2024",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Here&apos;s a collection of projects I&apos;ve built, showcasing my
            expertise in modern web development, full-stack architecture, and
            product design.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  project.featured ? "ring-2 ring-blue-500/20" : ""
                }`}
              >
                <div className="flex flex-col">
                  {/* Project Header */}
                  <div className="p-6 pb-0">
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        {project.title === "Rehostly" ? (
                          <Image
                            src="/rehostly-logo.png"
                            alt="Rehostly"
                            width={450}
                            height={120}
                            className="h-24 w-auto dark:invert"
                          />
                        ) : project.title === "JazzHunt" ? (
                          <>
                            <Image
                              src="/jazz-hunt-logo.png"
                              alt="JazzHunt"
                              width={300}
                              height={80}
                              className="h-16 w-auto dark:invert"
                            />
                            <CardTitle className="text-2xl">
                              {project.title}
                            </CardTitle>
                          </>
                        ) : project.title === "TruthPulse 5000" ? (
                          <>
                            <Image
                              src="/truth-logo.png"
                              alt="TruthPulse 5000"
                              width={300}
                              height={80}
                              className="h-16 w-auto"
                            />
                            <CardTitle className="text-2xl">
                              {project.title}
                            </CardTitle>
                          </>
                        ) : project.title === "DiffRead" ? (
                          <>
                            <Image
                              src="/diff-read-logo.png"
                              alt="DiffRead"
                              width={300}
                              height={80}
                              className="h-16 w-auto"
                            />
                            <CardTitle className="text-2xl">
                              {project.title}
                            </CardTitle>
                          </>
                        ) : (
                          <CardTitle className="text-2xl">
                            {project.title}
                          </CardTitle>
                        )}
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                  </div>

                  {/* Project Preview */}
                  <div className="relative h-96 md:h-[500px] lg:h-[600px] from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                    <ProjectPreview
                      title={project.title}
                      image={project.image}
                      features={project.features}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardDescription className="text-base leading-relaxed">
                        {project.longDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <div className="text-center">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.tech.map((tech) => {
                              const techInfo = getTechInfo(tech);
                              return (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs flex items-center gap-1.5"
                                >
                                  {techInfo.icon && (
                                    <techInfo.icon
                                      className={`w-3 h-3 ${
                                        techInfo.color === "#000000"
                                          ? "dark:invert"
                                          : ""
                                      }`}
                                      style={{ color: techInfo.color }}
                                    />
                                  )}
                                  {tech}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>

                        {/* Architecture (for Rehostly) */}
                        {project.architecture && (
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-6 text-center text-lg">
                              Architecture
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-800/50">
                                <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  Frontend
                                </h5>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {project.architecture.frontend.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-green-50 to-slate-50 dark:from-green-950/20 dark:to-slate-800/50">
                                <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  Backend
                                </h5>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {project.architecture.backend.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {project.architecture.stateManagement && (
                                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-purple-50 to-slate-50 dark:from-purple-950/20 dark:to-slate-800/50">
                                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    State Management
                                  </h5>
                                  <div className="flex flex-wrap gap-2 justify-center">
                                    {project.architecture.stateManagement.map(
                                      (tech) => (
                                        <Badge
                                          key={tech}
                                          variant="secondary"
                                          className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                        >
                                          {tech}
                                        </Badge>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}

                              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-yellow-50 to-slate-50 dark:from-yellow-950/20 dark:to-slate-800/50">
                                <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                  Payments
                                </h5>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {project.architecture.payments.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {project.architecture.aiAndServices && (
                                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-orange-50 to-slate-50 dark:from-orange-950/20 dark:to-slate-800/50">
                                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    AI & Services
                                  </h5>
                                  <div className="flex flex-wrap gap-2 justify-center">
                                    {project.architecture.aiAndServices.map(
                                      (tech) => (
                                        <Badge
                                          key={tech}
                                          variant="secondary"
                                          className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                        >
                                          {tech}
                                        </Badge>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}

                              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-indigo-950/20 dark:to-slate-800/50">
                                <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2">
                                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                  Development
                                </h5>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {project.architecture.development.map(
                                    (tech) => (
                                      <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="text-xs px-2.5 py-1.5 font-medium bg-white/60 dark:bg-slate-800/60 border-0 shadow-sm"
                                      >
                                        {tech}
                                      </Badge>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-center">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center"
                              >
                                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
