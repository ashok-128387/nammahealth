'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, Phone, Ambulance, HeartPulse, ArrowLeftRight, Zap, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign, Siren } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  { icon: Ambulance, title: 'Basic Life Support (BLS) Ambulance', desc: 'Equipped with essential life support equipment and trained paramedics for stable patient transport.' },
  { icon: HeartPulse, title: 'Advanced Life Support (ALS) Ambulance', desc: 'Fully equipped ICU-level ambulances with advanced cardiac monitors, ventilators, and critical care paramedics.' },
  { icon: ArrowLeftRight, title: 'Inter-Hospital Transfers', desc: 'Safe and coordinated transfer of patients between hospitals with continuous medical monitoring.' },
  { icon: Zap, title: 'Emergency & Non-Emergency Transfers', desc: '24/7 availability for both emergency response and planned non-emergency patient transport.' },
];

const stats = [
  { number: '24/7', label: 'Availability' },
  { number: '<10 min', label: 'Avg Response Time' },
  { number: 'BLS & ALS', label: 'Ambulance Types' },
  { number: '100%', label: 'Trained Paramedics' },
];

const steps = [
  { step: '01', title: 'Call or Request Online', desc: 'Contact our 24/7 helpline or request through the app for immediate dispatch.' },
  { step: '02', title: 'Ambulance Dispatched', desc: 'The nearest available ambulance is dispatched to your location immediately.' },
  { step: '03', title: 'On-Site Care', desc: 'Paramedics provide immediate care and stabilize the patient on arrival.' },
  { step: '04', title: 'Safe Transport', desc: 'Patient is transported to the nearest or preferred partner hospital safely.' },
];

const faqs = [
  { q: 'How quickly can an ambulance reach me?', a: 'Our average response time is under 10 minutes within service areas. Response time may vary based on location and traffic conditions.' },
  { q: 'What is the difference between BLS and ALS ambulance?', a: 'BLS (Basic Life Support) ambulances handle stable patients with basic equipment. ALS (Advanced Life Support) ambulances are ICU-equipped for critical patients requiring advanced care during transport.' },
  { q: 'Is ambulance service available 24/7?', a: 'Yes. Our ambulance coordination service is available 24 hours a day, 7 days a week, including holidays.' },
  { q: 'Can I request an ambulance for a non-emergency transfer?', a: 'Yes. We coordinate both emergency and non-emergency transfers, including planned inter-hospital transfers and discharge transport.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function AmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Ambulance Services</span>
        </div>
      </div>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          <div className="flex items-start gap-6 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <Ambulance className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-2">Core Service</p>
              <h1 className="text-5xl font-bold mb-4">Ambulance Services</h1>
              <p className="text-white/80 text-lg max-w-2xl">Fast and reliable emergency medical transport through our ambulance service partners available 24/7 for emergencies, inter-hospital transfers, and non-emergency transport.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-white mb-1">{s.number}</p>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-red-50 border-y border-red-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
            <Siren className="w-4 h-4" /> Medical Emergency? Call us immediately we are available 24/7.
          </p>
          <a href="tel:1800NAMMA">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm">
              <Phone className="w-4 h-4 mr-2" /> Call 1800-NAMMA
            </Button>
          </a>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What's Included</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Ambulance Options</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive ambulance services for every medical transport need.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="w-7 h-7 text-primary" />
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

      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Need an Ambulance?</h2>
          <p className="text-xl text-white/90">We are available 24x7 call us or book online for immediate dispatch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
