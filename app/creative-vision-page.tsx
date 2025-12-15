import SVGTooltip from '@/components/ui/svg-tooltip';

export default function CreativeVisionPage() {
  const tooltipData = [
    {
      cx: 368.106,
      cy: 74.245,
      label: '🔍 جستجو',
      description: 'جستجوی دقیق برای یافتن بهترین راه‌حل‌ها',
      color: '#68AEFF',
    },
    {
      cx: 368.106,
      cy: 393.245,
      label: '📊 تحلیل',
      description: 'تجزیه و تحلیل داده‌ها و نتایج برای پیشرفت',
      color: '#EC4899',
    },
    {
      cx: 570.106,
      cy: 388.245,
      label: '⚡ بهینه‌سازی',
      description: 'بهتر کردن و بهینه‌سازی فرآیندها برای کارایی بیشتر',
      color: '#10B981',
    },
    {
      cx: 570.106,
      cy: 77.2448,
      label: '💡 نور',
      description: 'روشن کردن راه‌ها و ایجاد الهام برای اهداف جدید',
      color: '#F97316',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Creative Vision
        </h1>
        <SVGTooltip
          tooltips={tooltipData}
          svgPath="/sss.svg"
        />
      </div>
    </div>
  );
}
