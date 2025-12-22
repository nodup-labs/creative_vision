"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipData {
  cx: number;
  cy: number;
  label: string;
  description: string;
  color: string;
}

interface SVGTooltipProps {
  tooltips: TooltipData[];
  svgPath: string;
  tooltipClassName?: string;
  scale?: number; // 1 = 100%, 1.5 = 150%
}

const SVGTooltip: React.FC<SVGTooltipProps> = ({
  tooltips,
  svgPath,
  tooltipClassName = "",
  scale = 1,
}) => {
  const [activeTooltip, setActiveTooltip] = useState<number>(0);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTooltip((prev) => {
        if (prev === tooltips.length - 1) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tooltips.length]);

  // detect small screens (mobile) and disable tooltip display
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const updatePosition = () => {
        const tooltip = tooltips[activeTooltip];
        const container = containerRef.current;
        if (!container) return;

        // پیدا کردن SVG image درون container
        const svgImg = container.querySelector("img");
        if (!svgImg) return;

        const rect = svgImg.getBoundingClientRect();

        // محاسبه موقعیت نسبی SVG
        const svgLeft = rect.left;
        const svgTop = rect.top;
        const svgWidth = rect.width;
        const svgHeight = rect.height;

        // موقعیت دایره در pixels نسبت به SVG
        const circleX = (tooltip.cx / 884) * svgWidth;
        const circleY = (tooltip.cy / 472) * svgHeight;

        // موقعیت دایره در صفحه (viewport relative)
        const x = svgLeft + circleX;
        const y = svgTop + circleY;

        setTooltipPosition({
          x: x,
          y: y,
        });
      };

      updatePosition();

      // update position on scroll, resize, and scale change
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [activeTooltip, tooltips, scale]);

  const handleMouseMove = () => {
    // توضیح: این تابع برای مطابقت با SVG onMouseMove استفاده می‌شود
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full z-40 flex justify-center"
    >
      {/* SVG Container */}
      <div
        className="relative"
        style={{ width: `${100 * scale}%`, maxWidth: "100%" }}
      >
        <img src={svgPath} alt="Creative Vision" className="w-full h-auto" />

        {/* Interactive Circles */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 884 472"
          preserveAspectRatio="xMidYMid meet"
          style={{ pointerEvents: "none" }}
          onMouseMove={handleMouseMove}
        >
          {tooltips.map((tooltip, index) => (
            <circle
              key={index}
              cx={tooltip.cx}
              cy={tooltip.cy}
              r="35"
              fill="transparent"
              style={{
                pointerEvents: "none",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Tooltip (hidden on small screens) */}
      {!isMobile && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTooltip}
            className={`fixed bg-slate-900 border border-slate-700 rounded-lg p-4 z-50 w-64 shadow-2xl ${tooltipClassName}`}
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 120}px`,
              transform: "translate(-100%, -50%)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-right flex-1">
                <h3 className="font-semibold text-white text-lg">
                  {tooltips[activeTooltip].label}
                </h3>
                <p className="text-gray-300 text-base mt-1">
                  {tooltips[activeTooltip].description}
                </p>
              </div>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: tooltips[activeTooltip].color }}
              ></div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -110%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SVGTooltip;
