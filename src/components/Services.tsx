import { Syringe, Zap, Waves, HeartPulse, Brain, Shield, ArrowLeft } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Syringe,
    title: 'طب سوزنی',
    subtitle: 'Acupuncture',
    desc: 'به‌کارگیری سوزن‌های ظریف برای تحریک نقاط منتخب بدن؛ تناسب این روش پس از ارزیابی و گفت‌وگو با پزشک بررسی می‌شود.',
    image: 'https://images.pexels.com/photos/8312859/pexels-photo-8312859.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['ارزیابی اولیه', 'روش مکمل', 'برنامه فردی'],
    color: 'from-cyan-600 to-teal-500',
  },
  {
    icon: Zap,
    title: 'لیزر درمانی',
    subtitle: 'Laser Therapy',
    desc: 'به‌کارگیری لیزر کم‌توان در چارچوب برنامه مراقبتی و متناسب با شرایط هر فرد؛ پاسخ درمانی می‌تواند متفاوت باشد.',
    image: 'https://images.pexels.com/photos/5069508/pexels-photo-5069508.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['کاربرد موضعی', 'انتخاب موردی', 'پیگیری روند'],
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Waves,
    title: 'اکوپانکچر',
    subtitle: 'Acu-Puncture',
    desc: 'ترکیب امواج صوتی با طب سوزنی برای تحریک نقاط منتخب؛ انتخاب روش پس از بررسی شرایط مراجعه‌کننده انجام می‌شود.',
    image: 'https://images.pexels.com/photos/8313172/pexels-photo-8313172.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['روش مکمل', 'ارزیابی تناسب', 'توضیح پیش از شروع'],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'بیماری‌های عصبی',
    subtitle: 'Neurological',
    desc: 'ارزیابی و همراهی در مدیریت علائم عصبی، در کنار مراقبت پزشک معالج؛ این خدمات جایگزین درمان استاندارد نیستند.',
    image: 'https://images.pexels.com/photos/6010927/pexels-photo-6010927.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['ارزیابی علائم', 'هماهنگی با پزشک', 'پیگیری'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'بیماری‌های خودایمنی',
    subtitle: 'Autoimmune',
    desc: 'بررسی روش‌های مکمل در کنار درمان اصلی؛ هر تصمیم درمانی باید با پزشک معالج هماهنگ شود.',
    image: 'https://images.pexels.com/photos/8313427/pexels-photo-8313427.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['روش مکمل', 'ارزیابی فردی', 'هماهنگی با پزشک'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: HeartPulse,
    title: 'برنامه مراقبتی فردی',
    subtitle: 'Personalized Plan',
    desc: 'تنظیم برنامه مراقبتی با توجه به سابقه، شرایط و اولویت‌های هر مراجعه‌کننده، پس از ارزیابی.',
    image: 'https://images.pexels.com/photos/38407788/pexels-photo-38407788.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    features: ['برنامه اختصاصی', 'پیگیری مستمر', 'بازبینی برنامه'],
    color: 'from-rose-500 to-pink-500',
  },
];

export default function Services() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dots-pattern opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="section-label tag-teal mb-4">
              خدمات و روش‌ها
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-3">
              <span className="gradient-text">خدمات درمانی</span> کلینیک
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              با خدمات و روش‌های قابل بررسی در هر مراجعه آشنا شوید؛ انتخاب روش به شرایط فرد و نظر پزشک معالج بستگی دارد.
            </p>
            <div className="section-divider w-24 mx-auto mt-5" />
          </div>

          {/* ── Cards grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm card-hover"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <img
                      src={s.image}
                      alt={`تصویر مفهومی مرتبط با ${s.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/20 to-transparent" />

                    {/* Icon badge */}
                    <div className={`absolute top-4 right-4 w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Subtitle on image */}
                    <div className="absolute bottom-3 right-4 left-4">
                      <p className="text-white/60 text-[11px] font-medium tracking-widest uppercase">{s.subtitle}</p>
                      <h3 className="text-white font-bold text-base leading-tight">{s.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-4 min-h-[5.25rem] flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-semibold border border-slate-100"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-12 text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 btn-primary px-7 py-3.5 rounded-2xl font-bold text-sm relative z-10"
            >
              مشاهده راه‌های ارتباطی
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
