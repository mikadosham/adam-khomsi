"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Database, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  logo?: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const companyLogos: { [key: string]: React.ReactNode } = {
  "Shopify Developer Support": (
    <Image
      src="/shopify-logo.png"
      alt="Shopify"
      width={32}
      height={32}
      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain"
    />
  ),
  "Rehostly.ca": (
    <Image
      src="/rehostly-logo.ico"
      alt="Rehostly"
      width={32}
      height={32}
      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain dark:invert"
    />
  ),
  JazzHunt: (
    <Image
      src="/jazz-hunt-logo.png"
      alt="JazzHunt"
      width={32}
      height={32}
      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain dark:invert"
    />
  ),
  "Great Places Housing Group": (
    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600" />
  ),
  "Wireless CCTV": <Video className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600" />,
};

export default function Timeline({ experiences }: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-300 dark:to-slate-600"></div>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const isExpanded = expandedItems.has(index);

          return (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-3 sm:gap-6"
            >
              {/* Timeline dot with logo */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full border-2 sm:border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center"
                  style={{
                    boxShadow: isExpanded
                      ? "0 0 0 3px rgba(59, 130, 246, 0.5)"
                      : undefined,
                  }}
                >
                  {companyLogos[exp.company] || (
                    <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-slate-600" />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">
                          {exp.location}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-4">
                          <Separator className="mb-4" />
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
