import Link from "next/link";
import BlogCard from "../_components/BlogCard";
import { blogArticles } from "../../lib/blogData";

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 pt-48 pb-40" dir="rtl">
      <div className="flex flex-col gap-6 mb-10 text-white">
        <span className="text-sm text-[#b3b3b3]">مجله خلاقیت و کسب‌وکار</span>
        <h1 className="text-3xl font-semibold">آخرین مقالات و رویدادها</h1>
        <p className="text-sm text-[#b3b3b3] max-w-2xl leading-6">
          داستان‌ها، آموزش‌ها و خبرهای کوتاه برای رشد کسب‌وکار دیجیتال شما. هر
          هفته با مطالب تازه در کنار شما هستیم.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogArticles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="block h-full">
            <BlogCard
              image={article.image}
              tag={article.tag}
              title={article.title}
              description={article.description}
              date={article.date}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
