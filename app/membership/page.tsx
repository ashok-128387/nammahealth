import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, MessageCircleQuestion, Headset, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge, NAVY, BOOK_URL } from '@/components/ServiceUI';

export const metadata: Metadata = {
  title: 'Membership Plans | Namma Health',
  description: 'Choose an Individual, Family or Corporate plan and get dedicated healthcare coordination for you and your family.',
};

const plans = [
  {
    name: 'Individual Plan',
    price: '₹999',
    period: '/year',
    features: ['Dedicated coordinator', 'Hospital assistance', 'Priority support'],
    cta: 'Select Plan',
    href: BOOK_URL,
  },
  {
    name: 'Family Plan',
    price: '₹3,500',
    period: '/year',
    features: ['Support for up to 4 family members', 'Priority coordination', 'Emergency assistance'],
    cta: 'Select Family Plan',
    href: BOOK_URL,
    featured: true,
  },
  {
    name: 'Corporate Plan',
    price: 'Custom pricing',
    features: ['Employee wellness', 'Group insurance assistance', 'Health camps'],
    cta: 'Contact Sales',
    href: '/contact',
  },
];

const included = [
  { icon: Headset, title: 'Dedicated Coordinator', desc: 'One point of contact who manages your healthcare needs end to end.' },
  { icon: Clock, title: '24/7 Helpline', desc: 'Round-the-clock support for appointments, admissions and emergencies.' },
  { icon: ShieldCheck, title: 'Trusted Partner Network', desc: 'Access to verified partner hospitals, diagnostic centres and insurers.' },
  { icon: HeartHandshake, title: 'Transparent Pricing', desc: 'No hidden costs — clear, upfront pricing for every plan.' },
];

const faqs = [
  { q: 'How does the membership work?', a: 'Choose an Individual, Family or Corporate plan. Your membership gives you a dedicated coordinator, priority access and 24/7 support across all Namma Health services.' },
  { q: 'Who is covered under the Family Plan?', a: 'The Family Plan covers up to 4 family members under a single membership with priority coordination and emergency assistance.' },
  { q: 'Is the membership fee the same as insurance?', a: 'No. Namma Health is a healthcare coordination service, not an insurance product. Medical bills are paid to the hospital or provider; we help you navigate, book and coordinate care.' },
  { q: 'How do I get a Corporate Plan quote?', a: 'Contact our team with your organisation size and requirements and we will share a custom proposal.' },
];

function CheckDot({ featured }: { featured?: boolean }) {
  return (
    <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${featured ? 'bg-amber-400' : ''}`} style={featured ? undefined : { backgroundColor: NAVY }}>
      <Check className={`w-3.5 h-3.5 ${featured ? 'text-[#001939]' : 'text-white'}`} strokeWidth={3} />
    </span>
  );
}

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Plans */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-5">
            <Badge icon={ShieldCheck}>Membership</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: NAVY }}>Your Healthcare Support System</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose a plan that fits your needs and get dedicated healthcare coordination for you and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((p) => {
              const external = p.href.startsWith('http');
              const btnClass = p.featured
                ? 'bg-amber-400 hover:bg-amber-300 text-[#001939] border-amber-400'
                : 'border-[#001939] text-[#001939] hover:bg-[#001939] hover:text-white';
              const btn = (
                <span className={`block w-full text-center rounded-lg border py-3.5 font-medium transition ${btnClass}`}>{p.cta}</span>
              );
              return (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-2xl p-8 md:p-9 transition duration-300 ${
                    p.featured ? 'text-white border-2 border-amber-400 shadow-2xl md:-translate-y-2' : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg'
                  }`}
                  style={p.featured ? { backgroundColor: '#0B2E5E' } : undefined}
                >
                  {p.featured && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 bg-amber-400 text-[#001939] text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-b-xl">
                      Most Popular
                    </span>
                  )}
                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${p.featured ? 'text-blue-200 mt-2' : ''}`} style={p.featured ? undefined : { color: NAVY }}>
                    {p.name}
                  </h2>
                  <p className="mb-8">
                    <span className={`font-bold ${p.period ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} ${p.featured ? 'text-blue-200' : ''}`} style={p.featured ? undefined : { color: NAVY }}>
                      {p.price}
                    </span>
                    {p.period && <span className={`ml-1.5 text-lg ${p.featured ? 'text-blue-300' : 'text-gray-600'}`}>{p.period}</span>}
                  </p>
                  <ul className="space-y-5 mb-10 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-center gap-3 text-lg ${p.featured ? 'text-blue-200' : 'text-gray-800'}`}>
                        <CheckDot featured={p.featured} /> {f}
                      </li>
                    ))}
                  </ul>
                  {external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">{btn}</a>
                  ) : (
                    <Link href={p.href}>{btn}</Link>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Namma Health is a healthcare coordination service, not an insurance product. Treatment costs are payable to the respective provider.
          </p>
        </div>
      </section>

      {/* Included in every plan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Every Plan</p>
            <h2 className="text-4xl font-bold text-primary">Included With Every Membership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition duration-300">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${i % 2 === 0 ? 'bg-[#0B2E5E]' : 'bg-[#46608C]'}`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageCircleQuestion className="w-4 h-4" /> FAQs
            </div>
            <h2 className="text-4xl font-bold text-primary">Membership Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-base font-semibold text-primary hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
