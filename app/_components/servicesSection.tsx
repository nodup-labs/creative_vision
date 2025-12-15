import LucidGlassChip from "./LucilGlass";
import Card from "./cardServices";
import { servicesData } from "@/lib/servicesData";

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <LucidGlassChip size="lg" label="خدمات ما" />
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl py-4">
            راهکارهای جامع برای موفقیت
          </h2>
          <p className="text-gray-400 py-2 text-sm sm:text-base">
            تیم ما با بهره‌گیری از جدیدترین متدها، کسب‌وکار شما را به سطح بعدی
            می‌برد
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {servicesData.map((service) => (
            <div key={service.id} className="h-full">
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
      </section>
    </>
  );
}
