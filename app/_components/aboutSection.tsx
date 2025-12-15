"use client";

import RotatingCircle from "./Circle";

export default function AboutSection() {
  return (
    <div>
      <div id="about" dir="rtl" className="grid grid-cols-2 pt-16 grid-rows-1 gap-4">
        <div>
          <div className="flex flex-col align-middle  justify-center gap-4 py-24 px-6 md:px-12 lg:px-16 xl:px-20">
            <h2 className="text-4xl text-right text-white">درباره ما</h2>
            <p className="text-gray-500 py-2">خانه خلاق تولید کسب‌وکارهای نوآورانه</p>
            <p className="text-white py-2 text-base/8 ">
              ما یک تیم متخصص و حرفه‌ای هستیم که با بهره‌گیری از جدیدترین تکنولوژی‌ها و متدهای روز دنیا، ایده‌های شما را به کسب‌وکارهای موفق و پرسود تبدیل می‌کنیم. با بیش از یک دهه تجربه در حوزه راه‌اندازی و توسعه کسب‌وکار، ما همراه شما در مسیر موفقیت هستیم. تیم ما متشکل از متخصصان برتر در زمینه‌های مختلف از جمله توسعه نرم‌افزار، بازاریابی دیجیتال، مدیریت پروژه و مشاوره کسب‌وکار است.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <RotatingCircle
            rotationSpeed={1}
            size={468}
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
