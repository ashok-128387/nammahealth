import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CircleCheck, ClipboardList, Search, BadgeCheck, HeartHandshake } from 'lucide-react';

export const NAVY = '#001939';
export const BOOK_URL = 'https://hospital-membership-platform.onrender.com/';
export const PHONE = 'tel:+916360108440';

/** Yellow pill badge ("Comprehensive Care" style). dark = for navy backgrounds */
export function Badge({ icon: Icon, children, dark = false }: { icon: LucideIcon; children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border ${
        dark ? 'bg-amber-400/10 border-amber-400/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
      }`}
    >
      <Icon className="w-4 h-4" /> {children}
    </span>
  );
}

const stepIcons = [ClipboardList, Search, BadgeCheck, HeartHandshake];

/** Dark navy hero with "How It Works" panel — used on each service detail page */
export function ServiceHero({
  badgeIcon,
  badge,
  title,
  desc,
  steps,
}: {
  badgeIcon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  steps: { title: string }[];
}) {
  return (
    <section className="py-16 md:py-20 text-white" style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge icon={badgeIcon} dark>{badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-blue-300 leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#001939] font-semibold px-8 py-4 transition">
              Book This Service
            </a>
            <a href={PHONE} className="rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 transition">
              Talk to Our Team
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 md:p-10">
          <h2 className="text-2xl text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {steps.slice(0, 4).map((s, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              const hi = i === 2;
              return (
                <div key={s.title} className="flex flex-col items-center text-center gap-3">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${hi ? 'bg-amber-400' : 'bg-white/5 border border-white/20'}`}>
                    <Icon className={`w-6 h-6 ${hi ? 'text-[#001939]' : 'text-amber-400'}`} />
                  </div>
                  <p className="text-sm font-semibold">{s.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** White card with navy icon tile, title, text, yellow check bullets and full-width outline button */
export function ServiceCard({
  icon: Icon,
  title,
  desc,
  points,
  href,
  cta = 'Explore Service',
  index = 0,
  emergency = false,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  points?: string[];
  href?: string;
  cta?: string;
  index?: number;
  emergency?: boolean;
}) {
  const tile = emergency ? 'bg-red-100' : index % 2 === 0 ? 'bg-[#0B2E5E]' : 'bg-[#46608C]';
  const iconColor = emergency ? 'text-red-700' : 'text-white';
  const btn = emergency
    ? 'bg-red-700 hover:bg-red-800 text-white border-red-700 font-bold'
    : 'border-[#001939] text-[#001939] hover:bg-[#001939] hover:text-white font-medium';
  const button = (
    <span className={`mt-auto flex items-center justify-center gap-2 w-full rounded-lg border py-3 transition ${btn}`}>
      {cta} <ArrowRight className="w-4 h-4" />
    </span>
  );
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition duration-300 h-full">
      <div className={`w-16 h-16 rounded-xl ${tile} flex items-center justify-center mb-7`}>
        <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={emergency ? 3 : 2} />
      </div>
      <h3 className="text-2xl md:text-[1.75rem] font-bold leading-snug mb-4" style={{ color: NAVY }}>{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">{desc}</p>
      {points && points.length > 0 && (
        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-gray-800">
              <CircleCheck className="w-5 h-5 text-amber-400 flex-shrink-0" /> {p}
            </li>
          ))}
        </ul>
      )}
      {href && (href.startsWith('http') || href.startsWith('tel:') ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="mt-auto">{button}</a>
      ) : (
        <Link href={href} className="mt-auto">{button}</Link>
      ))}
    </div>
  );
}
