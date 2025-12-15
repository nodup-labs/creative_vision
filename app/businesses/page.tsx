'use client';

import { BusinessCard } from '@/app/_components/businessCard';

interface Business {
  id: number;
  title: string;
  image: string;
  startDate: string;
  description: string;
}

const businessesData: Business[] = [
  {
    id: 1,
    title: 'طراحی تجاری',
    image: '/images/business-1.jpg',
    startDate: '1402/01/15',
    description: 'خدمات طراحی برند و هویت بصری برای کسب‌وکارهای کوچک و بزرگ',
  },
  {
    id: 2,
    title: 'توسعه وب',
    image: '/images/business-2.jpg',
    startDate: '1402/03/22',
    description: 'طراحی و توسعه وب‌سایت‌های مدرن و کاربرپسند با تکنولوژی‌های روز',
  },
  {
    id: 3,
    title: 'مارکتینگ دیجیتال',
    image: '/images/business-3.jpg',
    startDate: '1402/06/10',
    description: 'استراتژی‌های مارکتینگ دیجیتال برای افزایش دید رسانی و فروش آنلاین',
  },
  {
    id: 4,
    title: 'تولید محتوا',
    image: '/images/business-4.jpg',
    startDate: '1402/09/05',
    description: 'ایجاد محتوای خلاقانه و جذاب برای شبکه‌های اجتماعی و وب‌سایت',
  },
];

export default function BusinessesPage() {
  return (
    <div className="min-h-screen  pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* صفحه سر */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            کسب‌وکارهای ما
          </h1>
          <p className="text-xl text-gray-400">
            پروژه‌های کسب‌وکاری که با موفقیت اجرا شده‌اند
          </p>
        </div>

        {/* شبکه کسب‌وکارها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessesData.map((business) => (
            <BusinessCard
              key={business.id}
              title={business.title}
              image={business.image}
              startDate={business.startDate}
              description={business.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
