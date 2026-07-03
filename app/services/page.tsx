'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircleQuestion, Check, Building2, FlaskConical, ShieldCheck, ClipboardCheck, Home, Ambulance, Target, Sparkles, Globe, PhoneCall, BadgeDollarSign } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Building2,
    name: 'Hospital Services',
    desc: 'Doctor appointments, OPD consultations, inpatient admission, surgery booking, and full hospital coordination through our partner network.',
    href: '/services/hospital',
    points: ['Doctor Appointment Booking', 'Inpatient Admission Support', 'Surgery Booking & Coordination', 'OPD Diagnostic Coordination'],
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: FlaskConical,
    name: 'Diagnostic Services',
    desc: 'MRI, CT Scan, Ultrasound, blood tests, PET Scan, EEG, Endoscopy and more via NABL/NABH-accredited centres with report coordination.',
    href: '/services/diagnostic',
    points: ['MRI, CT Scan & Ultrasound', 'Blood & Lab Tests', 'PET Scan, EEG & Endoscopy', 'Report Coordination'],
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: ShieldCheck,
    name: 'Health Insurance Support',
    desc: 'New policy purchase, portability support, insurance consultation, and corporate health insurance services all in one place.',
    href: '/services/insurance',
    points: ['New Policy Purchase', 'Insurance Portability Support', 'Insurance Consultation', 'Corporate Health Insurance'],
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: ClipboardCheck,
    name: 'Health Check-Up Programs',
    desc: 'Corporate, annual preventive, and pre/post check-up coordination with employee wellness program support for individuals and organizations.',
    href: '/services/health-checkup',
    points: ['Annual Preventive Check-Ups', 'Corporate Health Check-Ups', 'Pre & Post Check-Up Coordination', 'Employee Wellness Programs'],
    color: 'bg-teal-50 border-teal-100',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    icon: Home,
    name: 'Home Care Services',
    desc: 'Home nursing and patient caretaker services through verified partner professionals for recovery, elderly care, and long-term needs.',
    href: '/services/home-care',
    points: ['Home Nursing Services', 'Patient Caretaker Services', 'Post-Surgery Recovery Care', 'Elderly Care Support'],
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Ambulance,
    name: 'Ambulance Services',
    desc: 'BLS & ALS ambulances, inter-hospital transfers, and emergency/non-emergency transport available 24/7 through our partner network.',
    href: '/services/ambulance',
    points: ['BLS & ALS Ambulances', 'Inter-Hospital Transfers', 'Emergency Transport 24/7', 'Non-Emergency Transfers'],
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
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

      {/* Hero — centered */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">All-In-One Healthcare Ecosystem</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Our Core Services</h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            End-to-end healthcare coordination across hospitals, diagnostics, insurance, home care, and emergency services — all under one membership.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white font-semibold">
              View Membership Plans
            </Button>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Explore Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Each service is coordinated end-to-end by our dedicated care team.</p>
          </div>

          <div className="space-y-6">
            {services.map((service, i) => (
              <div key={service.name} className={`rounded-2xl border p-8 ${service.color} transition duration-300 hover:shadow-md`}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>

                  {/* Icon + Name side */}
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 md:w-56 text-center md:text-left">
                    <div className={`w-20 h-20 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                      <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
                    <Link href={service.href}>
                      <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm">
                        Learn More <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px self-stretch bg-gray-200" />

                  {/* Content side */}
                  <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
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
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Namma Health?</h2>
              <p className="text-gray-500 mb-10">A trusted partner for all your healthcare coordination needs from a single appointment to complete family care.</p>
              <div className="space-y-5">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
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
          <h2 className="text-5xl font-bold">Ready to Experience Premium Healthcare?</h2>
          <p className="text-xl text-white/90">Join 100+ members enjoying seamless healthcare coordination in Bengaluru</p>
          <a href="https://hospital-membership-platform.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
