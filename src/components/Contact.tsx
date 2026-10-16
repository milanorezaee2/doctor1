import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, ChevronLeft } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  {
    icon: MapPin,
    label: 'آدرس',
    value: 'تهران، خیابان ولیعصر، بالاتر از پارک‌وی، کلینیک تخصصی طب سوزنی',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Phone,
    label: 'تلفن تماس',
    value: '۰۲۱-۲۲۳۴۵۶۷۸',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'info@dr-hashtroodi.com',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Clock,
    label: 'ساعات کاری',
    value: 'شنبه تا چهارشنبه: ۹ تا ۱۸ | پنجشنبه: ۹ تا ۱۳',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function Contact() {
  const { ref, active } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', condition: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', condition: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#070e20' }}>

      {/* ── Background ── */}
      <div className="absolute inset-0 medical-pattern opacity-12" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/7 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/7 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="section-label tag-dark mb-4">
              تماس و نوبت‌دهی
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-3">
              <span className="gradient-text">رزرو نوبت</span> آنلاین
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              برای رزرو نوبت یا مشاوره رایگان، فرم زیر را تکمیل کنید یا مستقیماً با ما تماس بگیرید
            </p>
            <div className="section-divider w-24 mx-auto mt-5" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">

            {/* ── Contact info column ── */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-white/7 bg-white/3 hover:bg-white/6 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-cyan-300 text-xs font-semibold uppercase tracking-wide mb-1">{info.label}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                );
              })}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-44 border border-white/8">
                <iframe
                  src="https://maps.google.com/maps?q=Tehran%20Valiasr&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 opacity-75"
                  loading="lazy"
                  title="موقعیت کلینیک"
                />
              </div>
            </div>

            {/* ── Form column ── */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-6 animate-bounceIn shadow-xl">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">درخواست شما ثبت شد!</h3>
                  <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    تیم ما در اسرع وقت با شما تماس می‌گیرد.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-cyan-300 text-xs font-semibold uppercase tracking-wide mb-2">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-dark"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-300 text-xs font-semibold uppercase tracking-wide mb-2">شماره تماس</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-dark"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-300 text-xs font-semibold uppercase tracking-wide mb-2">نوع بیماری</label>
                    <select
                      required
                      value={form.condition}
                      onChange={(e) => setForm({ ...form, condition: e.target.value })}
                      className="input-dark"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#0a1628]">انتخاب کنید</option>
                      <option value="ms" className="bg-[#0a1628]">ام‌اس</option>
                      <option value="gbs" className="bg-[#0a1628]">گیلن‌باره</option>
                      <option value="autoimmune" className="bg-[#0a1628]">بیماری خودایمنی</option>
                      <option value="neuropathy" className="bg-[#0a1628]">نوروپاتی</option>
                      <option value="vegetative" className="bg-[#0a1628]">بیماری Vegetative</option>
                      <option value="other" className="bg-[#0a1628]">سایر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-cyan-300 text-xs font-semibold uppercase tracking-wide mb-2">توضیحات</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-dark resize-none"
                      placeholder="علائم و شرح حال خود را بنویسید..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm relative z-10"
                  >
                    <Calendar className="w-4 h-4" />
                    ثبت درخواست نوبت
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
