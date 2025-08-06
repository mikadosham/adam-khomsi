"use client";

import Image from "next/image";
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
import { ArrowLeft, Github, ExternalLink, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import ProjectPreview from "@/components/project-preview";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Rehostly",
      description:
        "A production-ready direct-booking marketplace for Airbnb hosts and return guests. Features a sophisticated split-fee payment model, real-time booking engine, and comprehensive host/guest dashboards.",
      longDescription:
        "Rehostly is a modern, full-stack marketplace application that enables Airbnb hosts to accept direct bookings from their return guests, bypassing Airbnb's fees. Built with a focus on type safety, user experience, and scalable payment processing, it features a sophisticated split-fee payment model, instant booking flows, and comprehensive dashboards for both hosts and guests. The application includes a professional host dashboard for managing property listings, tracking bookings, and monitoring earnings.",
      tech: [
        "Next.js 14 (App Router)",
        "React 18 + TypeScript",
        "Supabase (PostgreSQL, Auth, Storage)",
        "Stripe Connect + PaymentIntents",
        "Resend (Transactional Emails)",
        "TailwindCSS + ShadCN/UI",
        "Framer Motion + Lucide React",
        "Zod + React Hook Form",
        "TanStack Query",
        "Date-fns",
      ],
      features: [
        "Split-fee payment model (guest + host fees)",
        "Instant booking and booking request flows",
        "Host dashboard with earnings tracking",
        "Guest booking engine with customizable themes",
        "Real-time updates via Supabase subscriptions",
        "Email automation for booking confirmations",
        "Stripe Connect marketplace payments",
        "Multi-tenant marketplace architecture",
        "Webhook-driven payment processing",
        "Mobile-first responsive design",
      ],
      architecture: {
        frontend: [
          "Next.js 14 with App Router",
          "React 18 with TypeScript",
          "TailwindCSS + ShadCN/UI",
          "Framer Motion for animations",
          "Radix UI for accessible primitives",
        ],
        backend: [
          "Supabase (PostgreSQL, Auth, Storage)",
          "Next.js API Routes",
          "Edge Functions for serverless logic",
          "Real-time subscriptions",
        ],
        payments: [
          "Stripe Connect for marketplace payments",
          "PaymentIntents for secure transactions",
          "Transfers for host payouts",
          "Webhook-driven processing",
        ],
        development: [
          "Full-stack TypeScript",
          "ESLint for code quality",
          "pnpm package manager",
          "Vercel deployment",
        ],
      },
      image: "/rehostly-preview.jpg",
      demoUrl: "https://rehostly.com",
      githubUrl: "#",
      featured: true,
      year: "2024",
      status: "Live",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js, featuring smooth animations, responsive design, and a clean professional aesthetic.",
      longDescription:
        "A modern, responsive portfolio website showcasing my work and skills. Built with Next.js 15, TailwindCSS for styling, Framer Motion for smooth animations, and ShadCN/UI components for a polished look. Features include dark mode support, mobile-first design, and optimized performance.",
      tech: [
        "Next.js 15",
        "TailwindCSS",
        "Framer Motion",
        "ShadCN/UI",
        "TypeScript",
      ],
      features: [
        "Responsive design with mobile-first approach",
        "Smooth animations with Framer Motion",
        "Dark mode support",
        "Optimized performance and SEO",
        "Modern UI with ShadCN components",
      ],
      image: "/portfolio-preview.jpg",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2024",
      status: "Live",
    },
    {
      title: "JazzHunt",
      description:
        "A musician-focused visual search tool designed for music discovery through filters and tagging.",
      longDescription:
        "JazzHunt is a visual search platform designed specifically for musicians and music enthusiasts. Built with React, Tailwind, and custom GraphQL APIs, it focuses on UI speed, discoverability, and musical concept navigation. The platform allows users to search and discover music through sophisticated filtering and tagging systems, making it easy to find specific musical concepts, artists, and compositions.",
      tech: ["React", "Tailwind CSS", "GraphQL", "Custom APIs", "TypeScript"],
      features: [
        "Visual search interface optimized for speed",
        "Musical concept navigation and filtering",
        "Advanced tagging system for music categorization",
        "Fast, responsive UI focused on discoverability",
        "Custom GraphQL APIs for efficient data fetching",
        "Musician-focused search and discovery tools",
      ],
      image: "/jazzhunt-preview.jpg",
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
      image: "/truthpulse-preview.jpg",
      demoUrl: "https://truth-pulse-rho.vercel.app/",
      githubUrl: "#",
      featured: false,
      year: "2024",
      status: "Live",
    },
    {
      title: "DiffRead",
      description:
        "Modern reading and text analysis tool built with JavaScript technologies.",
      longDescription:
        "DiffRead is a modern web application designed to enhance reading and text analysis experiences. Built with contemporary JavaScript frameworks, it provides users with advanced reading tools and text processing capabilities. The application focuses on improving reading comprehension and text analysis through an intuitive, JavaScript-powered interface.",
      tech: ["JavaScript", "Modern Web APIs", "Responsive Design"],
      features: [
        "Enhanced reading experience",
        "Text analysis capabilities",
        "Modern JavaScript-powered interface",
        "Responsive web design",
        "Advanced reading tools",
        "User-friendly text processing",
      ],
      image: "/diffread-preview.jpg",
      demoUrl: "https://diffread.com/",
      githubUrl: "#",
      featured: false,
      year: "2024",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Preview */}
                  <div className="relative h-64 md:h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                    <ProjectPreview
                      title={project.title}
                      image={project.image}
                      features={project.features}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {project.year}
                            </div>
                            <Badge
                              variant={
                                project.status === "Live"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {project.status}
                            </Badge>
                            {project.featured && (
                              <Badge variant="default" className="bg-blue-500">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.longDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Architecture (for Rehostly) */}
                        {project.architecture && (
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                              Architecture
                            </h4>
                            <div className="space-y-4">
                              <div>
                                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                  Frontend
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {project.architecture.frontend.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                  Backend
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {project.architecture.backend.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                  Payments
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {project.architecture.payments.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                  Development
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {project.architecture.development.map(
                                    (tech) => (
                                      <Badge
                                        key={tech}
                                        variant="outline"
                                        className="text-xs"
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
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
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
