"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LucidGlassChip from "./LucilGlass";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      {/* LucidGlassChip */}
      <div className="w-full flex justify-center">
        <LucidGlassChip size="lg" label="گروه کسب و کار نگاه خلاق" />
      </div>

      {/* متن اصلی با افکت گرادیان */}
      <motion.h1
        className="font-bold text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#706d6d] via-[#e2e2e2] to-[#706d6d] [text-shadow:rgba(0,0,0,0.19)_2px_5px_3px]"
        style={{ backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px]">
          کارخانه تولید کسب‌وکار
        </span>
      </motion.h1>

      {/* متن توضیحی */}
      <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-2xl">
        با استفاده از جدیدترین تکنولوژی‌ها و تیم متخصص، ایده‌های شما را به
        کسب‌وکارهای پرسود و موفق تبدیل می‌کنیم
      </p>

      {/* دکمه‌ها */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full max-w-md sm:max-w-lg md:max-w-xl justify-center">
        <Button variant="default" size="lg" className="w-full sm:flex-1">
          شروع همکاری
        </Button>
        <Button variant="secondary" size="lg" className="w-full sm:flex-1">
          کسب و کار های ما
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
