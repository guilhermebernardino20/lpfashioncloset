"use client";

import { MotionConfig } from "framer-motion";

// Respeita prefers-reduced-motion em todas as animações de transform.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
