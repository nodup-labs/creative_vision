import React from "react";
import { ArrowLeft } from "lucide-react";

export default function BlogCard({
  image,
  tag,
  title,
  description,
  date,
}: {
  image: string;
  tag: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div
      className="
        group relative flex flex-col items-start gap-3 rounded-lg
        border border-[#0f172a]
        transition-all duration-300
        hover:bg-[#0f172a] hover:border-transparent
        overflow-hidden
      "
      dir="rtl"
    >
      {/* Image */}
      <div className="w-full aspect-[400/211] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-start gap-3 p-3 w-full">
        {/* Tag */}
        <span className="px-2 py-1 text-[12px] rounded-md bg-[#0f172a] text-white group-hover:bg-[#1b2545] transition">
          {tag}
        </span>

        {/* Title */}
        <h3 className="text-[14px] font-medium text-white text-right w-full">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-[#b3b3b3] text-right leading-5 w-full">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between w-full mt-2 flex-row-reverse">
          <button
            className="
              flex items-center justify-center w-8 h-8 rounded-full
              bg-[#1b2545] group-hover:bg-[#24306a]
              transition
            "
          >
            <ArrowLeft size={16} className="text-white" />
          </button>

          <span className="text-[12px] text-white flex items-center gap-1">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
