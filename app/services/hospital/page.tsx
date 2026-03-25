'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, UserRound, Building2, FlaskConical, BedDouble, Scissors, ClipboardList, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  { icon: UserRound, title: 'Doctor Appointment Booking', desc: 'Priority booking with specialist doctors across our partner hospital network.' },
  { icon: Building2, title: 'OPD Consultations', desc: 'Outpatient department coordination with minimal wait times and smooth check-ins.' },
  { icon: FlaskConical, title: 'OPD Diagnostic Coordination', desc: 'In-hospital diagnostic tests coordinated seamlessly alongside your consultation.' },
  { icon: BedDouble, title: 'Inpatient Admission Support', desc: 'End-to-end admission assistance from paperwork to room allocation.' },
  { icon: Scissors, title: 'Surgery Booking & Coordination', desc: 'Pre-surgery planning, scheduling, and post-operative follow-up coordination.' },
  { icon: ClipboardList, title: 'Other Hospital-Related Services', desc: 'Any additional hospital requirement handled by our dedicated care coordinators.' },
];

const steps = [
  { step: '01', title: 'Share Your Requirement', desc: 'Tell us the type of consultation, specialty, or hospital preference.' },
  { step: '02', title: 'We Find the Best Match', desc: 'Our team identifies the right doctor and hospital from our partner network.' },
  { step: '03', title: 'Booking Confirmed', desc: 'Appointment is confirmed with reminders and all details shared with you.' },
  { step: '04', title: 'We Stay With You', desc: 'From arrival to discharge, our coordinators are available for support.' },
];

const faqs = [
  { q: 'Which hospitals are in your network?', a: 'We have 126+ partner hospitals across major cities including NABH-accredited facilities. Our team will recommend the best fit based on your requirement.' },
  { q: 'Can you help with emergency hospital admissions?', a: 'Yes. Our 24x7 support team handles emergency admissions, ambulance coordination, and real-time family updates.' },
  { q: 'Do you charge for hospital coordination?', a: 'Hospital coordination is included as part of your Namma Health membership. No hidden fees.' },
  { q: 'Can I choose my preferred doctor?', a: 'Absolutely. You can specify your preferred doctor or specialty and we will coordinate accordingly.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function HospitalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Hospital Services</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-2">Core Service</p>
                <h1 className="text-5xl font-bold mb-4">Hospital Services</h1>
                <p className="text-white/80 text-lg max-w-2xl">
                  Namma Health coordinates seamless hospital services through a network of partner hospitals, ensuring smooth care from consultation to discharge.
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '380px' }}>
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80" alt="Hospital building" className="w-full h-full object-cover" style={{ maxHeight: '380px' }} />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(25,165,164,0.25) 0%, transparent 60%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What's Included</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Hospital Services Include</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything you need from booking to discharge handled by our care coordinators.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Note:</span> Namma Health acts solely as a healthcare coordinator and does not directly provide medical treatment. All medical decisions are taken by registered healthcare professionals at partner facilities.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Simple Process</p>
            <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <span className="text-6xl font-black text-primary/10 absolute top-4 right-5 leading-none">{s.step}</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mb-4">{s.step}</div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Why Us</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Why Choose Namma Health?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageCircleQuestion className="w-4 h-4" /> FAQs
            </div>
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
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
          <h2 className="text-4xl font-bold">Need Hospital Coordination?</h2>
          <p className="text-xl text-white/90">Our care coordinators are available 24x7 to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Book Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
