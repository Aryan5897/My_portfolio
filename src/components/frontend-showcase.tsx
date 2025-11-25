"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FrontendProject {
  name: string;
  url: string;
}

interface FrontendShowcaseProps {
  projects: readonly FrontendProject[];
  className?: string;
}

export function FrontendShowcase({ projects, className }: FrontendShowcaseProps) {
  const imageVariants = {
    whileHover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className={cn("relative flex items-center justify-center p-8 h-full", className)}>
      <div className="flex flex-row items-center gap-4">
        {projects.map((project, idx) => (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={imageVariants}
            key={"project-" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl p-2 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden cursor-pointer shadow-lg"
          >
            <div className="relative rounded-lg h-32 w-48 md:h-48 md:w-72 overflow-hidden">
              <iframe
                src={project.url}
                title={project.name}
                className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[0.25] origin-top-left"
                style={{
                  width: "400%",
                  height: "400%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
                  {project.name}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" /> */}
    </div>
  );
}
