import { useRef, useState } from 'react';
import {
  Calendar, Play, ShieldCheck, Star, Sparkles, ArrowLeft,
  Phone, Clock, MapPin, CheckCircle, X,
  Zap, Activity, Brain, Heart
} from 'lucide-react';

/* ─── Images ───────────────────────────────────────── */
const IMG_DOCTOR  = 'https://images.pexels.com/photos/8312839/pexels-photo-8312839.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200';
const IMG_ACUP    = 'https://images.pexels.com/photos/8313172/pexels-photo-8313172.jpeg?auto=compress&cs=tinysrgb&w=500&h=500';
const IMG_LASER   = 'https://images.pexels.com/photos/5069508/pexels-photo-5069508.jpeg?auto=compress&cs=tinysrgb&w=500&h=500';

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: '+۲۰',   label: 'سال تجربه' },
  { value: '+۵۰۰۰', label: 'بیمار' },
  { value: '+۳۰',   label: 'مقاله' },
  { value: '۹۸٪',   label: 'رضایت' },
];

const treatments = [
  { icon: Brain,    label: 'ام‌اس و گیلن‌باره',     color: '#06b6d4' },
  { icon: Zap,      label: 'لیزر درمانی',            color: '#0d9488' },
  { icon: Activity, label: 'اکوپانکچر',              color: '#0891b2' },
  { icon: Heart,    label: 'بیماری‌های خودایمنی',    color: '#14b8a6' },
];

const ticker = ['طب سوزنی', 'لیزر درمانی', 'اکوپانکچر', 'بیماری‌های عصبی', 'ام‌اس', 'گیلن‌باره', 'خودایمنی', 'درمان نوین'];

/* ─── Inline SVG medical icons ────────────────────── */
function CrossIcon({ size = 20, opacity = 0.18 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <rect x="9" y="2" width="6" height="20" rx="2" fill="#06b6d4" />
      <rect x="2" y="9" width="20" height="6" rx="2" fill="#06b6d4" />
    </svg>
  );
}
function DnaIcon({ size = 24, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <path d="M3 3c5 2 13 2 18 0" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 21c5-2 13-2 18 0" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 3c0 8 14 8 14 18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 3c0 8-14 8-14 18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="#22d3ee" />
      <circle cx="12" cy="12" r="1" fill="#22d3ee" />
      <circle cx="12" cy="16" r="1" fill="#22d3ee" />
    </svg>
  );
}
function PulseIcon({ size = 60, opacity = 0.12 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none" style={{ opacity }}>
      <polyline
        points="0,30 20,30 30,5 40,55 50,30 70,30 80,15 90,45 100,30 120,30"
        stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Ticker ────────────────────────────────────────── */
function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center gap-8 hero-ticker" style={{ width: 'max-content' }}>
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-2.5 text-white/35 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            <CrossIcon size={10} opacity={0.5} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main ─────────────────────────────────────────── */
export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#02060f]">

        {/* ══ BG: gradient mesh + floating medical icons ══ */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(8,145,178,0.18)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(13,148,136,0.12)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(2,6,15,0.5)_0%,transparent_70%)]" />

          {/* Dot grid */}
          <div className="absolute inset-0 hero-dots opacity-25" />

          {/* Floating medical decorative elements */}
          <div className="absolute top-[12%] left-[4%] animate-floatY" style={{ animationDelay: '0s' }}>
            <CrossIcon size={28} opacity={0.12} />
          </div>
          <div className="absolute top-[22%] left-[8%] animate-floatY2" style={{ animationDelay: '0.5s' }}>
            <DnaIcon size={36} opacity={0.1} />
          </div>
          <div className="absolute top-[55%] left-[3%]">
            <PulseIcon size={80} opacity={0.08} />
          </div>
          <div className="absolute top-[40%] left-[5%] animate-floatY" style={{ animationDelay: '1s' }}>
            <CrossIcon size={16} opacity={0.15} />
          </div>
          <div className="absolute top-[70%] left-[7%] animate-floatY2" style={{ animationDelay: '1.5s' }}>
            <DnaIcon size={24} opacity={0.08} />
          </div>

          {/* Thin accent lines */}
          <div className="absolute top-[30%] left-0 w-[35%] h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
          <div className="absolute bottom-[25%] left-0 w-[50%] h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />

          {/* Scanlines */}
          <div className="absolute inset-0 hero-scanlines opacity-[0.02]" />
        </div>

        {/* ══ MAIN GRID ══ */}
        <div className="relative z-10 flex-1 flex flex-col">

          {/* ── top ID bar ── */}
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 animate-textReveal"
            style={{ animationDelay: '0.05s' }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex w-2 h-2 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-teal-400/70 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-[10px] text-cyan-300/60 font-bold tracking-[0.28em] uppercase">
                Specialist · Acupuncture · Laser Therapy · Acu-Puncture
              </span>
            </div>
          </div>

          {/* ── two-column body ── */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
            <div className="w-full grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-10">

              {/* ════════════════ LEFT COLUMN ════════════════ */}
              <div className="flex flex-col">

                {/* Specialty accent */}
                <div className="flex items-center gap-3 mb-5 animate-textReveal" style={{ animationDelay: '0.1s' }}>
                  <div className="w-5 h-[2px] bg-cyan-400 flex-shrink-0" />
                  <span className="text-[11px] text-cyan-400/80 font-bold tracking-[0.28em] uppercase">
                    متخصص طب سوزنی، لیزر درمانی و اکوپانکچر
                  </span>
                </div>

                {/* ─── Doctor name — ONE line ─── */}
                <div className="animate-textReveal mb-2" style={{ animationDelay: '0.18s' }}>
                  <h1 className="flex items-baseline gap-3 flex-wrap leading-none">
                    <span className="text-white/55 text-2xl sm:text-3xl font-semibold tracking-wide">دکتر</span>
                    <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">محمد رضا</span>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight hero-name-gradient">هشترودی</span>
                  </h1>
                </div>

                {/* Underline accent */}
                <div className="animate-textReveal mb-7" style={{ animationDelay: '0.24s' }}>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-[2px] w-16 bg-gradient-to-l from-cyan-400 to-transparent" />
                    <div className="h-[2px] w-6 bg-teal-500/40" />
                    <div className="h-[2px] w-2 bg-teal-500/20" />
                  </div>
                </div>

                {/* ─── Large tagline ─── */}
                <div className="animate-textReveal mb-6" style={{ animationDelay: '0.32s' }}>
                  <p className="text-[clamp(1.9rem,4.5vw,3.4rem)] font-black text-white leading-[1.1] tracking-tight">
                    درمان نوین
                    <br />
                    <span className="hero-name-gradient">بیماری‌های عصبی</span>
                    <br />
                    و خودایمنی
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8 animate-textReveal" style={{ animationDelay: '0.42s' }}>
                  با بیش از ۲۰ سال تجربه تخصصی، پیشگام درمان بیماری‌هایی مثل ام‌اس، گیلن‌باره
                  و اختلالات خودایمنی از طریق ترکیب علم روز پزشکی و طب سنتی.
                </p>

                {/* Treatment pills */}
                <div className="flex flex-wrap gap-2.5 mb-8 animate-textReveal" style={{ animationDelay: '0.5s' }}>
                  {treatments.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: t.color }} />
                        <span className="text-[11px] text-white/60 font-semibold">{t.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 mb-8 animate-textReveal" style={{ animationDelay: '0.58s' }}>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative flex items-center gap-2.5 text-white font-bold text-sm px-6 py-3.5 rounded-xl overflow-hidden transition-all duration-300
                      bg-gradient-to-l from-cyan-500 to-teal-500
                      shadow-[0_6px_24px_rgba(6,182,212,0.3)]
                      hover:shadow-[0_10px_36px_rgba(6,182,212,0.45)]
                      hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    رزرو نوبت آنلاین
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  <button
                    onClick={() => setVideoOpen(true)}
                    className="group flex items-center gap-2.5 text-white/65 hover:text-white text-sm font-semibold transition-colors duration-200"
                  >
                    <span className="relative flex w-10 h-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md group-hover:border-cyan-400/40 group-hover:bg-cyan-500/[0.08] transition-all duration-300">
                      <Play className="w-3.5 h-3.5 fill-white text-white ml-[-1px]" />
                      <span className="absolute inset-0 rounded-full border border-white/15 animate-ping opacity-30" />
                    </span>
                    معرفی کلینیک
                  </button>
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2 animate-textReveal" style={{ animationDelay: '0.66s' }}>
                  {[
                    { icon: ShieldCheck, text: 'بورد تخصصی طب سوزنی' },
                    { icon: Star,        text: 'فلوشیپ چین' },
                    { icon: Sparkles,    text: 'تکنولوژی روز دنیا' },
                  ].map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        <Icon className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="text-[10px] text-white/45 font-semibold">{b.text}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* ════════════════ RIGHT COLUMN ════════════════ */}
              <div className="relative hidden lg:block animate-scaleIn" style={{ animationDelay: '0.3s', opacity: 0 }}>

                {/* ── Main doctor photo ── */}
                <div className="relative rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ height: '620px' }}>
                  <img
                    src={IMG_DOCTOR}
                    alt="دکتر محمد رضا هشترودی"
                    className="w-full h-full object-cover object-top hero-bg-zoom"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060f]/80 via-[#02060f]/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#02060f]/40 via-transparent to-transparent" />

                  {/* ── Medical pulse line SVG overlay ── */}
                  <div className="absolute bottom-20 left-0 right-0 px-6 opacity-30">
                    <PulseIcon size={280} opacity={1} />
                  </div>

                  {/* ── Corner medical cross decorations ── */}
                  <div className="absolute top-4 left-4">
                    <CrossIcon size={22} opacity={0.3} />
                  </div>
                  <div className="absolute top-8 right-6">
                    <CrossIcon size={14} opacity={0.2} />
                  </div>

                  {/* ── Bottom name plate on photo ── */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="bg-[#02060f]/70 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-black text-base leading-tight">دکتر محمد رضا هشترودی</p>
                          <p className="text-cyan-400 text-[11px] font-semibold mt-0.5">متخصص طب سوزنی و لیزر درمانی</p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-300 text-[10px] font-bold">در حال پذیرش</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Floating card — Acupuncture ── */}
                <div className="absolute -right-5 top-[10%] w-44 animate-floatY" style={{ animationDelay: '0s' }}>
                  <div className="bg-[#02060f]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <img src={IMG_ACUP} alt="طب سوزنی" className="w-full h-24 object-cover opacity-80" />
                    <div className="px-3 py-2.5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-white font-bold text-[11px]">طب سوزنی</span>
                      </div>
                      <p className="text-white/40 text-[10px] leading-snug">درمان نقاط حیاتی بدن</p>
                    </div>
                  </div>
                </div>

                {/* ── Floating card — Laser ── */}
                <div className="absolute -left-6 top-[30%] w-40 animate-floatY2" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-[#02060f]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <img src={IMG_LASER} alt="لیزر درمانی" className="w-full h-20 object-cover opacity-80" />
                    <div className="px-3 py-2.5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-white font-bold text-[11px]">لیزر درمانی</span>
                      </div>
                      <p className="text-white/40 text-[10px] leading-snug">فناوری پیشرفته روز</p>
                    </div>
                  </div>
                </div>

                {/* ── Floating stat pill — experience ── */}
                <div className="absolute -left-4 bottom-[28%] animate-floatY" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center gap-2.5 bg-[#02060f]/85 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white leading-none">+۲۰</p>
                      <p className="text-[10px] text-white/40 font-semibold mt-0.5">سال تجربه</p>
                    </div>
                  </div>
                </div>

                {/* ── Floating DNA decoration ── */}
                <div className="absolute -right-3 bottom-[38%] animate-floatY2" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-[#02060f]/60 backdrop-blur-md border border-cyan-500/15 rounded-xl p-3">
                    <DnaIcon size={32} opacity={0.7} />
                  </div>
                </div>

                {/* ── Patients pill top-left ── */}
                <div className="absolute -right-2 top-[52%] animate-floatY" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2 bg-[#02060f]/80 backdrop-blur-xl border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-black text-white leading-none">+۵۰۰۰</p>
                      <p className="text-[9px] text-white/40 font-semibold">بیمار درمان‌شده</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Scroll cue ── */}
          <div className="hidden lg:flex flex-col items-center gap-1.5 pb-6 text-white/20 animate-textReveal" style={{ animationDelay: '1.1s' }}>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold">اسکرول کنید</span>
            <ArrowLeft className="w-3 h-3 rotate-[-90deg] animate-bounce" />
          </div>
        </div>

        {/* ══ STATS STRIP ══ */}
        <div className="relative z-10 border-t border-white/[0.06] bg-[#03090f]/90 backdrop-blur-sm animate-textReveal" style={{ animationDelay: '0.85s' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center py-5 gap-0.5 relative
                    ${i > 0 ? 'border-r border-white/[0.06]' : ''}
                    ${i >= 2 ? 'border-t border-white/[0.06] sm:border-t-0' : ''}
                  `}
                >
                  <span className="text-2xl sm:text-3xl font-black leading-none hero-stat-number">{s.value}</span>
                  <span className="text-white/50 text-[10px] font-bold tracking-wide mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ TICKER STRIP ══ */}
        <div className="relative z-10 border-t border-white/[0.04] py-3 overflow-hidden bg-[#020810] animate-fadeIn" style={{ animationDelay: '1.3s', opacity: 0 }}>
          <Ticker />
        </div>

      </section>

      {/* ══ VIDEO MODAL ══ */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-white/10"
              onClick={() => setVideoOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="معرفی کلینیک دکتر هشترودی"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-[#02060f] px-6 py-4">
              <p className="text-white font-bold text-sm">معرفی کلینیک دکتر هشترودی</p>
              <p className="text-white/40 text-xs mt-1">متخصص طب سوزنی، لیزر درمانی و اکوپانکچر</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
