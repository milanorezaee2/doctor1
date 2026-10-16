import { Users, Calendar, Award, Heart, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  {
    icon: Users,
    target: 5000,
    suffix: '+',
    label: 'بیمار درمان‌شده',
    sublabel: 'از سراسر کشور',
    color: 'from-cyan-500 to-teal-500',
    bg: 'bg-cyan-50',
    textAccent: 'text-cyan-600',
  },
  {
    icon: Calendar,
    target: 20,
    suffix: '+',
    label: 'سال تجربه',
    sublabel: 'تجربه بالینی تخصصی',
    color: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
    textAccent: 'text-teal-600',
  },
  {
    icon: Award,
    target: 30,
    suffix: '+',
    label: 'مقاله علمی',
    sublabel: 'در ژورنال‌های بین‌المللی',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50',
    textAccent: 'text-sky-600',
  },
  {
    icon: Heart,
    target: 98,
    suffix: '%',
    label: 'رضایت بیماران',
    sublabel: 'بر اساس نظرسنجی‌ها',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    textAccent: 'text-rose-500',
  },
];

function StatCard({ icon: Icon, target, suffix, label, sublabel, color, bg, textAccent, start }: {
  icon: typeof Users;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  bg: string;
  textAccent: string;
  start: boolean;
}) {
  const count = useCountUp(target, 2000, start);

  return (
    <div className="relative group p-7 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover overflow-hidden">
      {/* Subtle bg tint on hover */}
      <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-40 transition-opacity duration-400`} />

      {/* Top-right accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-5 rounded-bl-full`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-13 h-13 w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-sm`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Number */}
        <p className="text-4xl lg:text-5xl font-black gradient-text counter mb-1 leading-none">
          {count.toLocaleString('fa-IR')}{suffix}
        </p>

        {/* Label */}
        <p className="font-bold text-slate-800 text-sm mb-0.5">{label}</p>
        <p className="text-[11px] text-slate-400 font-medium">{sublabel}</p>

        {/* Trend indicator */}
        <div className={`inline-flex items-center gap-1 mt-3 ${textAccent}`}>
          <TrendingUp className="w-3 h-3" />
          <span className="text-[10px] font-bold">در حال رشد</span>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="stats" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-50" />

      {/* Accent blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-100/50 to-teal-100/50 rounded-full blur-[100px] -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="section-label tag-cyan mb-4">
              آمار و دستاوردها
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-3">
              <span className="gradient-text">دستاوردهای</span> بالینی
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
              ارقامی که نشان‌دهنده تعهد ما به سلامت و بهبودی بیماران است
            </p>
            <div className="section-divider w-24 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} start={active} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
