import { useEffect, useState } from 'react';
import { Menu, X, Activity, ChevronDown } from 'lucide-react';

const navLinks = [
  { id: 'home',         label: 'خانه' },
  { id: 'about',        label: 'درباره پزشک' },
  { id: 'services',     label: 'خدمات' },
  { id: 'conditions',   label: 'بیماری‌ها' },
  { id: 'videos',       label: 'ویدیوها' },
  { id: 'stats',        label: 'دستاوردها' },
  { id: 'testimonials', label: 'نظرات' },
  { id: 'contact',      label: 'تماس' },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [open, setOpen]                   = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const current = navLinks
        .map((l) => l.id)
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const { top, bottom } = el.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.08)] py-2 border-b border-slate-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden ${
                scrolled
                  ? 'bg-gradient-to-br from-cyan-600 to-teal-500 shadow-md'
                  : 'bg-white/15 border border-white/25 backdrop-blur-md'
              }`}>
                <Activity className="w-5 h-5 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="leading-tight text-right">
                <span className={`block font-bold text-sm transition-colors duration-500 ${
                  scrolled ? 'text-slate-800' : 'text-white'
                }`}>
                  دکتر محمد رضا هشترودی
                </span>
                <span className={`block text-[11px] font-medium transition-colors duration-500 ${
                  scrolled ? 'text-cyan-600' : 'text-cyan-300'
                }`}>
                  متخصص طب سوزنی و لیزر درمانی
                </span>
              </div>
            </button>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? 'text-cyan-700 bg-cyan-50'
                          : 'text-white bg-white/14'
                        : scrolled
                          ? 'text-slate-600 hover:text-cyan-700 hover:bg-slate-50'
                          : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-1 right-1/2 translate-x-1/2 w-4 h-0.5 rounded-full transition-all duration-300 ${
                          scrolled ? 'bg-cyan-600' : 'bg-cyan-400'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── CTA + mobile toggle ── */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="hidden lg:flex items-center gap-2 btn-primary px-5 py-2.5 rounded-xl text-sm font-bold relative z-10"
              >
                نوبت‌دهی آنلاین
              </button>
              <button
                className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                  scrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/12'
                }`}
                onClick={() => setOpen(!open)}
                aria-label="منو"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(80vw,300px)] bg-white shadow-2xl flex flex-col transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center">
                <Activity className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-bold text-slate-800 text-sm">دکتر هشترودی</span>
            </div>
            <button
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-right px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-gradient-to-l from-cyan-600 to-teal-500 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-cyan-700'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Drawer footer CTA */}
          <div className="px-4 py-5 border-t border-slate-100">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full btn-primary py-3 rounded-xl text-sm font-bold"
            >
              رزرو نوبت آنلاین
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
