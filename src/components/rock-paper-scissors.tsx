"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface RockPaperScissorsProps {
  className?: string;
}

export function RockPaperScissors({ className }: RockPaperScissorsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvasRef.current.width = width * dpr;
    canvasRef.current.height = height * dpr;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;
    if (riveRef.current) {
      riveRef.current.resizeDrawingSurfaceToCanvas();
    }
  }, []);

  useEffect(() => {
    let rive: any = null;
    let resizeObserver: ResizeObserver | null = null;
    let isMounted = true;

    const loadRive = async () => {
      const { Rive, Layout, Fit, Alignment } = await import("@rive-app/canvas");

      if (!canvasRef.current || !isMounted) return;

      resizeCanvas();

      rive = new Rive({
        src: "/rock-paper-scissors.riv",
        canvas: canvasRef.current,
        autoplay: true,
        stateMachines: "State Machine 1",
        layout: new Layout({
          fit: Fit.Contain,
          alignment: Alignment.Center,
        }),
        onLoad: () => {
          if (isMounted && rive) {
            rive.resizeDrawingSurfaceToCanvas();
          }
        },
      });

      riveRef.current = rive;

      if (containerRef.current) {
        resizeObserver = new ResizeObserver(() => {
          resizeCanvas();
        });
        resizeObserver.observe(containerRef.current);
      }
    };

    loadRive();

    return () => {
      isMounted = false;
      resizeObserver?.disconnect();
      if (riveRef.current) {
        riveRef.current.cleanup();
        riveRef.current = null;
      }
    };
  }, [resizeCanvas]);

  return (
    <div className={cn("w-full max-w-[800px]", className)}>
      <div
        ref={containerRef}
        className="w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: "16/9", minHeight: "200px" }}
      >
        <canvas ref={canvasRef} className="cursor-pointer" />
      </div>
    </div>
  );
}
