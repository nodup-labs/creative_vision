"use client";

import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  title: string;
  image?: string;
  url?: string;
  startDate: string;
  description: string;
}

export function BusinessCard({
  title,
  image,
  url,
  startDate,
  description,
}: BusinessCardProps) {
  return (
    <div
      dir="rtl"
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
    >
      {/* تصویر */}
      <div className="relative w-full h-64 bg-gray-700">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center">
          <span className="text-white text-lg font-semibold text-center px-4">
            {title}
          </span>
        </div>
      </div>

      {/* محتوای کارت */}
      <div className="p-6">
        {/* تاریخ شروع */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-1">تاریخ شروع</p>
          <p className="text-white font-semibold">{startDate}</p>
        </div>

        {/* توضیحات */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-1">توضیحات</p>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* دکمه بیشتر بدانید */}
        {url ? (
          <Button asChild className="w-full">
            <a href={url} target="_blank" rel="noopener noreferrer">
              بیشتر بدانید
            </a>
          </Button>
        ) : (
          <Button className="w-full">بیشتر بدانید</Button>
        )}
      </div>
    </div>
  );
}
