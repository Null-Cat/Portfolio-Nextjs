"use client";
import { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "fade-content",
        inView && "fade-content--in",
        blur && "fade-content--blur",
        className
      )}
      style={
        {
          "--fade-from": initialOpacity,
          "--fade-duration": `${duration}ms`,
          "--fade-easing": easing,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FadeContent;
