import { GraduationCap, Award, Stethoscope, BookOpen, ArrowLeft, Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

/* ─── Images ──────────────────────────────────── */
const IMG_MAIN  = 'https://images.pexels.com/photos/8313210/pexels-photo-8313210.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
const IMG_LAB   = 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';
const IMG_CONF  = 'https://images.pexels.com/photos/6010927/pexels-photo-6010927.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';

/* ─── Timeline data ───────────────────────────── */
const timeline = [
  { year: '۱۳۸۰', event: 'فارغ‌التحصیلی از دانشکده پزشکی دانشگاه تهران' },
  { year: '۱۳۸۵', event: 'دریافت فلوشیپ تخصصی طب سوزنی — پکن، چین' },
  { year: '۱۳۹۰', event: 'راه‌اندازی کلینیک تخصصی طب سوزنی و لیزر درمانی' },
  { year: '۱۳۹۵', event: 'دریافت بورد بین‌المللی لیزر درمانی پزشکی' },
  { year: '۱۴۰۰', event: 'معرفی تکنیک اکوپانکچر در ایران — ۳۰+ مقاله ISI' },
];

/* ─── Credential cards ────────────────────────── */
const creds = [
  {
    icon: GraduationCap,
    label: 'دکترای پزشکی',
    sub:   'دانشگاه تهران',
    num:   '۱',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    icon: Award,
    label: 'فلوشیپ طب سوزنی',
    sub:   'پکن، چین',
    num:   '۲',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Stethoscope,
    label: 'بورد لیزر درمانی',
    sub:   'بین‌المللی',
    num:   '۳',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: BookOpen,
    label: '+۳۰ مقاله ISI',
    sub:   'ژورنال‌های معتبر',
    num:   '۴',
    color: 'from-sky-500 to-blue-600',
  },
];

export default function About() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-white">

      {/* ══ TOP dark band ══ */}
      <div className="bg-[#04090f] relative overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0 hero-dots opacity-20 pointer-events-none" />
        {/* glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>
            <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">

              {/* ── Left: section label + headline ── */}
              <div className="lg:col-span-5 flex flex-col justify-center">

                {/* Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[2px] bg-cyan-400" />
                  <span className="text-[10px] text-cyan-400 font-bold tracking-[0.3em] uppercase">
                    About The Doctor
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.0] tracking-tight mb-6">
                  پیشگام
                  <br />
                  <span className="hero-name-gradient">درمان نوین</span>
                  <br />
                  ایران
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                  دکتر محمد رضا هشترودی با بیش از دو دهه تجربه بالینی، ترکیب بی‌نظیری از دانش مدرن
                  و حکمت طب سنتی را به ارمغان آورده است.
                </p>

                {/* Quote block */}
                <div className="relative pl-5 border-r-2 border-cyan-500/40">
                  <Quote className="absolute -top-1 right-[-13px] w-5 h-5 text-cyan-500 bg-[#04090f] p-0.5" />
                  <p className="text-white/55 text-sm italic leading-relaxed">
                    «هدف من ترکیب خرد طب سنتی با دستاوردهای پزشکی نوین برای درمان ریشه‌ای بیماری‌های صعب‌العلاج است.»
                  </p>
                  <p className="text-cyan-400 text-xs font-bold mt-2">— دکتر محمد رضا هشترودی</p>
                </div>

              </div>

              {/* ── Right: image stacked composition ── */}
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-12 grid-rows-2 gap-3" style={{ height: '420px' }}>

                  {/* Main tall image */}
                  <div className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden ring-1 ring-white/8 shadow-2xl">
                    <img src={IMG_MAIN} alt="دکتر هشترودی" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04090f]/60 via-transparent to-transparent" />
                    {/* Name strip at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                      <p className="text-white font-black text-sm">Dr. M.R. Hashtroodi</p>
                      <p className="text-cyan-400 text-[10px] font-semibold">Acupuncture & Laser Specialist</p>
                    </div>
                  </div>

                  {/* Top-right small */}
                  <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden ring-1 ring-white/8 shadow-xl">
                    <img src={IMG_LAB} alt="کلینیک" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-transparent" />
                    <span className="absolute bottom-2 right-2.5 text-white/70 text-[9px] font-bold uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">کلینیک</span>
                  </div>

                  {/* Bottom-right small */}
                  <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden ring-1 ring-white/8 shadow-xl">
                    <img src={IMG_CONF} alt="تحقیقات" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-transparent" />
                    <span className="absolute bottom-2 right-2.5 text-white/70 text-[9px] font-bold uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">پژوهش</span>
                  </div>

                  {/* Floating stat overlay */}
                  <div className="absolute -bottom-4 -left-4 z-10">
                    <div className="flex items-center gap-3 bg-[#04090f]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3.5 shadow-2xl ring-1 ring-cyan-500/10">
                      <div className="text-right">
                        <p className="text-3xl font-black text-white leading-none hero-stat-number">+۵۰۰۰</p>
                        <p className="text-white/40 text-[10px] font-semibold mt-0.5">بیمار درمان‌شده</p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-right">
                        <p className="text-3xl font-black text-white leading-none hero-stat-number">+۲۰</p>
                        <p className="text-white/40 text-[10px] font-semibold mt-0.5">سال تجربه</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM light band ══ */}
      <div className="bg-[#f7f9fc] relative overflow-hidden">
        {/* subtle top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute inset-0 dots-pattern opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">

            {/* ── Timeline ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-[2px] bg-cyan-500" />
                <span className="text-[10px] text-cyan-600 font-bold tracking-[0.28em] uppercase">مسیر حرفه‌ای</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10 leading-tight">
                سه دهه<br />
                <span className="gradient-text">دانش و تجربه</span>
              </h3>

              {/* Timeline items */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute right-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent" />

                <div className="space-y-8">
                  {timeline.map((t, i) => (
                    <div key={i} className="flex items-start gap-5">
                      {/* Year badge */}
                      <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md ring-4 ring-white
                          ${i === timeline.length - 1
                            ? 'bg-gradient-to-br from-cyan-500 to-teal-500'
                            : 'bg-white border-2 border-slate-200'
                          }`}
                        >
                          {i === timeline.length - 1
                            ? <span className="w-2.5 h-2.5 rounded-full bg-white" />
                            : <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400" />
                          }
                        </div>
                      </div>
                      {/* Content */}
                      <div className={`flex-1 pb-1 ${i === timeline.length - 1 ? '' : ''}`}>
                        <span className={`text-[10px] font-black tracking-widest mb-1 block
                          ${i === timeline.length - 1 ? 'text-cyan-500' : 'text-slate-400'}`}
                        >
                          {t.year}
                        </span>
                        <p className={`text-sm leading-relaxed font-medium
                          ${i === timeline.length - 1 ? 'text-slate-800' : 'text-slate-500'}`}
                        >
                          {t.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Credentials + CTA ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-[2px] bg-teal-500" />
                <span className="text-[10px] text-teal-600 font-bold tracking-[0.28em] uppercase">مدارک و تخصص‌ها</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10 leading-tight">
                تخصص در<br />
                <span className="gradient-text">چهار حوزه اصلی</span>
              </h3>

              {/* 2×2 credential grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {creds.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={i}
                      className="group relative p-5 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden card-hover cursor-default"
                    >
                      {/* Corner number */}
                      <span className="absolute top-3 left-3 text-[10px] font-black text-slate-200">
                        {c.num}
                      </span>
                      {/* Top accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <p className="font-black text-slate-800 text-sm leading-tight mb-1">{c.label}</p>
                      <p className="text-[11px] text-slate-400 font-medium">{c.sub}</p>
                    </div>
                  );
                })}
              </div>

              {/* Bio paragraph */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8 border-r-2 border-slate-200 pr-4">
                دکتر هشترودی با ترکیب روش‌های نوین لیزر درمانی و اکوپانکچر با دانش طب سنتی،
                رویکردی منحصر به فرد برای درمان بیماری‌هایی چون ام‌اس، گیلن‌باره و
                بیماری‌های خودایمنی ارائه می‌دهند.
              </p>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 text-sm font-bold text-white btn-primary px-6 py-3.5 rounded-xl relative z-10"
              >
                مشاوره رایگان رزرو کنید
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              </button>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
