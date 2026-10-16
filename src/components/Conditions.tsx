import { Brain, Activity, Zap, Heart, Shield, Waves, Network, Bone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const conditions = [
  { icon: Brain,    name: 'آسیب‌های مغزی و اختلالات هوشیاری',   desc: 'این موارد به ارزیابی فوری و مراقبت بیمارستانی نیاز دارند؛ خدمات مکمل جایگزین اورژانس یا درمان استاندارد نیستند.',         color: 'from-violet-500 to-purple-600' },
  { icon: Activity, name: 'اختلالات عصبی پیچیده', desc: 'بررسی شرایط و هماهنگی مراقبت با متخصص مغز و اعصاب و تیم درمان.',                    color: 'from-sky-500 to-blue-600' },
  { icon: Shield,   name: 'ام‌اس (MS)',             desc: 'بررسی مراقبت‌های مکمل برای مدیریت علائم در کنار درمان استاندارد پزشک معالج.',         color: 'from-cyan-500 to-teal-500' },
  { icon: Zap,      name: 'گیلن‌باره (GBS)',        desc: 'برنامه بازتوانی و پیگیری باید با نظر متخصص مغز و اعصاب و تیم درمان انجام شود.',                   color: 'from-teal-500 to-emerald-500' },
  { icon: Heart,    name: 'بیماری‌های خودایمنی',   desc: 'هر روش مکمل باید با توجه به تشخیص و درمان اصلی فرد، با پزشک معالج هماهنگ شود.',                           color: 'from-rose-500 to-pink-500' },
  { icon: Network,  name: 'نوروپاتی (Neuropathy)',  desc: 'ارزیابی درد، بی‌حسی یا گزگز برای تعیین نیاز به بررسی تخصصی و انتخاب مراقبت مناسب.',                    color: 'from-amber-500 to-orange-500' },
  { icon: Bone,     name: 'درد مزمن و مفصلی',      desc: 'گفت‌وگو درباره علت درد و گزینه‌های مراقبتی، از جمله روش‌های مکمل مانند طب سوزنی.',                 color: 'from-emerald-500 to-cyan-600' },
  { icon: Waves,    name: 'سکته مغزی',              desc: 'بازتوانی پس از سکته باید بر اساس برنامه پزشک معالج و تیم توانبخشی باشد.',                        color: 'from-blue-500 to-indigo-600' },
];

export default function Conditions() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="conditions" className="py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>

      {/* ── Background ── */}
      <div className="absolute inset-0 medical-pattern opacity-15" />
      <div className="absolute top-0 -right-40  w-[600px] h-[600px] bg-cyan-500/8  rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-teal-500/8  rounded-full blur-[140px]" />

      {/* ── Top edge accent ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="section-label tag-cyan mb-4">
              حوزه‌های تخصصی
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-3">
              حوزه‌های <span className="gradient-text">ارزیابی و مراقبت</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
              در این بخش، زمینه‌هایی معرفی شده‌اند که می‌توان درباره مراقبت‌های مکمل آن‌ها مشورت گرفت. انتخاب روش به تشخیص پزشک و شرایط هر فرد بستگی دارد.
            </p>
            <div className="section-divider w-24 mx-auto mt-5" />
          </div>

          {/* ── Grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="group relative p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-all duration-350 overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Gradient top edge */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-350 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">{c.name}</h3>
                  <p className="text-[12px] text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            این اطلاعات جایگزین تشخیص یا درمان پزشک معالج نیست. در وضعیت حاد یا اورژانسی، فوراً از خدمات اورژانس کمک بگیرید.
          </p>

          {/* ── Bottom CTA ── */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-slate-600 text-sm">برای بررسی شرایط خود با کلینیک تماس بگیرید</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-7 py-3 rounded-xl font-bold text-sm relative z-10"
            >
              راه‌های ارتباطی
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom edge accent ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
    </section>
  );
}
