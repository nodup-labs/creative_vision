"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { blogArticles } from "@/lib/blogData";

export default function BlogSection() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      {/* Header with Glass Tag */}
      <div className="flex flex-col items-center gap-4 mb-12">
        {/* Glass Tag */}
        <div className="px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 w-fit">
          <span className="text-xs sm:text-sm font-medium text-white">
            مجله و آموزش
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          آخرین مقالات و آموزش‌ها
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#b3b3b3] text-center max-w-xs sm:max-w-md md:max-w-2xl">
          مطالب مفید و به‌روز برای توسعه کسب‌وکار دیجیتال شما
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogArticles.map((article) => (
          <BlogCard
            key={article.id}
            image={article.image}
            tag={article.tag}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
}
