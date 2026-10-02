"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const variants = ["A", "B", "C"];
const names = ["Split composition", "Image spread", "Shopping rail"];
const descriptions = [
  "Copy left, dominant room image right, small detail beneath. Visual furniture-type tiles.",
  "Headline first, wide image spread below. Compact furniture-type list alongside one image.",
  "Dominant room image left, copy and shopping action in a right rail. Compact horizontal furniture-type tiles.",
];

export function PrototypeSwitcher({ current }: { current: string }) {
  const router = useRouter();
  const index = variants.indexOf(current);
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      const target = event.target;
      if (target instanceof HTMLElement && (target.closest("input, textarea, select, button, a, [contenteditable=true]") || target.isContentEditable)) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      router.replace(`/?variant=${variants[(index + (event.key === "ArrowRight" ? 1 : 2)) % 3]}`, { scroll: false });
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [router, index]);
  if (process.env.NODE_ENV === "production") return null;
  function cycle(step: number) {
    router.replace(`/?variant=${variants[(index + step + 3) % 3]}`, { scroll: false });
  }
  return (
    <aside className="prototype-switcher" aria-label="Homepage prototype controls">
      <details>
        <summary>Compare compositions</summary>
        <div className="prototype-notes">
          <strong>Throwaway homepage prototype</strong>
          <p>{descriptions[index]}</p>
          <p>Current state: variant {current}; desktop layout adapts below 900px and 600px. Shopping links open stubs. No cart persistence or orders. Prices remain with the catalog decision.</p>
          <p>Use the arrows to compare. On mobile, inspect the early shopping action, unequal stacked images, and furniture-type entry points.</p>
        </div>
      </details>
      <div className="prototype-controls">
        <Button variant="ghost" size="icon-lg" aria-label="Previous composition" onClick={() => cycle(-1)}><ArrowLeft /></Button>
        <span aria-live="polite">{current} · {names[index]}</span>
        <Button variant="ghost" size="icon-lg" aria-label="Next composition" onClick={() => cycle(1)}><ArrowRight /></Button>
      </div>
    </aside>
  );
}
