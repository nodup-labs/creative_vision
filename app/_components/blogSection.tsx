import React from "react";
import BlogCard from "./BlogCard";
import { blogArticles } from "@/lib/blogData";

export default function BlogSection() {
  return (
    <div className="w-full py-16">
      {/* Header with Glass Tag */}
      <div className="flex flex-col items-center gap-4 mb-12">
        {/* Glass Tag */}
        <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 w-fit">
          <span className="text-sm font-medium text-white">مجله و آموزش</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center">
          آخرین مقالات و آموزش‌ها
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-[#b3b3b3] text-center max-w-2xl">
          مطالب مفید و به‌روز برای توسعه کسب‌وکار دیجیتال شما
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
