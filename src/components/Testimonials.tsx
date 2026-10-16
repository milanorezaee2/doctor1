import { Quote, Star, ThumbsUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    name: 'مریم احمدی',
    condition: 'بیماری ام‌اس',
    text: 'بعد از سال‌ها دست و پنجه نرم کردن با ام‌اس، با درمان طب سوزنی و لیزر توسط دکتر هشترودی، علائمم به شدت کاهش پیدا کرد. واقعاً زندگی‌ام تغییر کرد.',
    rating: 5,
    avatar: 'م',
    color: 'from-cyan-600 to-teal-500',
  },
  {
    name: 'علی رضایی',
    condition: 'گیلن‌باره',
    text: 'دکتر هشترودی با روش ترکیبی اکوپانکچر و لیزر، به من کمک کرد تا دوباره بتوانم راه بروم. تجربه‌ای فوق‌العاده و غیرقابل فراموش بود.',
    rating: 5,
    avatar: 'ع',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    name: 'زهرا کریمی',
    condition: 'نوروپاتی محیطی',
    text: 'سوزن‌سوزن شدن دست و پاها آزارم می‌داد. بعد از چند جلسه درمان، علائمم کاملاً برطرف شد. ممنونم از دکتر هشترودی.',
    rating: 5,
    avatar: 'ز',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'حسین موسوی',
    condition: 'درد مزمن کمر',
    text: 'سال‌ها با کمردرد زندگی می‌کردم. طب سوزنی نتیجه‌ای داد که هیچ دارویی نتوانسته بود. واقعاً حرفه‌ای و متفاوت.',
    rating: 5,
    avatar: 'ح',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'فاطمه نوری',
    condition: 'بیماری خودایمنی',
    text: 'تنظیم سیستم ایمنی‌ام با طب سوزنی باعث شد داروهای شیمیایی‌ام را کاهش دهم. دکتر هشترودی واقعاً متخصص هستند.',
    rating: 5,
    avatar: 'ف',
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'محمد تقی‌پور',
    condition: 'سکته مغزی',
    text: 'بعد از سکته مغزی، بازتوانی با لیزر و طب سوزنی سرعت بهبودی‌ام را بالا برد. از دکتر هشترودی بسیار سپاسگزارم.',
    rating: 5,
    avatar: 'م',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Testimonials() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="section-label tag-teal mb-4">
              تجربه بیماران
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-3">
              <span className="gradient-text">داستان</span> بهبودی
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              تجربه واقعی بیمارانی که با درمان‌های تخصصی دکتر هشترودی به بهبودی رسیدند
            </p>
            <div className="section-divider w-24 mx-auto mt-5" />
          </div>

          {/* ── Cards ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Subtle corner accent */}
                <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${t.color} opacity-6 rounded-br-full group-hover:opacity-10 transition-opacity duration-400`} />

                {/* Top row: stars + quote icon */}
                <div className="flex items-center justify-between mb-4 relative">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-100" />
                </div>

                {/* Text */}
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5 relative">{t.text}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 relative">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm leading-tight">{t.name}</p>
                      <p className="text-[11px] text-cyan-600 font-medium">{t.condition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-teal-500">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold">تأیید شده</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
