import { CirclePlay } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Videos() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="videos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 medical-pattern opacity-20" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${active ? 'active' : ''}`}>
          <div className="mb-12 text-center">
            <span className="section-label tag-cyan mb-4">ویدیوهای آموزشی</span>
            <h2 className="mb-3 mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              محتوای <span className="gradient-text">ویدیویی</span>
            </h2>
          </div>
          <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <CirclePlay className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              ویدیوها و پیوندهای رسمی تا زمان تأیید منبع منتشر نمی‌شوند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
