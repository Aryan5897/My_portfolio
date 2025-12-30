"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";
import { ProjectDetailModal } from "@/components/project-detail-modal";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon?: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  detailedDescription?: string;
  features?: readonly string[];
  techStack?: readonly {
    category: string;
    items: readonly string[];
  }[];
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  detailedDescription,
  features,
  techStack,
}: Props) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Only open the main link if the click wasn't on one of the project links in the footer
    if (link && !(e.target as Element).closest('a')) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="cursor-pointer"
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
          }
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        <div className={cn("block", className)}>
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
        </div>
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base cursor-pointer hover:underline">
              {title}
            </CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((projectLink, idx) => (
                <a
                  href={projectLink?.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {projectLink.icon}
                    {projectLink.type}
                  </Badge>
                </a>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
