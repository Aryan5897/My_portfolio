"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SkillsSectionProps {
  skills: Record<string, readonly string[]>;
  blurFadeDelay: number;
  initialVisibleCount?: number;
}

export function SkillsSection({
  skills,
  blurFadeDelay,
  initialVisibleCount = 3,
}: SkillsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const entries = Object.entries(skills);
  const visibleEntries = isExpanded
    ? entries
    : entries.slice(0, initialVisibleCount);
  const hasMore = entries.length > initialVisibleCount;

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={blurFadeDelay}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-col gap-4">
        {visibleEntries.map(([category, categorySkills], categoryIndex) => (
          <BlurFade
            key={category}
            delay={blurFadeDelay + 0.1 + categoryIndex * 0.1}
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1">
                {categorySkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
      {hasMore && (
        <BlurFade delay={blurFadeDelay + 0.2}>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="size-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="size-4" />
                  View All Skills ({entries.length - initialVisibleCount} more
                  categories)
                </>
              )}
            </button>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
