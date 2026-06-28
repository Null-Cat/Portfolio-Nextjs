"use client";
import { RefObject, useEffect, useRef } from "react";

/**
 * Drives an `active` flag for animation loops based on whether the observed
 * element is on screen AND the tab is visible. `onChange` is invoked only when
 * the active state actually flips, and the callback is read through a ref so
 * this never re-runs the caller's setup effect or forces re-renders.
 */
export function useVisibilityActive(
  targetRef: RefObject<HTMLElement | null>,
  onChange: (active: boolean) => void,
  options: IntersectionObserverInit = { rootMargin: "200px" }
) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let isIntersecting = false;
    let lastActive: boolean | null = null;

    const update = () => {
      const active = isIntersecting && document.visibilityState !== "hidden";
      if (active !== lastActive) {
        lastActive = active;
        onChangeRef.current(active);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      isIntersecting = entries.some((entry) => entry.isIntersecting);
      update();
    }, options);
    observer.observe(el);

    const handleVisibility = () => update();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      onChangeRef.current(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef]);
}
