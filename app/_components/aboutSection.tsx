"use client";

import RotatingCircle from "./Circle";

export default function AboutSection() {
  return (
    <div id="about" dir="rtl" className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* بخش متن */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-right text-white">
            درباره ما
          </h2>
          <p className="text-gray-500 py-2 text-sm sm:text-base">
            خانه خلاق تولید کسب‌وکارهای نوآورانه
          </p>
          <p className="text-white py-2 text-sm sm:text-base md:text-base/7 leading-relaxed">
            ما یک تیم متخصص و حرفه‌ای هستیم که با بهره‌گیری از جدیدترین تکنولوژی‌ها و متدهای روز دنیا،
            ایده‌های شما را به کسب‌وکارهای موفق و پرسود تبدیل می‌کنیم. با بیش از یک دهه تجربه در حوزه
            راه‌اندازی و توسعه کسب‌وکار، ما همراه شما در مسیر موفقیت هستیم. تیم ما متشکل از متخصصان برتر
            در زمینه‌های مختلف از جمله توسعه نرم‌افزار، بازاریابی دیجیتال، مدیریت پروژه و مشاوره کسب‌وکار است.
          </p>
        </div>

        {/* بخش RotatingCircle */}
        <div className="flex items-center justify-center">
          <RotatingCircle
            rotationSpeed={1}
            size={320} // اندازه کوچکتر برای موبایل
            centerImage="/images/logo-simbol.svg"
            buttonImages={[
              "/images/button1.png",
              "/images/button1.png",
              "/images/button1.png",
              "/images/button1.png",
              "/images/button1.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
