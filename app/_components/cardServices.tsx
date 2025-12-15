import React from 'react';
import { Activity, LucideIcon } from 'lucide-react'; // آیکون نمونه، می‌تونی تغییرش بدی

interface CardProps {
  title: string;
  subtitle: string;
  bgHover?: string; // hover background color
  iconBg?: string; // icon background
  iconColor?: string; // icon color
  iconSize?: number;
  icon?: LucideIcon; // آیکون
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  bgHover,
  iconBg = 'bg-emerald-300/30',
  iconColor = 'white',
  iconSize = 24,
  icon: Icon = Activity,
}) => {
  return (
    <div className={`basis-0 bg-slate-900 hover:${bgHover} transition-colors duration-300 grow min-h-px min-w-px relative rounded-xl shrink-0`}>
      <div className="flex flex-col items-end w-full">
        <div className="flex flex-col gap-3 items-end px-4 py-6 w-full">
          {/* آیکون */}
          <div className="relative inline-grid w-11 h-11">
            <div className="absolute inset-0 bg-[#1b2545] rounded-lg" />
            <div className={`absolute inset-0 flex justify-center items-center rounded-md ${iconBg}`}>
              <Icon size={iconSize} color={iconColor} />
            </div>
          </div>

          {/* متن‌ها */}
          <p className="font-bold text-right text-white text-lg">{title}</p>
          <p className="text-right text-white text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
