"use client";
import React from "react";

export type ChipSize = "sm" | "md" | "lg";

export interface LucidGlassChipProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  size?: ChipSize;
  selected?: boolean;
  title?: string; // accessibility / tooltip
  className?: string;
}

const sizeMap: Record<ChipSize, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1.5 text-sm gap-2",
  lg: "px-4 py-4 text-2xl gap-2.5",
};

export default function LucidGlassChip({
  label,
  icon,
  onClick,
  onRemove,
  removable = false,
  size = "md",
  selected = false,
  title,
  className = "",
}: LucidGlassChipProps) {
  const base = `inline-flex  items-center rounded-full backdrop-blur-md border border-white/20 shadow-sm select-none leading-none ${sizeMap[size]} `;

  // glass color when selected vs default
  const variant = selected
    ? "bg-white/14 text-white/100 border-white/30"
    : "bg-white/8 text-white/90";

  return (
    <div
      role={onClick ? "button" : undefined}
      aria-pressed={selected}
      onClick={onClick}
      title={title ?? label}
      className={`${base} ${variant} ${className} bg-red-500 transition-all duration-150 ease-in-out hover:scale-[1.02] active:scale-95 hover:bg-white/12 cursor-${onClick ? "pointer" : "default"}`}
      style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* subtle sheen: an absolutely positioned pseudo-like element is not available here, so provide a small inline shimmer */}
      {icon ? (
        <span className="flex items-center justify-center shrink-0">{icon}</span>
      ) : null}

      <span className="truncate">{label}</span>

      {removable && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-2 -mr-1 inline-flex items-center justify-center rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

/*
Usage examples (Next.js + Tailwind + TypeScript):

import LucidGlassChip from './LucidGlassChip';
import { Sun, Moon } from 'lucide-react'; // optional

<LucidGlassChip label="Design" icon={<Sun size={14} />} onClick={() => console.log('clicked')} removable onRemove={() => console.log('remove')} />

<LucidGlassChip label="Selected" selected size="lg" />

Notes:
- This component depends on Tailwind CSS with support for backdrop-filter utilities (backdrop-blur).
- If you want stronger glass effect, tweak the inline style blur value or Tailwind's opacity classes.
- To customize colors (e.g. dark theme), pass `className` and override bg/text/border classes.
*/
