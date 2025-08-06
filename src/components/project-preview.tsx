"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Zap, Monitor, Smartphone, Globe } from "lucide-react";

interface ProjectPreviewProps {
  title: string;
  image: string;
  features: string[];
}

export default function ProjectPreview({
  title,
  image,
  features,
}: ProjectPreviewProps) {
  if (title === "Rehostly") {
    return (
      <div className="relative h-full p-4">
        {/* Main Screenshot with Browser Frame */}
        <div className="relative h-full">
          <div className="absolute inset-0 bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-700 flex items-center px-3 z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-600 rounded px-3 py-1 text-xs text-slate-300">
                  rehostly.com
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="absolute top-8 left-0 right-0 bottom-0">
              <Image
                src={image}
                alt={`${title} Dashboard`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs bg-white/95 text-slate-800 font-medium"
                >
                  {feature}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Device Indicators */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-8 h-8 bg-slate-700/80 rounded-lg flex items-center justify-center">
            <Monitor className="w-4 h-4 text-slate-300" />
          </div>
          <div className="w-8 h-8 bg-slate-700/80 rounded-lg flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        {/* Live Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-500 text-white text-xs">
            <Zap className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
      </div>
    );
  }

  // Default preview for other projects
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-slate-500 dark:text-slate-400">
        <div className="w-16 h-16 bg-slate-300 dark:bg-slate-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <Globe className="w-8 h-8" />
        </div>
        <p className="text-sm">Project Preview</p>
        <p className="text-xs mt-1">Website Application</p>
      </div>
    </div>
  );
}
