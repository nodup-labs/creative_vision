import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogArticles } from "../../../lib/blogData";

type BlogPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { id } = await params;
  const article = blogArticles.find((item) => String(item.id) === id);

  if (!article) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 pt-28 pb-40" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-[#0f172a] text-white text-sm">
            {article.tag}
          </span>
          <span className="text-xs text-[#b3b3b3]">{article.date}</span>
        </div>

        <Link
          href="/news"
          className="flex items-center gap-2 text-sm text-white hover:text-[#8ba8ff] transition"
        >
          بازگشت به مجله
          <ArrowLeft size={16} />
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-white mb-6">{article.title}</h1>

      <div className="rounded-xl overflow-hidden border border-[#0f172a] mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover"
        />
      </div>

      <div className="prose text-white prose-invert prose-headings:text-white prose-p:text-[#d9d9d9] max-w-none leading-7 text-[15px]">
        <p>
          در این مقاله به بررسی مسیر رشد کسب‌وکار دیجیتال می‌پردازیم و نکات عملی
          و قابل اجرا را مرور می‌کنیم. از ایجاد استراتژی محتوا گرفته تا بهینه‌سازی
          قیف فروش، هر بخش با مثال‌های واقعی توضیح داده شده است.
        </p>
        <p>
          با دنبال کردن این راهنما می‌توانید برنامه‌ای مشخص برای سه ماه آینده‌ی
          خود تدوین کنید و معیارهای موفقیت را واضح‌تر ببینید. پیشنهاد می‌کنیم هر
          مرحله را به‌صورت هفتگی بررسی و پیشرفت را ثبت کنید تا بتوانید سریع‌تر
          تصمیم‌های اصلاحی بگیرید.
        </p>
        <p>
          اگر پرسشی دارید یا می‌خواهید تجربه‌ی خود را به اشتراک بگذارید، در بخش
          تماس با ما پیام بگذارید. تیم ما تلاش می‌کند در کوتاه‌ترین زمان پاسخ‌گو
          باشد و مسیر یادگیری شما را هموارتر کند.
        </p>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({ id: String(article.id) }));
}
