import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShieldPlus, Handshake, SquarePlus, Siren, Stethoscope, Microscope, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NAVY, PHONE } from '@/components/ServiceUI';

export const metadata: Metadata = {
  title: 'For Insurance Partners | Namma Health',
  description: 'Extend your customer experience beyond insurance with Namma Health’s end-to-end healthcare assistance and coordination layer.',
};

const SAND = '#F9F8F6';
const GOLD = '#7A5C00';

const models = [
  { title: 'White-label', desc: 'Our assistance layer completely integrated into your ecosystem, appearing under your brand for a seamless user experience.', color: NAVY, fill: '100%' },
  { title: 'Co-branded', desc: 'Leverage the Namma Health brand alongside yours, highlighting a dedicated partnership for premium healthcare coordination.', color: GOLD, fill: '66%' },
  { title: 'Referral', desc: 'A lightweight model to connect your customers with our services as an optional, value-add benefit.', color: '#6B7280', fill: '33%' },
];

export default function InsurancePartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: GOLD }}>Strategic Partnerships</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]" style={{ color: NAVY }}>
              Extend Your Customer Experience Beyond Insurance.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Namma Health provides the end-to-end healthcare assistance and coordination layer your customers need to navigate hospitals, doctors, diagnostics, and emergencies.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="rounded-full text-white font-semibold px-8 py-4 hover:opacity-90 transition" style={{ backgroundColor: NAVY }}>
                Partner With Us
              </Link>
              <a href={PHONE} className="rounded-full border border-gray-300 font-semibold px-8 py-4 hover:bg-white transition" style={{ color: NAVY }}>
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
              alt="Partnership team reviewing healthcare insights"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Assistance layer */}
      <section className="py-20 border-t border-gray-200" style={{ backgroundColor: '#F5F2F0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: NAVY }}>The Comprehensive Assistance Layer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Positioning Namma Health as the critical bridge between financial coverage and actual clinical care delivery.</p>
          </div>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gray-300 p-10 text-center" style={{ backgroundColor: SAND }}>
              <ShieldPlus className="w-10 h-10 mx-auto mb-5" style={{ color: NAVY }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>Coverage</h3>
              <p className="text-gray-600">Your insurance product providing financial security.</p>
            </div>
            <ArrowRight className="w-8 h-8 mx-auto rotate-90 md:rotate-0" style={{ color: GOLD }} />
            <div className="rounded-2xl p-10 text-center text-white shadow-2xl" style={{ backgroundColor: NAVY }}>
              <Handshake className="w-10 h-10 mx-auto mb-5" />
              <h3 className="text-2xl font-bold mb-3">Care Navigation</h3>
              <p className="text-white/85">Namma Health coordinating the real-world healthcare journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service pillars — bento */}
      <section className="py-20 border-t border-gray-200" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: NAVY }}>Key Service Pillars for Partners</h2>
          <p className="text-gray-600 mb-10">A unified coordination system to reduce friction for your policyholders across every touchpoint.</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl border border-gray-300 p-7 flex flex-col min-h-[280px] bg-gradient-to-br from-white to-[#F5F2F0]">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <SquarePlus className="w-8 h-8" style={{ color: NAVY }} />
              </div>
              <div className="mt-auto pt-10">
                <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>Hospital Assistance</h3>
                <p className="text-gray-600 leading-relaxed">Selection, admission, surgery, and discharge navigation handled seamlessly to ensure quality care and controlled costs.</p>
              </div>
            </div>

            <div className="md:col-span-2 rounded-2xl bg-red-100 p-7">
              <Siren className="w-8 h-8 text-red-700 mb-5" />
              <h3 className="text-2xl font-bold text-red-700 mb-3">Emergency Support</h3>
              <p className="text-gray-700 leading-relaxed">24/7 ambulance coordination and family communication during critical moments.</p>
            </div>

            <div className="rounded-2xl border border-gray-300 p-7" style={{ backgroundColor: SAND }}>
              <Stethoscope className="w-7 h-7 mb-6" style={{ color: NAVY }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Doctor &amp; OPD</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Specialist consultation and follow-up management.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-7" style={{ backgroundColor: SAND }}>
              <Microscope className="w-7 h-7 mb-6" style={{ color: NAVY }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Diagnostics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Seamless home sample collection and test coordination.</p>
            </div>

            <div className="md:col-span-4 rounded-2xl border border-blue-200 bg-blue-100 p-7 flex flex-col sm:flex-row sm:items-center gap-5">
              <FileText className="w-9 h-9 flex-shrink-0" style={{ color: NAVY }} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold" style={{ color: NAVY }}>Insurance Support</h3>
                <p className="text-gray-600">Cashless coordination and documentation guidance.</p>
              </div>
              <Link href="/services/insurance" className="self-start sm:self-auto rounded-full text-white font-medium px-7 py-3 hover:opacity-90 transition" style={{ backgroundColor: NAVY }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="py-20 border-t border-gray-200" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: NAVY }}>Flexible Partnership Models</h2>
            <p className="text-gray-600">Integrate our services in a way that best suits your brand and operational requirements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {models.map((m) => (
              <div key={m.title} className="rounded-2xl bg-[#FAF9F7] shadow-sm hover:shadow-lg transition duration-300 border-t-4 p-7 flex flex-col" style={{ borderTopColor: m.color }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>{m.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{m.desc}</p>
                <div className="mt-auto h-1 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: m.fill, backgroundColor: m.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full text-white font-semibold px-10 py-4 hover:opacity-90 transition" style={{ backgroundColor: NAVY }}>
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
