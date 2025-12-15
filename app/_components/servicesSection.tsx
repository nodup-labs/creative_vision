import LucidGlassChip from "./LucilGlass";
import Card from "./cardServices";
import { servicesData } from "@/lib/servicesData";

export default function ServicesSection() {
  return (
    <>
      <div id="services" className="flex flex-col items-center justify-center ">
        <LucidGlassChip size="lg" label="  خدمات ما   " />
        <h2 className="text-white text-4xl py-4">راهکارهای جامع برای موفقیت</h2>
        <p className="text-gray-500 py-2">
          تیم ما با بهره‌گیری از جدیدترین متدها، کسب‌وکار شما را به سطح بعدی
          می‌برد
        </p>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-4 pt-8">
        {servicesData.map((service) => (
          <div key={service.id}>
            <Card
              title={service.title}
              subtitle={service.subtitle}
              icon={service.icon}
              iconBg={service.iconBg}
              bgHover={service.bgHover}
              iconColor={service.iconColor}
            />
          </div>
        ))}
      </div>
    </>
  );
}
