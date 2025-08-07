"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, Database, Shield, Zap, Wrench, Settings } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

interface SkillTagsProps {
  skillData: { [key: string]: string[] };
}

const categoryIcons: {
  [key: string]: { icon: React.ReactNode; color: string };
} = {
  Frontend: { icon: <Code className="w-4 h-4" />, color: "bg-blue-500" },
  Backend: { icon: <Settings className="w-4 h-4" />, color: "bg-green-500" },
  Databases: { icon: <Database className="w-4 h-4" />, color: "bg-purple-500" },
  "Tools & Services": {
    icon: <Zap className="w-4 h-4" />,
    color: "bg-orange-500",
  },
  Shopify: { icon: <Shield className="w-4 h-4" />, color: "bg-green-600" },
};

export default function SkillTags({ skillData }: SkillTagsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = Object.entries(skillData).map(
    ([name, skills]) => ({
      name,
      skills,
      icon: categoryIcons[name]?.icon || <Wrench className="w-4 h-4" />,
      color: categoryIcons[name]?.color || "bg-slate-500",
    })
  );

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="text-xs"
          >
            All Skills
          </Button>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={
                selectedCategory === category.name ? "default" : "outline"
              }
              size="sm"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              className="text-xs flex items-center gap-1"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "all"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {category.name}
                  </h4>
                  <Separator className="flex-1" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="secondary"
                            className={`
                            w-full justify-center py-2 px-3 text-sm cursor-pointer
                            transition-all duration-200
                            ${
                              hoveredSkill === skill
                                ? "shadow-lg border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-950"
                                : "hover:shadow-md"
                            }
                          `}
                          >
                            {skill}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {skill} - Click to filter by {category.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}
