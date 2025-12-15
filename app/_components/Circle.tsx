"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RotatingCircleProps {
  rotationSpeed?: number;
  buttonImages: string[]; // مسیر PNG یا SVG دکمه‌ها
  centerImage?: string;   // مسیر PNG یا SVG وسط
  size?: number;          // اندازه کل کامپوننت (px)
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({
  rotationSpeed = 5,
  buttonImages,
  centerImage,
  size = 468,
}) => {
  const [rotation, setRotation] = useState(0);

  const middleCircleRadius = size * 0.36; // شعاع دایره دکمه‌ها
  const outerCircleRadius = size * 0.5;   // شعاع دایره تزئینی

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.005 * rotationSpeed) % (2 * Math.PI));
    }, 16);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  // محاسبه موقعیت دکمه‌ها
  const buttonPositions = buttonImages.map((_, i) => {
    const angle = rotation + (i * (2 * Math.PI)) / buttonImages.length;
    return {
      x: Math.cos(angle) * middleCircleRadius,
      y: Math.sin(angle) * middleCircleRadius,
    };
  });

  // موقعیت عناصر تزئینی (مثلا دایره کوچک)
  const decorativePositions = buttonImages.map((_, i) => {
    const angle = -rotation * 0.8 + (i * (2 * Math.PI)) / buttonImages.length;
    return {
      x: Math.cos(angle) * outerCircleRadius,
      y: Math.sin(angle) * outerCircleRadius,
    };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background Circle */}
      <div 
        className="absolute rounded-full border-2 border-purple-300 opacity-50"
        style={{ width: size * 0.72, height: size * 0.72 }}
      />
      
      {/* Outer Decorative Circle */}
      <div 
        className="absolute rounded-full border-1 border-purple-200 opacity-30"
        style={{ width: size, height: size }}
      />

      {/* Center Image */}
      {centerImage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] z-10 flex items-center justify-center">
          <img src={centerImage} alt="center" className="w-full h-full object-contain" />
        </div>
      )}

      {/* Rotating Buttons */}
      {buttonImages.map((img, i) => (
        <motion.div
          key={i}
          className="absolute w-[55px] h-[55px] rounded-full overflow-hidden shadow-lg z-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            left: `calc(50% + ${buttonPositions[i].x}px - 27.5px)`,
            top: `calc(50% + ${buttonPositions[i].y}px - 27.5px)`,
          }}
        >
          <img src={img} alt={`button-${i}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Decorative Circles */}
      {decorativePositions.map((pos, i) => (
        <motion.div
          key={`decor-${i}`}
          className="absolute w-[20px] h-[20px] rounded-full bg-purple-500 opacity-50 shadow-md z-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            left: `calc(50% + ${pos.x}px - 10px)`,
            top: `calc(50% + ${pos.y}px - 10px)`,
          }}
        />
      ))}
    </div>
  );
};

export default RotatingCircle;
