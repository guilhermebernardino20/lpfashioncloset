"use client";

import { createContext, useContext, useState } from "react";
import { MotionConfig } from "framer-motion";
import type { CatalogFilter } from "@/data/fashion-closet";

type Ctx = { filter: CatalogFilter; setFilter: (f: CatalogFilter) => void };
const CatalogContext = createContext<Ctx>({ filter: "all", setFilter: () => {} });

// Estado de filtro compartilhado entre o Brand Matrix e a seleção de peças.
// MotionConfig respeita prefers-reduced-motion em todas as animações de transform.
export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<CatalogFilter>("all");
  return (
    <MotionConfig reducedMotion="user">
      <CatalogContext.Provider value={{ filter, setFilter }}>{children}</CatalogContext.Provider>
    </MotionConfig>
  );
}

export const useCatalog = () => useContext(CatalogContext);
