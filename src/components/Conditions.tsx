import { Brain, Activity, Zap, Heart, Shield, Waves, Network, Bone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const conditions = [
  { icon: Brain,    name: 'بیماری‌های مرگ مغزی',   desc: 'درمان آسیب‌های مغزی و اختلالات آگاهی با تحریک نقاط عصبی',         color: 'from-violet-500 to-purple-600' },
  { icon: Activity, name: 'بیماری‌های Vegetative', desc: 'بهبود عملکرد سیستم عصبی خودکار و vegetative',                    color: 'from-sky-500 to-blue-600' },
  { icon: Shield,   name: 'ام‌اس (MS)',             desc: 'کنترل پیشرفت بیماری و کاهش علائم با تنظیم سیستم ایمنی',         color: 'from-cyan-500 to-teal-500' },
  { icon: Zap,      name: 'گیلن‌باره (GBS)',        desc: 'تسریع ترمیم اعصاب محیطی و بهبود قدرت عضلانی',                   color: 'from-teal-500 to-emerald-500' },
  { icon: Heart,    name: 'بیماری‌های خودایمنی',   desc: 'تنظیم سیستم ایمنی و کاهش التهاب مزمن',                           color: 'from-rose-500 to-pink-500' },
  { icon: Network,  name: 'نوروپاتی (Neuropathy)',  desc: 'درمان آسیب اعصاب محیطی و رفع سوزن‌سوزن شدن',                    color: 'from-amber-500 to-orange-500' },
  { icon: Bone,     name: 'درد مزمن و مفصلی',      desc: 'درمان دردهای مزمن، آرتروز و کمردرد با طب سوزنی',                 color: 'from-emerald-500 to-cyan-600' },
  { icon: Waves,    name: 'سکته مغزی',              desc: 'بازتوانی عصبی و بهبود عملکرد بعد از سکته',                        color: 'from-blue-500 to-indigo-600' },
];

export default function Conditions() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="conditions" className="py-24 relative overflow-hidden" style={{ background: '#070e20' }}>

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
            <span className="section-label tag-dark mb-4">
              بیماری‌های درمان‌شدنی
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-3">
              بیماری‌های <span className="gradient-text">قابل درمان</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              بیماری‌هایی که با رویکرد ترکیبی طب سوزنی، لیزر درمانی و اکوپانکچر قابل درمان و کنترل هستند
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
                  className="group relative p-5 rounded-2xl border border-white/6 bg-white/3 hover:bg-white/7 transition-all duration-350 overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Gradient top edge */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-350 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-white text-sm mb-1.5 leading-snug">{c.name}</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-slate-400 text-sm">برای مشاوره درباره بیماری خود با ما تماس بگیرید</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-7 py-3 rounded-xl font-bold text-sm relative z-10"
            >
              مشاوره رایگان
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom edge accent ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
    </section>
  );
}
