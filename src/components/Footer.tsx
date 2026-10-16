import { Activity, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'خانه',              id: 'home' },
  { label: 'درباره پزشک',      id: 'about' },
  { label: 'خدمات',            id: 'services' },
  { label: 'بیماری‌های درمان‌شدنی', id: 'conditions' },
  { label: 'ویدیوها',          id: 'videos' },
];

const serviceLinks = ['طب سوزنی', 'لیزر درمانی', 'اکوپانکچر', 'درمان ام‌اس', 'درمان گیلن‌باره'];

const socials = [
  { icon: Instagram, href: '#',            hoverColor: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500', label: 'اینستاگرام' },
  { icon: Youtube,   href: 'https://www.youtube.com/@dr.hashtroodi', hoverColor: 'hover:bg-red-600', label: 'یوتیوب' },
  { icon: Linkedin,  href: '#',            hoverColor: 'hover:bg-blue-600', label: 'لینکدین' },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative z-10 overflow-hidden" style={{ background: '#040a16' }}>

      {/* ── Subtle top border ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* ── Background ── */}
      <div className="absolute inset-0 medical-pattern opacity-8" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Top grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">دکتر محمد رضا هشترودی</p>
                <p className="text-cyan-400 text-[11px] font-medium mt-0.5">متخصص طب سوزنی و لیزر درمانی</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              درمان نوین بیماری‌های عصبی و خودایمنی با ترکیب طب سنتی و تکنولوژی روز پزشکی.
              سلامت شما، تخصص ماست.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center transition-all duration-300 ${s.hoverColor} hover:border-transparent hover:scale-105`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">دسترسی سریع</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 text-xs hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">خدمات</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-slate-400 text-xs hover:text-cyan-400 transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">تماس</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs leading-relaxed">تهران، خیابان ولیعصر، کلینیک تخصصی طب سوزنی</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span className="text-slate-400 text-xs">۰۲۱-۲۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span className="text-slate-400 text-xs">info@dr-hashtroodi.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500">
            © ۱۴۰۴ — تمامی حقوق برای دکتر محمد رضا هشترودی محفوظ است
          </p>
          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            طراحی با
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            برای سلامتی شما
          </p>
        </div>

      </div>
    </footer>
  );
}
