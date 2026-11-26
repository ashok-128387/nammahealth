'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, Building2, CalendarDays, ArrowLeftRight, Briefcase, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign, ClipboardCheck } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceUI';

const features = [
  { icon: Building2, title: 'Corporate Health Check-Ups', desc: 'Organized health screening camps and check-up programs for employees at your workplace or partner centres.' },
  { icon: CalendarDays, title: 'Annual Preventive Health Check-Ups', desc: 'Yearly comprehensive health screenings to detect early signs of illness and maintain overall wellness.' },
  { icon: ArrowLeftRight, title: 'Pre & Post Check-Up Coordination', desc: 'Consultation coordination before and after your health check-up for proper interpretation and follow-up care.' },
  { icon: Briefcase, title: 'Employee Wellness Program Support', desc: 'Structured wellness programs for organizations to improve employee health, productivity, and morale.' },
];

const steps = [
  { step: '01', title: 'Choose Your Program', desc: 'Select from individual, family, or corporate health check-up packages.' },
  { step: '02', title: 'We Schedule Everything', desc: 'Our team books the centre, coordinates timing, and sends you all prep instructions.' },
  { step: '03', title: 'Check-Up Day', desc: 'Arrive at the partner centre our coordinators ensure a smooth, priority experience.' },
  { step: '04', title: 'Report & Follow-Up', desc: 'Reports are shared digitally and we coordinate any required follow-up consultations.' },
];

const faqs = [
  { q: 'What does a full body check-up include?', a: 'A typical full body check-up includes blood tests, urine analysis, ECG, chest X-ray, ultrasound abdomen, and specialist consultations. Packages vary by centre and plan.' },
  { q: 'Can check-ups be done at home?', a: 'Basic blood and urine tests can be done at home via our partner labs. Full body check-ups are conducted at partner diagnostic centres.' },
  { q: 'How often should I get a health check-up?', a: 'We recommend annual check-ups for adults above 30. Frequency may vary based on age, medical history, and doctor advice.' },
  { q: 'Do you offer check-ups for corporate employees?', a: 'Yes. We organize corporate health check-up camps and coordinate individual employee check-ups through our partner network.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function HealthCheckupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Health Check-Up Programs</span>
        </div>
      </div>

      <ServiceHero
        badgeIcon={ClipboardCheck}
        badge="Core Service"
        title="Health Check-Up Programs"
        desc="Preventive healthcare made easy with structured health check-up programs for individuals, families, and organizations coordinated end-to-end by Namma Health."
        steps={steps}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">What's Included</p>
            <h2 className="text-4xl font-bold text-primary mb-3">Check-Up Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Preventive care programs tailored for individuals and organizations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#0B2E5E] flex items-center justify-center mb-5">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Simple Process</p>
            <h2 className="text-4xl font-bold text-primary">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <span className="text-6xl font-black text-primary/10 absolute top-4 right-5 leading-none">{s.step}</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Why Us</p>
            <h2 className="text-4xl font-bold text-primary mb-3">Why Choose Namma Health?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#0B2E5E] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageCircleQuestion className="w-4 h-4" /> FAQs
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

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Schedule Your Health Check-Up Today</h2>
          <p className="text-xl text-white/90">Prevention is better than cure. Let us coordinate your check-up end-to-end.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 bg-amber-400 text-primary hover:bg-amber-300 font-semibold">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
