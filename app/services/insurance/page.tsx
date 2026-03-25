'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, ShieldCheck, RefreshCw, HandshakeIcon, Building2, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  { icon: ShieldCheck, title: 'New Policy Purchase', desc: 'We help you compare and purchase the right health insurance policy based on your needs and budget.' },
  { icon: RefreshCw, title: 'Health Insurance Portability', desc: 'Seamless porting support to switch your existing policy to a better plan without losing benefits.' },
  { icon: HandshakeIcon, title: 'Insurance Consultation & Guidance', desc: 'Expert guidance on coverage, exclusions, waiting periods, and choosing the right plan for your family.' },
  { icon: Building2, title: 'Corporate Health Insurance', desc: 'Group health insurance solutions for organizations from policy selection to employee enrollment.' },
];

const steps = [
  { step: '01', title: 'Share Your Requirement', desc: 'Tell us your coverage needs, budget, and existing policy details if any.' },
  { step: '02', title: 'We Analyze & Recommend', desc: 'Our team reviews options and recommends the best-fit plans from trusted insurers.' },
  { step: '03', title: 'Policy Finalized', desc: 'We assist with documentation, enrollment, and policy issuance.' },
  { step: '04', title: 'Ongoing Support', desc: 'We remain your point of contact for renewals, queries, and claim guidance.' },
];

const faqs = [
  { q: 'Which insurance companies do you work with?', a: 'We work with multiple leading health insurance providers to offer you the best options. Our team will recommend based on your specific needs.' },
  { q: 'Can you help with insurance claims?', a: 'We provide guidance and coordination support during the claims process. However, claims approval and settlement are governed by the respective insurance providers.' },
  { q: 'What is health insurance portability?', a: 'Portability allows you to switch your existing health insurance policy to a new insurer without losing accumulated benefits like waiting period credits.' },
  { q: 'Is corporate insurance available for small businesses?', a: 'Yes. We offer corporate health insurance solutions for businesses of all sizes, from startups to large enterprises.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Health Insurance Support</span>
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
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-2">Core Service</p>
                <h1 className="text-5xl font-bold mb-4">Health Insurance Support</h1>
                <p className="text-white/80 text-lg max-w-2xl">Our insurance support team assists members with clarity and coordination across all health insurance processes from purchasing a new policy to porting an existing one.</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '380px' }}>
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80" alt="Health insurance" className="w-full h-full object-cover" style={{ maxHeight: '380px' }} />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(25,165,164,0.25) 0%, transparent 60%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What's Included</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Insurance Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Complete insurance support from consultation to enrollment.</p>
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
          <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-800"><span className="font-semibold">Note:</span> Claims approval and settlement are governed by the respective insurance providers. Namma Health provides coordination and guidance support only.</p>
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
          <h2 className="text-4xl font-bold">Get the Right Health Insurance Today</h2>
          <p className="text-xl text-white/90">Our experts will help you find the best plan for your needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Get Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
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
