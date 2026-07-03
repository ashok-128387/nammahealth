'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, Magnet, Monitor, Radio, Droplets, Atom, Brain, Telescope, AlignJustify, FlaskConical, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const diagnostics = [
  { icon: Magnet, name: 'MRI Scan', desc: 'Magnetic Resonance Imaging for detailed soft tissue and organ analysis.' },
  { icon: Monitor, name: 'CT Scan', desc: 'Computed Tomography for cross-sectional imaging of bones, blood vessels, and tissues.' },
  { icon: Radio, name: 'Ultrasound (USG)', desc: 'Sound wave imaging for abdomen, pelvis, obstetrics, and vascular studies.' },
  { icon: Droplets, name: 'Blood & Laboratory Tests', desc: 'Complete blood count, metabolic panels, hormone tests, and specialized lab investigations.' },
  { icon: Atom, name: 'PET Scan', desc: 'Positron Emission Tomography for cancer detection and neurological assessments.' },
  { icon: Brain, name: 'EEG', desc: 'Electroencephalogram for brain activity monitoring and neurological diagnosis.' },
  { icon: Telescope, name: 'Endoscopy', desc: 'Upper GI endoscopy for stomach, esophagus, and duodenum examination.' },
  { icon: AlignJustify, name: 'Colonoscopy', desc: 'Lower GI examination for colon and rectum health screening.' },
  { icon: FlaskConical, name: 'Other Investigations', desc: 'Biopsy, ECG, Echo, Spirometry, and any other diagnostic investigation you need.' },
];

const steps = [
  { step: '01', title: 'Share Your Test Requirement', desc: 'Tell us which tests are prescribed or needed.' },
  { step: '02', title: 'We Find the Best Lab', desc: 'We identify NABL/NABH-accredited centres near you with best pricing.' },
  { step: '03', title: 'Appointment Scheduled', desc: 'Slot is booked and all prep instructions are shared with you.' },
  { step: '04', title: 'Reports Coordinated', desc: 'We follow up on reports and share them digitally with you.' },
];

const faqs = [
  { q: 'Are the diagnostic centres NABL accredited?', a: 'Yes. We only partner with NABL-accredited laboratories and NABH-accredited hospitals to ensure quality and accuracy of results.' },
  { q: 'Can I get home sample collection?', a: 'Yes, for blood and urine tests, home collection can be arranged through our partner labs.' },
  { q: 'How long does it take to get reports?', a: 'Turnaround time varies by test. Routine blood tests are typically available within 24 hours. We coordinate report delivery digitally.' },
  { q: 'Do you offer discounts on diagnostics for members?', a: 'Yes. Namma Health members get exclusive pricing and priority scheduling at partner diagnostic centres.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function DiagnosticServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Diagnostic Services</span>
        </div>
      </div>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-2">Core Service</p>
                <h1 className="text-5xl font-bold mb-4">Diagnostic Services</h1>
                <p className="text-white/80 text-lg max-w-2xl">Quick, reliable, and affordable access to diagnostics through NABL-accredited laboratories and NABH-accredited hospitals with full appointment and report coordination.</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '380px' }}>
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80" alt="Diagnostic lab" className="w-full h-full object-cover" style={{ maxHeight: '380px' }} />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(25,165,164,0.25) 0%, transparent 60%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What's Covered</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Diagnostic Services Offered</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive diagnostic investigations coordinated through accredited partner centres.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnostics.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{d.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
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
          <h2 className="text-4xl font-bold">Book Your Diagnostic Test Today</h2>
          <p className="text-xl text-white/90">Fast scheduling, accredited labs, and digital reports all coordinated for you.</p>
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
