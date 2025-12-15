"use client";

import { motion } from "framer-motion";
import React from "react";
import LucidGlassChip from "./LucilGlass";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 py-24 px-6 md:px-12 lg:px-16 xl:px-20">
      <div>
        <LucidGlassChip size="lg" label="گروه کسب و کار نگاه خلاق" />
      </div>
      <motion.p
        className="[text-shadow:rgba(0,0,0,0.19)_4px_11px_7px] font-bold bg-clip-text bg-gradient-to-r  from-[#706d6d] leading-[normal] not-italic relative size-full text-[86px] text-center to-[#706d6d] via-[#e2e2e2] via-[49.038%]"
        dir="auto"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}>
        کارخانه تولید کسب‌وکار
      </motion.p>

      <p className="text-lg text-white">
        با استفاده از جدیدترین تکنولوژی‌ها و تیم متخصص، ایده‌های شما را به
        کسب‌وکارهای پرسود و موفق تبدیل می‌کنیم
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:gap-4 pt-4 justify-center">
        <Button variant="default" size="lg" className="w-full">
          شروع همکاری
        </Button>
        <Button variant="secondary" size="lg" className="w-full">
          کسب و کار های ما
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
