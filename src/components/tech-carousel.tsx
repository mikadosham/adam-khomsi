"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRubyonrails,
  SiGraphql,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiOpenai,
} from "react-icons/si";
import { Bot, Code2 } from "lucide-react";

export default function TechCarousel() {
  // Tech stack with react-icons (Simple Icons)
  const techStack = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#CC0000" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#181717" },
    { name: "Vercel", Icon: SiVercel, color: "#000000" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { name: "Cursor", Icon: Code2, color: "#007ACC" },
    { name: "Claude", Icon: Bot, color: "#8B5CF6" },
    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
  ];

  // Multiply the array for seamless infinite scroll (3x for smoother looping)
  const multipliedTech = [...techStack, ...techStack, ...techStack];

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollVelocity = useRef(0);
  const lastTime = useRef(Date.now());
  const lastX = useRef(0);
  const scrollDirection = useRef(-1); // -1 for left (default), 1 for right

  // Calculate the width of one complete set
  const itemWidth = 120; // 90px min-width + 30px gap (gap-8 = 2rem = 32px)
  const totalWidth = techStack.length * itemWidth;

  // Auto-scroll speed (pixels per second)
  const AUTO_SCROLL_SPEED = 45;

  // Start auto-scrolling animation
  useEffect(() => {
    let animationId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!isDragging.current) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp;
          const currentX = x.get();

          // Apply velocity for momentum after drag
          if (Math.abs(scrollVelocity.current) > 0.1) {
            const newX = currentX + scrollVelocity.current;
            x.set(newX);

            // Apply friction to velocity
            scrollVelocity.current *= 0.95;

            // Reset position for infinite loop
            if (newX < -totalWidth) {
              x.set(newX + totalWidth);
            } else if (newX > 0) {
              x.set(newX - totalWidth);
            }
          } else {
            // Auto-scroll when not dragging and no momentum
            const newX =
              currentX +
              (scrollDirection.current * AUTO_SCROLL_SPEED * delta) / 1000;
            x.set(newX);

            // Reset position for infinite loop
            if (scrollDirection.current < 0 && newX <= -totalWidth) {
              x.set(newX + totalWidth);
            } else if (scrollDirection.current > 0 && newX >= 0) {
              x.set(newX - totalWidth);
            }
          }
        }
        lastTimestamp = timestamp;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [x, totalWidth]);

  const handleDragStart = (_event: unknown, info: { point: { x: number } }) => {
    isDragging.current = true;
    startX.current = info.point.x;
    lastX.current = info.point.x;
    lastTime.current = Date.now();
    scrollVelocity.current = 0;
    setHoveredIndex(null); // Clear any hovered state when starting to drag
  };

  const handleDrag = (_event: unknown, info: { point: { x: number } }) => {
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTime.current;
    const xDelta = info.point.x - lastX.current;

    if (timeDelta > 0) {
      scrollVelocity.current = (xDelta / timeDelta) * 16; // Convert to pixels per frame
    }

    lastX.current = info.point.x;
    lastTime.current = currentTime;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    setHoveredIndex(null); // Ensure no icon remains expanded after drag ends

    // Determine scroll direction based on final velocity
    if (scrollVelocity.current > 0.5) {
      scrollDirection.current = 1; // Scroll right
    } else if (scrollVelocity.current < -0.5) {
      scrollDirection.current = -1; // Scroll left
    }

    // Normalize the position to keep it within bounds for smooth looping
    const currentX = x.get();
    if (currentX < -totalWidth * 2) {
      x.set(currentX + totalWidth);
    } else if (currentX > -totalWidth) {
      x.set(currentX - totalWidth);
    }
  };

  return (
    <div className="w-full overflow-hidden py-12 select-none">
      <div className="relative">
        {/* Draggable container */}
        <motion.div
          ref={containerRef}
          className="flex gap-8 items-center cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: totalWidth }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {multipliedTech.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center gap-3 min-w-[90px] flex-shrink-0"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                y: hoveredIndex === index ? -8 : 0,
              }}
              onHoverStart={() => !isDragging.current && setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
                <tech.Icon
                  className={`w-10 h-10 ${
                    tech.color === "#000000" || tech.color === "#181717"
                      ? "dark:invert"
                      : ""
                  }`}
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 text-center pointer-events-none">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
