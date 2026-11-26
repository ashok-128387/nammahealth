import Link from 'next/link';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check, CircleCheck, Headset, SquarePlus, ShieldPlus, Activity, Megaphone, Asterisk, Users, ClipboardList, Handshake, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NAVY, PHONE } from '@/components/ServiceUI';

export const metadata: Metadata = {
  title: 'For Corporates | Namma Health',
  description: 'Corporate healthcare programs: a single point of healthcare coordination for your employees — hospitals, diagnostics, insurance and emergencies, 24/7.',
};

const SAND = '#F9F8F6';

function SmallCard({ icon: Icon, title, desc, dark = false }: { icon: LucideIcon; title: string; desc: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition duration-300 h-full ${dark ? 'text-white' : 'bg-white'}`}
      style={dark ? { backgroundColor: '#0B2E5E' } : undefined}
    >
      <Icon className={`w-8 h-8 mb-6 ${dark ? 'text-amber-400' : ''}`} style={dark ? undefined : { color: NAVY }} strokeWidth={dark ? 3 : 2} />
      <h3 className="font-bold text-lg mb-2" style={dark ? undefined : { color: NAVY }}>{title}</h3>
      <p className={`leading-relaxed ${dark ? 'text-blue-300' : 'text-gray-600'}`}>{desc}</p>
    </div>
  );
}

const steps = [
  { icon: ClipboardList, title: 'Share Your Requirements', desc: 'Tell us your team size, locations and the support you need.' },
  { icon: Handshake, title: 'Custom Program Design', desc: 'We tailor a coordination program and pricing for your organisation.' },
  { icon: Rocket, title: 'Onboard Your Team', desc: 'Employees get a dedicated helpline and coordinator from day one.' },
  { icon: Headset, title: 'Ongoing 24/7 Support', desc: 'We coordinate care, report on usage and run wellness activities.' },
];

const benefits = [
  'Reduced absenteeism and faster return to work',
  'Less HR time spent on hospital and claim follow-ups',
  'A valued, visible employee benefit',
  'Single point of contact for every healthcare need',
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: SAND }}>
        <div className="absolute -top-20 right-0 w-[600px] h-[400px] rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight" style={{ color: NAVY }}>
              Make healthcare easier for your <span className="text-amber-400">employees.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Employees often struggle to navigate hospitals, diagnostics, insurance and healthcare services. Namma Health provides a single point of healthcare coordination, ensuring your team gets the premium care they deserve without the administrative headache.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full text-white font-semibold text-lg px-10 py-5 shadow-xl hover:opacity-90 transition"
              style={{ backgroundColor: '#0B2E5E' }}
            >
              Request Corporate Program <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative pb-16 lg:pb-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
                alt="Team of employees in a modern office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 sm:-left-8 max-w-xs bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-green-800 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                </div>
                <p className="font-bold text-lg" style={{ color: NAVY }}>Coordination Active</p>
              </div>
              <p className="text-sm font-medium text-gray-700">Seamless support for your entire organization, 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs — bento grid */}
      <section className="py-20" style={{ backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: NAVY }}>Corporate Healthcare Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to support your workforce&apos;s well-being and streamline administrative burdens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large feature card */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gray-100/70 blur-3xl pointer-events-none" />
              <div className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#0B2E5E' }}>
                <Headset className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY }}>Employee Healthcare Assistance</h3>
              <p className="relative text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
                A dedicated concierge service guiding employees through the complex healthcare landscape. From finding the right specialist to managing appointments, we act as their personal healthcare advocate.
              </p>
              <ul className="relative mt-auto space-y-3">
                {['Specialist Referrals', 'Appointment Scheduling', 'Follow-up Care'].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-semibold text-gray-900">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <SmallCard icon={SquarePlus} title="Hospital Coordination" desc="Managing admissions, discharges, and coordinating with hospital staff for a smooth experience." />
            <SmallCard icon={ShieldPlus} title="Insurance Assistance" desc="Simplifying claims processes and helping employees understand their coverage benefits." />
            <SmallCard icon={Activity} title="Preventive Checkups" desc="Organizing regular screenings and assessments to catch potential health issues early." />
            <SmallCard icon={Megaphone} title="Health Camps" desc="On-site or virtual events promoting wellness, vaccination drives, and health education." />
            <SmallCard icon={Asterisk} title="Emergency Coordination" desc="Rapid response protocols and coordination during critical health situations." dark />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Simple Onboarding</p>
            <h2 className="text-4xl font-bold" style={{ color: NAVY }}>How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition duration-300">
                <span className="absolute top-5 right-6 text-5xl font-black text-gray-100 leading-none">0{i + 1}</span>
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${i % 2 === 0 ? 'bg-[#0B2E5E]' : 'bg-[#46608C]'}`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="relative text-xl font-bold mb-2" style={{ color: NAVY }}>{s.title}</h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border bg-amber-400/10 border-amber-400/40 text-amber-300">
              <Users className="w-4 h-4" /> For HR &amp; People Teams
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Give your team healthcare support that actually works.</h2>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#001939] font-semibold px-8 py-4 transition">
                Request Corporate Program
              </Link>
              <a href={PHONE} className="rounded-full border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 transition">
                Talk to Our Team
              </a>
            </div>
          </div>
          <ul className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 md:p-10 space-y-5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-lg text-blue-200">
                <CircleCheck className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
