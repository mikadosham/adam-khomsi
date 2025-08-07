"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue } from "framer-motion";
import TechCarousel from "@/components/tech-carousel";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import {
  SiNextdotjs,
  SiSupabase,
  SiStripe,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiCss3,
  SiPwa,
} from "react-icons/si";

export default function Home() {
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartY = useRef(0);
  const dragStartX = useRef(0);
  const lastY = useRef(0);
  const lastTime = useRef(Date.now());
  const spinVelocity = useRef(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const handleMouseDown = (event: React.MouseEvent) => {
    isDragging.current = true;
    dragStartY.current = event.clientY;
    dragStartX.current = event.clientX;
    lastY.current = event.clientY;
    lastTime.current = Date.now();
    spinVelocity.current = 0;

    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    event.preventDefault();
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging.current || !imageRef.current) return;

      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;
      const yDelta = event.clientY - lastY.current;

      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      // Determine if we're on the left or right side of the image
      const isLeftSide = dragStartX.current < centerX;

      // Calculate rotation: left side = counter-clockwise, right side = clockwise
      const rotationMultiplier = isLeftSide ? -1 : 1;
      const rotationAmount = yDelta * rotationMultiplier * 0.8;

      rotation.set(rotation.get() + rotationAmount);

      // Store spin velocity for momentum
      if (timeDelta > 0) {
        spinVelocity.current = (rotationAmount / timeDelta) * 16;
      }

      lastY.current = event.clientY;
      lastTime.current = currentTime;
    },
    [rotation]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;

    // Start spin momentum animation
    const animate = () => {
      if (isDragging.current) return;

      // Apply spin momentum
      if (Math.abs(spinVelocity.current) > 0.1) {
        rotation.set(rotation.get() + spinVelocity.current);
        spinVelocity.current *= 0.98; // Apply friction to spinning
      }

      // Continue animation if there's still spin movement
      if (Math.abs(spinVelocity.current) > 0.1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [rotation]);

  // Add event listeners
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const featuredProjects = [
    {
      title: "Rehostly",
      description:
        "Production-ready direct-booking marketplace with split-fee payments",
      tech: [
        { name: "Next.js 14", icon: SiNextdotjs, color: "#000000" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Stripe Connect", icon: SiStripe, color: "#635BFF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      image: "/rehostly-preview.jpg",
      demoUrl: "https://rehostly.ca",
      githubUrl: null,
      featured: true,
    },
    {
      title: "JazzHunt",
      description: "Musician-focused visual search tool with PWA capabilities",
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "PWA", icon: SiPwa, color: "#5A0FC8" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "CSS Modules", icon: SiCss3, color: "#1572B6" },
      ],
      image: "/jazzhunt-preview.jpg",
      demoUrl: "https://jazzhunt.ca",
      githubUrl: null,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onMouseDown={handleMouseDown}
            style={{
              rotate: rotation,
              cursor: isHovered
                ? isDragging.current
                  ? "grabbing"
                  : "grab"
                : "default",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Adam Khomsi"
              width={150}
              height={150}
              className="rounded-full shadow-lg pointer-events-none"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6"
          >
            Adam Khomsi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8"
          >
            Full Stack Engineer. Creator of Rehostly
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <TechCarousel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              href="https://github.com/mikadosham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-1 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve built, showcasing my
            expertise in modern web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="flex flex-col items-center mb-4 min-h-[100px] justify-center">
                    {project.title === "Rehostly" ? (
                      <div className="w-32 h-auto">
                        <Image
                          src="/rehostly-logo.png"
                          alt="Rehostly logo"
                          width={128}
                          height={60}
                          className="w-full h-auto object-contain dark:invert"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16">
                        <Image
                          src="/jazz-hunt-logo.png"
                          alt="JazzHunt logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain dark:invert"
                        />
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="text-xs flex items-center gap-1.5"
                        >
                          <tech.icon
                            className={`w-3 h-3 ${
                              tech.color === "#000000" ? "dark:invert" : ""
                            }`}
                            style={{ color: tech.color }}
                          />
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 justify-center mt-auto">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.githubUrl ? "flex-1" : "w-full"}
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
