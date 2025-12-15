"use client";

import SVGTooltip from "@/components/ui/svg-tooltip";

export default function HowToWork() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12">
      {/* عنوان */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          ما چطوری کار می‌کنیم؟
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          مسیر راه‌اندازی کسب‌وکار شما
        </p>
      </div>

      {/* SVGTooltip داخل wrapper امن */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
        <SVGTooltip
          tooltips={[
            {
              cx: 368.106,
              cy: 74.245,
              label: " جستجو",
              description: "جستجوی دقیق برای یافتن بهترین راه‌حل‌ها",
              color: "#68AEFF",
            },
            {
              cx: 368.106,
              cy: 393.245,
              label: " تحلیل",
              description: "تجزیه و تحلیل داده‌ها و نتایج برای پیشرفت",
              color: "#EC4899",
            },
            {
              cx: 570.106,
              cy: 388.245,
              label: " بهینه‌سازی",
              description: "بهتر کردن و بهینه‌سازی فرآیندها برای کارایی بیشتر",
              color: "#10B981",
            },
            {
              cx: 570.106,
              cy: 77.2448,
              label: " نور",
              description: "روشن کردن راه‌ها و ایجاد الهام برای اهداف جدید",
              color: "#F97316",
            },
          ]}
          svgPath="/sss.svg"
          scale={1} // اندازه پایه برای دسکتاپ
        />
      </div>
    </div>
  );
}
