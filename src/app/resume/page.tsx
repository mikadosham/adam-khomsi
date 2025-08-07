"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
  Globe,
  Code,
} from "lucide-react";
import Link from "next/link";
import Timeline from "@/components/timeline";
import SkillTags from "@/components/skill-tags";
import DevModePanel from "@/components/dev-mode-panel";
import ProjectsSection from "@/components/projects-section";

export default function ResumePage() {
  const [devModeOpen, setDevModeOpen] = useState(false);

  const contact = {
    email: "adam.khomsi@shopify.com",
    phone: "+1 (236) 594-9988",
    location: "Youbou, BC",
    website: "adamkhomsi.ca",
  };

  const skills = {
    Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue", "Liquid"],
    Backend: ["Node.js", "Ruby on Rails", "GraphQL", "REST APIs"],
    Databases: ["MySQL", "PostgreSQL", "Supabase", "Firebase"],
    "Tools & Version Control": ["Git", "GitHub"],
    Shopify: ["Polaris", "Shopify APIs", "Liquid", "Shopify Apps", "Checkout Extensibility", "Shopify Functions", "Merchant Solutions", "Developer Tools"],
  };

  const experience = [
    {
      title: "Frontend Developer",
      company: "Shopify Developer Support",
      period: "2017 - Present",
      location: "Remote",
      achievements: [
        "Developed and enhanced Plus and Enterprise storefronts, improving user experience and site performance",
        "Created new features, fixed bugs, and implemented styling updates to enhance user experience and functionality for large-scale stores",
        "Troubleshot and resolved critical issues for Shopify Plus and enterprise merchants, ensuring seamless storefront operations and performance stability",
        "Developed Ruby scripts to enhance and streamline store checkout flows, improving the purchasing experience",
        "Designed and developed internal tools and React-based Chrome extensions using Node.js, Ruby on Rails, React, TypeScript, GraphQL, Polaris, and Material UI",
        "Migrated internal tools to TypeScript, improving maintainability and developer experience",
        "Advised partners and third-party development teams on building apps, functions, extensions and integrations on the Shopify platform",
        "Played a key role in work estimates and prioritisation, collaborating with leads to ensure projects were well-defined and aligned with strategic goals",
        "Actively mentored junior developers and peers, promoting a culture of continuous learning and technical growth within the team",
      ],
    },
    {
      title: "Founder/Engineer",
      company: "Rehostly.ca",
      period: "2024 - Present",
      location: "Remote",
      achievements: [
        "Developed full-stack booking platform with iCal syncing and dynamic pricing",
        "Built booking flows using Next.js, React, Supabase, and Tailwind CSS",
        "Integrated Stripe Connect for automated payouts and payment processing",
        "Designed admin dashboards for listing management and branding customization",
      ],
    },
    {
      title: "Founder/Engineer",
      company: "JazzHunt",
      period: "2022 - Present",
      location: "Remote",
      achievements: [
        "Designed musician-focused visual search tool using React and GraphQL APIs",
        "Optimized UI for speed and musical concept navigation through advanced filtering",
        "Implemented custom tagging system for improved content discoverability",
      ],
    },
    {
      title: "Database Administrator",
      company: "Great Places Housing Group",
      period: "2009 - 2015",
      location: "Manchester, UK",
      achievements: [
        "Managed and automated internal systems for housing operations",
        "Optimized SQL queries improving reporting infrastructure performance",
        "Streamlined data workflows reducing manual processing time by 40%",
      ],
    },
    {
      title: "Regional Sales Executive",
      company: "Wireless CCTV",
      period: "2005 - 2009",
      location: "Manchester, UK",
      achievements: [
        "Delivered enterprise security solutions to B2B clients",
        "Exceeded sales targets by 25% through client-focused support approach",
        "Built long-term relationships with key enterprise accounts",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Arts",
      institution: "Leeds College of Music, Leeds, UK",
      period: "2004",
      focus: "Jazz Studies: 2:1 (honours)",
    },
    {
      degree: "A-Level",
      institution: "Runshaw College, Leyland, UK",
      period: "2001",
      focus: "Computing: A, Music Tech: A, Music: A, Maths: B",
    },
  ];

  const projects = [
    {
      name: "Rehostly",
      description:
        "A comprehensive platform empowering vacation rental hosts to manage repeat guests independently. Hosts can manage their listings, automate guest communications, and create their own branded booking website to bypass platform fees.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Stripe",
        "TailwindCSS",
        "Framer Motion",
      ],
      demoUrl: "https://rehostly.ca",
      githubUrl: null,
    },
    {
      name: "JazzHunt",
      description:
        "A specialized platform for instrumentalists to discover music in their instrument's key and organize setlists for live performances. Features offline capabilities for seamless use during gigs.",
      tech: [
        "React",
        "Firebase",
        "PWA/Service Workers",
        "Node.js",
        "CSS Modules",
      ],
      demoUrl: null,
      githubUrl: null,
    },
    {
      name: "TruthPulse",
      description:
        "AI-powered fact-checking application that verifies statements, questions, and URLs with source credibility assessment.",
      tech: ["Next.js", "React", "TypeScript", "AI/ML APIs", "Vercel"],
      demoUrl: "https://truth-pulse-rho.vercel.app/",
      githubUrl: "https://github.com/mikadosham/truth-pulse",
    },
    {
      name: "DiffRead",
      description:
        "A developer support tool that makes .diff files human-readable, born from the need to clearly communicate code changes to clients and team members.",
      tech: ["JavaScript", "Modern Web APIs", "Responsive Design"],
      demoUrl: "https://diffread.com/",
      githubUrl: "https://github.com/mikadosham/diffread",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="container mx-auto px-4 py-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-2 sm:mb-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDevModeOpen(true)}
              className="relative overflow-hidden flex-1 sm:flex-initial"
            >
              <Code className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Dev Mode</span>
              <span className="sm:hidden">Dev</span>
              <motion.div
                className="absolute inset-0 bg-green-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Link
              href="/Adam Khomsi CV 2025 updated.pdf"
              download
              className="flex-1 sm:flex-initial"
            >
              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Personal Info Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
            <div className="text-center relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">
                Adam Khomsi
              </h1>
              <p className="text-lg sm:text-xl mb-4 text-slate-600 dark:text-slate-300">
                Full Stack Developer
              </p>
              <div className="mb-4 sm:mb-6">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto border-4 border-white dark:border-slate-700 shadow-lg">
                  <AvatarImage src="/profile.jpg" alt="Adam Khomsi" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 relative z-10">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{contact.website}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Summary */}
      <section className="container mx-auto px-4 py-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-4 sm:p-6">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl mb-4">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Full-stack developer with expertise in eCommerce, UI
                architecture, and scalable web applications. Skilled in
                JavaScript, TypeScript, React, Liquid, and API integrations,
                with a focus on performance and maintainability. Passionate
                about problem-solving, clean code, and continuous learning, with
                experience in mentorship and workflow optimisation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 py-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-4 sm:p-6">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl mb-4">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <SkillTags skillData={skills} />
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="container mx-auto px-4 py-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white">
            Experience Timeline
          </h2>
          <Timeline experiences={experience} />
        </motion.div>
      </section>

      {/* Key Projects */}
      <section className="container mx-auto px-4 py-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <ProjectsSection projects={projects} />
        </motion.div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-4 py-4 sm:py-8 pb-8 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-4 sm:p-6">
            <CardHeader className="px-0 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl mb-4">
                Education & Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 sm:px-6">
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                          {edu.institution}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500">
                          {edu.focus}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="self-start sm:self-auto"
                      >
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Dev Mode Panel */}
      <DevModePanel
        isOpen={devModeOpen}
        onClose={() => setDevModeOpen(false)}
      />
    </div>
  );
}
