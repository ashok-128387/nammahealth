'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, ArrowLeft, UserRound, Users, CheckCircle, Clock, ClipboardList, PhoneCall, Target, Sparkles, Globe, BadgeDollarSign, Home } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceUI';

const features = [
  { icon: UserRound, title: 'Home Nursing Services', desc: 'Trained and certified nurses available at your home for wound care, IV administration, catheter care, and post-surgical monitoring.' },
  { icon: Users, title: 'Patient Caretaker Services', desc: 'Dedicated caretakers for elderly patients, post-operative recovery, and long-term care needs available for day or night shifts.' },
];

const whyItems = [
  { icon: CheckCircle, title: 'Verified Professionals', desc: 'All nurses and caretakers are background-verified and trained through our partner network.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Day shifts, night shifts, or 24-hour care we coordinate based on your requirement.' },
  { icon: ClipboardList, title: 'Care Plan Coordination', desc: "We work with your doctor's instructions to ensure the right care is delivered at home." },
  { icon: PhoneCall, title: '24/7 Support', desc: 'Our team is available round the clock to address any concerns or changes in care needs.' },
];

const steps = [
  { step: '01', title: 'Share Your Care Requirement', desc: 'Tell us the type of care needed, duration, and patient condition.' },
  { step: '02', title: 'We Match the Right Professional', desc: 'Our team identifies a verified nurse or caretaker suited to your needs.' },
  { step: '03', title: 'Care Begins at Home', desc: 'The professional arrives at your home as scheduled and begins care.' },
  { step: '04', title: 'Ongoing Coordination', desc: 'We stay in touch to ensure quality care and handle any adjustments needed.' },
];

const faqs = [
  { q: 'Are the nurses and caretakers verified?', a: 'Yes. All home care professionals are background-verified and provided through our trusted partner network. We ensure quality and reliability.' },
  { q: 'Can I request a specific shift timing?', a: 'Yes. We offer flexible scheduling including day shifts, night shifts, and 24-hour care based on your requirement.' },
  { q: 'What conditions can be managed at home?', a: 'Post-surgical recovery, wound care, IV therapy, elderly care, physiotherapy support, and general patient monitoring can all be managed at home.' },
  { q: 'How quickly can a nurse or caretaker be arranged?', a: 'We typically arrange home care professionals within 24-48 hours depending on availability and location.' },
];

const whyUs = [
  { icon: Target, title: 'Single Point of Contact', desc: 'One platform for all your healthcare needs from appointments to insurance coordination.' },
  { icon: Sparkles, title: 'Hassle-Free Coordination', desc: 'We handle all the paperwork and coordination so you focus on getting better.' },
  { icon: Globe, title: 'Trusted Partner Network', desc: 'Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.' },
  { icon: PhoneCall, title: '24/7 Member Support', desc: 'Round-the-clock support team ready to assist with any healthcare needs or queries.' },
  { icon: BadgeDollarSign, title: 'Transparent Approach', desc: 'No hidden costs. Clear, upfront pricing for all services and membership plans.' },
];

export default function HomeCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Home Care Services</span>
        </div>
      </div>

      <ServiceHero
        badgeIcon={Home}
        badge="Core Service"
        title="Home Care Services"
        desc="Professional home-based healthcare services coordinated through verified partner professionals supporting recovery, elderly care, and long-term health needs from the comfort of your home."
        steps={steps}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">What's Included</p>
            <h2 className="text-4xl font-bold text-primary mb-3">Home Care Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quality care delivered at your doorstep through verified professionals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 rounded-xl bg-[#0B2E5E] flex items-center justify-center mb-5">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-800"><span className="font-semibold">Note:</span> All home care services are provided through verified partner professionals. Namma Health coordinates the service and does not directly employ medical staff.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Our Advantage</p>
            <h2 className="text-4xl font-bold text-primary mb-3">What Makes Our Home Care Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition duration-300">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Simple Process</p>
            <h2 className="text-4xl font-bold text-primary">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary hover:shadow-md transition duration-300">
                <span className="text-6xl font-black text-primary/10 absolute top-4 right-5 leading-none">{s.step}</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-4">Why Us</p>
            <h2 className="text-4xl font-bold text-primary mb-3">Why Choose Namma Health?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition duration-300">
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

      <section className="py-20 bg-gray-50">
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
          <h2 className="text-4xl font-bold">Need Professional Care at Home?</h2>
          <p className="text-xl text-white/90">We coordinate verified nurses and caretakers right to your doorstep.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 bg-amber-400 text-primary hover:bg-amber-300 font-semibold">
                Book Home Care <ArrowRight className="ml-2 w-4 h-4" />
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
