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
import {
  ArrowLeft,
  Code,
  Database,
  CreditCard,
  Mail,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "TailwindCSS",
        "Framer Motion",
        "Liquid",
      ],
      icon: Code,
    },
    {
      category: "Backend & APIs",
      items: [
        "Ruby on Rails",
        "Node.js",
        "GraphQL",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "Python",
        "PHP",
        "SQL",
      ],
      icon: Database,
    },
    {
      category: "Shopify Ecosystem",
      items: [
        "Polaris",
        "Shopify APIs",
        "Liquid",
        "Shopify Apps",
        "Checkout Extensibility",
        "Shopify Functions",
        "Merchant Solutions",
        "Developer Tools",
      ],
      icon: Shield,
    },
    {
      category: "Payments & Integrations",
      items: ["Stripe", "Stripe Connect", "Webhooks", "Payment Processing"],
      icon: CreditCard,
    },
    {
      category: "Communication & Email",
      items: [
        "Resend",
        "Email Automation",
        "Transactional Emails",
        "Notifications",
      ],
      icon: Mail,
    },
    {
      category: "Development Tools",
      items: [
        "Git/GitHub",
        "Cursor (VS Code)",
        "Claude Code",
        "Figma",
        "Vercel",
      ],
      icon: Zap,
    },
  ];

  const experience = [
    {
      title: "Frontend Developer, Developer Support",
      company: "Shopify",
      period: "2017 - Present",
      description:
        "Built and maintained merchant-facing storefront features and internal tools supporting developer support workflows using React, TypeScript, and Ruby on Rails. Collaborated with merchant developers and partners to debug and resolve complex issues. Shaped developer support and participated in cross-team projects, training, and mentorship.",
    },
    {
      title: "Founder/Engineer",
      company: "Rehostly.ca",
      period: "2024 - Present",
      description:
        "Developed a full-stack booking platform with iCal syncing, flexible booking logic, and dynamic pricing. Built booking flows using Next.js, React, Supabase, and Tailwind, supporting deposits and manual approval. Integrated Stripe Connect for payouts and designed admin dashboards for listing, branding, and payouts.",
    },
    {
      title: "Founder/Engineer",
      company: "JazzHunt",
      period: "2022 - Present",
      description:
        "Designed a musician-focused visual search tool using React, Tailwind, and custom GraphQL APIs. Focused on UI speed, discoverability, and musical concept navigation through filters and tagging.",
    },
    {
      title: "Database Administrator",
      company: "Great Places Housing Group",
      period: "2009 - 2015",
      description:
        "Managed and automated internal systems, optimized SQL queries and reporting infrastructure.",
    },
    {
      title: "Regional Sales Executive",
      company: "Wireless CCTV",
      period: "2005 - 2009",
      description:
        "Delivered enterprise security solutions and client-focused support in the B2B sales environment.",
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
            About Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Full-stack developer with deep Shopify ecosystem experience and a
            strong track record of building flexible, performant, and scalable
            tools. Passionate about creating user-focused solutions
            that solve real business problems using modern technologies like
            React/TypeScript, Next.js, Ruby on Rails, and GraphQL.
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                With over 7 years of experience at Shopify as a Frontend
                Developer in Developer Support, I specialize in building
                merchant-facing storefront features and internal tools that
                support complex developer workflows. My expertise spans both the
                merchant-facing interface and the APIs that power it, with a
                deep understanding of the Shopify ecosystem.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I&apos;m proficient in many front and back end technologies, with a history of collaborating with
                cross-functional teams to craft solutions that elevate both user
                and merchant experiences. Known for clean code, creative
                thinking, and product intuition grounded in years of experience
                across eCommerce and internal tools.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My personal projects include{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Rehostly
                </span>
                , a comprehensive booking platform for Airbnb hosts, and{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  JazzHunt
                </span>
                , a musician-focused visual search tool. These showcase my
                ability to handle complex business logic, integrate multiple
                services, and deliver polished, production-ready products.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Here are the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-6 h-6 text-blue-500" />
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A brief overview of my recent work and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription className="text-base">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a specific project in mind or just
                want to chat about technology, I&apos;d love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects">
                  <Button size="lg">View My Work</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
