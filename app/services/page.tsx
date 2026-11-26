'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, Check, Building2, FlaskConical, ShieldCheck, ClipboardCheck, Home, Ambulance, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign, BadgeCheck, Headset, Asterisk } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Badge, ServiceCard, NAVY, PHONE } from '@/components/ServiceUI';

const services: { icon: LucideIcon; name: string; desc: string; href: string; points: string[]; cta: string; emergency?: boolean }[] = [
  {
    icon: Building2,
    name: 'Hospital Services',
    desc: 'Doctor appointments, OPD consultations, inpatient admission, surgery booking, and full hospital coordination through our partner network.',
    href: '/services/hospital',
    points: ['Doctor appointment booking', 'Inpatient admission support', 'Surgery booking & coordination'],
    cta: 'Explore Service',
  },
  {
    icon: FlaskConical,
    name: 'Diagnostic Services',
    desc: 'MRI, CT Scan, Ultrasound, blood tests, PET Scan, EEG, Endoscopy and more via NABL/NABH-accredited centres with report coordination.',
    href: '/services/diagnostic',
    points: ['MRI, CT scan & ultrasound', 'Blood & lab tests', 'Report coordination'],
    cta: 'Book a Service',
  },
  {
    icon: ShieldCheck,
    name: 'Health Insurance Support',
    desc: 'New policy purchase, portability support, insurance consultation, and corporate health insurance services all in one place.',
    href: '/services/insurance',
    points: ['New policy purchase', 'Portability support', 'Corporate health insurance'],
    cta: 'Get Assistance',
  },
  {
    icon: ClipboardCheck,
    name: 'Health Check-Up Programs',
    desc: 'Corporate, annual preventive, and pre/post check-up coordination with employee wellness program support for individuals and organizations.',
    href: '/services/health-checkup',
    points: ['Annual preventive check-ups', 'Corporate health check-ups', 'Employee wellness programs'],
    cta: 'Explore Service',
  },
  {
    icon: Home,
    name: 'Home Care Services',
    desc: 'Home nursing and patient caretaker services through verified partner professionals for recovery, elderly care, and long-term needs.',
    href: '/services/home-care',
    points: ['Home nursing services', 'Post-surgery recovery care', 'Elderly care support'],
    cta: 'Explore Service',
  },
  {
    icon: Asterisk,
    name: 'Emergency & Ambulance',
    desc: 'BLS & ALS ambulances, inter-hospital transfers, and emergency/non-emergency transport available 24/7 through our partner network.',
    href: '/services/ambulance',
    points: ['24/7 ambulance dispatch', 'BLS & ALS ambulances', 'Inter-hospital transfers'],
    cta: 'Get Emergency Help',
    emergency: true,
  },
];

const stats = [
  { number: '20+', label: 'Partner Hospitals' },
  { number: '6', label: 'Core Services' },
  { number: '100+', label: 'Members Served' },
  { number: '24/7', label: 'Support Available' },
];

const whyChooseUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

const faqs = [
  { q: 'What is Namma Health?', a: 'Namma Health is a membership-based healthcare coordination ecosystem that connects you to 126+ partner hospitals, experienced doctors, and comprehensive health services including diagnostics, insurance, and home care.' },
  { q: 'Do you provide medical treatment directly?', a: 'No. We are a healthcare coordination and facilitation service. We connect you with the right hospitals, doctors, and diagnostic centers, and manage the entire process end-to-end on your behalf.' },
  { q: 'How does the membership work?', a: 'You can choose from Individual, Family, or Corporate memberships. Membership gives you priority access, end-to-end coordination, exclusive discounts, and 24x7 support for all healthcare services.' },
  { q: 'Can Namma Health help during emergencies?', a: 'Yes. Our 24x7 support team is always available to assist during medical emergencies from ambulance coordination to hospital admission and real-time updates for your family.' },
  { q: 'How do I book appointments or services?', a: 'You can book through our website, mobile app, or by calling our helpline at 1800-NAMMA. Our care coordinators will handle everything from scheduling to reminders.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — light with image card */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F9F8F6', backgroundImage: 'radial-gradient(#d9d6d0 1px, transparent 1px)', backgroundSize: '22px 22px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <Badge icon={BadgeCheck}>Comprehensive Care</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]" style={{ color: NAVY }}>
              Complete Healthcare Coordination Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              From finding the right specialist to managing hospital discharges, we coordinate every step of your healthcare journey with precision and empathy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={PHONE} className="rounded-full text-white font-semibold px-10 py-4 transition hover:opacity-90" style={{ backgroundColor: NAVY }}>
                Request Assistance
              </a>
              <Link href="/#membership" className="rounded-full border border-gray-400 text-[#001939] font-semibold px-10 py-4 hover:bg-white transition">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/patient-care.jpg" alt="Namma Health care coordinator with a patient" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-auto sm:min-w-[340px] bg-white rounded-xl shadow-xl px-6 py-5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                <Headset className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <p className="text-xl font-medium" style={{ color: NAVY }}>24/7 Care Coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-8 text-center">
                <p className="text-3xl font-bold text-primary mb-1">{s.number}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">What We Offer</p>
            <h2 className="text-4xl font-bold text-primary mb-3">Explore Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Each service is coordinated end-to-end by our dedicated care team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard
                key={service.name}
                icon={service.icon}
                title={service.name}
                desc={service.desc}
                points={service.points}
                href={service.href}
                cta={service.cta}
                index={i}
                emergency={service.emergency}
              />
            ))}
          </div>

          {/* Upcoming */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-dashed border-primary/30">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-foreground mb-1">Upcoming Services</p>
                <p className="text-sm text-gray-500">We are expanding our ecosystem to provide even greater convenience.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Pharmacy Services', 'Tele-Consultation', 'Govt. Health Scheme'].map((s) => (
                  <span key={s} className="text-xs bg-primary/5 border border-primary/20 text-primary font-medium px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Why Us</p>
              <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Namma Health?</h2>
              <p className="text-gray-500 mb-10">A trusted partner for all your healthcare coordination needs from a single appointment to complete family care.</p>
              <div className="space-y-5">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership CTA card */}
            <div className="bg-primary rounded-3xl p-10 text-white">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-3">Get Started Today</p>
              <h3 className="text-3xl font-bold mb-4">One Membership.<br />Complete Care.</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Choose from Individual, Family, or Corporate plans and get priority access to all our services with dedicated 24x7 support.
              </p>
              <div className="space-y-3 mb-8">
                {['Priority appointment coordination', 'Diagnostic & hospital support', 'Insurance consultation', 'Emergency assistance 24x7'].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold">
                View Membership Plans <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageCircleQuestion className="w-4 h-4" /> FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-xl px-6 hover:border-primary transition-colors duration-200">
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-5xl font-bold">Ready to Experience Premium Healthcare?</h2>
          <p className="text-xl text-white/90">Join 100+ members enjoying seamless healthcare coordination in Bengaluru</p>
          <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 bg-amber-400 text-primary hover:bg-amber-300 font-semibold">
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
