"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  icon?: React.ReactNode;
  gradient?: string;
  highlights?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const projectIcons: {
  [key: string]: { icon: React.ReactNode; gradient: string };
} = {
  Rehostly: {
    icon: (
      <Image
        src="/rehostly-logo.ico"
        alt="Rehostly"
        className="w-8 h-8 dark:invert"
        width={32}
        height={32}
      />
    ),
    gradient: "from-blue-500 to-blue-600",
  },
  JazzHunt: {
    icon: (
      <Image
        src="/jazz-hunt-logo.png"
        alt="JazzHunt"
        className="w-8 h-8 dark:invert"
        width={32}
        height={32}
      />
    ),
    gradient: "from-purple-500 to-purple-600",
  },
  TruthPulse: {
    icon: (
      <Image
        src="/truth-logo.png"
        alt="TruthPulse"
        className="w-8 h-8"
        width={32}
        height={32}
      />
    ),
    gradient: "from-green-500 to-green-600",
  },
  DiffRead: {
    icon: (
      <Image
        src="/diff-read-logo.png"
        alt="DiffRead"
        className="w-8 h-8"
        width={32}
        height={32}
      />
    ),
    gradient: "from-orange-500 to-orange-600",
  },
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > currentProject ? 1 : -1);
    setCurrentProject(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const enhancedProjects = projects.map((project) => ({
    ...project,
    ...(projectIcons[project.name] || {
      icon: <div className="w-8 h-8 bg-slate-500 rounded-lg" />,
      gradient: "from-slate-500 to-slate-600",
    }),
  }));

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Main Project Display */}
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {enhancedProjects[currentProject].icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {enhancedProjects[currentProject].name}
                        </CardTitle>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {enhancedProjects[currentProject].demoUrl && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={enhancedProjects[currentProject].demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {enhancedProjects[currentProject].githubUrl && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={enhancedProjects[currentProject].githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Source Code</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                    {enhancedProjects[currentProject].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {enhancedProjects[currentProject].tech.map(
                        (tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Badge variant="outline" className="text-sm">
                              {tech}
                            </Badge>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="ml-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="mr-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2">
          {enhancedProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${
                index === currentProject
                  ? "bg-blue-500 scale-125"
                  : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
              }
            `}
            />
          ))}
        </div>

        {/* Quick Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {enhancedProjects.map((project, index) => (
            <motion.button
              key={project.name}
              onClick={() => goToProject(index)}
              className={`
              p-4 rounded-lg border transition-all duration-200 text-left
              ${
                index === currentProject
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                  : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              }
            `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-2">
                {project.icon}
              </div>
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                {project.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {project.tech.slice(0, 2).join(", ")}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
