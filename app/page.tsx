'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Star, MapPin, Phone, Mail, MessageCircleQuestion, ChevronLeft, ChevronRight, Quote, User, Users, Building2, Hospital, FlaskConical, ShieldCheck, HeartPulse, Home as HomeIcon, Ambulance, Target, Globe, Sparkles, BadgeDollarSign, PhoneCall, MoveRight, AlertTriangle, Clock } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { services, testimonials, stats, whyChooseUs } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">All-In-One Healthcare Ecosystem</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Your 24&times;7 Complete Healthcare<br />Coordination Partner
                </h1>
                <p className="text-lg text-gray-600">
                  Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services.
                </p>
                <p className="text-gray-600">
                  Through a trusted network of partner hospitals, diagnostic centres, and service providers, we coordinate end-to-end healthcare needs — ensuring affordability, transparency, and 24/7 support.
                </p>
                <p className="text-sm font-semibold text-primary flex items-center gap-2"><MoveRight className="w-4 h-4" /> One Membership. Multiple Services. Complete Care.</p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-foreground hover:bg-gray-50">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image src="/images/doctor-hero.jpg" alt="Professional doctor" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12">Why Choose Namma Health</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Benefits List */}
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    {item.icon === 'target' && <Target className="w-5 h-5 text-white" />}
                    {item.icon === 'globe' && <Globe className="w-5 h-5 text-white" />}
                    {item.icon === 'sparkles' && <Sparkles className="w-5 h-5 text-white" />}
                    {item.icon === 'badgedollar' && <BadgeDollarSign className="w-5 h-5 text-white" />}
                    {item.icon === 'phonecall' && <PhoneCall className="w-5 h-5 text-white" />}
                    {item.icon === 'star' && <Star className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Healthcare Team Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/healthcare-team.jpg"
                alt="Healthcare team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">All-In-One Healthcare Ecosystem</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Core Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">End-to-end healthcare coordination across hospitals, diagnostics, insurance, home care, and emergency services — all under one membership.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                        {[
              { icon: <Hospital className="w-7 h-7 text-primary" />, name: 'Hospital Services', desc: 'Doctor appointments, OPD consultations, inpatient admission, surgery booking, and full hospital coordination.', href: '/services/hospital' },
              { icon: <FlaskConical className="w-7 h-7 text-primary" />, name: 'Diagnostic Services', desc: 'MRI, CT Scan, Ultrasound, blood tests, PET Scan, EEG, Endoscopy and more via NABL/NABH-accredited centres.', href: '/services/diagnostic' },
              { icon: <ShieldCheck className="w-7 h-7 text-primary" />, name: 'Health Insurance Support', desc: 'New policy purchase, portability support, insurance consultation, and corporate health insurance services.', href: '/services/insurance' },
              { icon: <HeartPulse className="w-7 h-7 text-primary" />, name: 'Health Check-Up Programs', desc: 'Corporate, annual preventive, and pre/post check-up coordination with employee wellness program support.', href: '/services/health-checkup' },
              { icon: <HomeIcon className="w-7 h-7 text-primary" />, name: 'Home Care Services', desc: 'Home nursing and patient caretaker services through verified partner professionals.', href: '/services/home-care' },
              { icon: <Ambulance className="w-7 h-7 text-primary" />, name: 'Ambulance Services', desc: 'BLS & ALS ambulances, inter-hospital transfers, and emergency/non-emergency transport available 24/7.', href: '/services/ambulance' },
            ].map((service, i) => (
              <div key={i} className="group flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">{service.icon}</div>
                <h3 className="font-bold text-lg text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.desc}</p>
                <Link href={service.href} className="mt-5">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
                    Know More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-gray-600 text-sm"><span className="font-semibold text-foreground">Coming Soon:</span> Pharmacy Services &middot; Tele-Consultation &middot; Government Health Scheme Coordination</p>
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Member Stories</p>
              <h2 className="text-4xl font-bold text-white">What Our Members Say</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById('testimonial-track');
                  if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:text-white text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('testimonial-track');
                  if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:text-white text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            id="testimonial-track"
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] snap-start flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
              >
                <div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = document.getElementById('testimonial-track');
                  if (el) el.scrollTo({ left: i * 324, behavior: 'smooth' });
                }}
                className="w-2 h-2 rounded-full bg-white/40 hover:bg-white transition-colors"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Pricing</p>
            <h2 className="text-4xl font-bold text-foreground mb-3">Membership Plans</h2>
            <p className="text-lg text-gray-500">Choose the perfect healthcare plan for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">

            {/* Individual Plan */}
            <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 shadow-sm hover:shadow-lg transition duration-300">
              <div className="absolute -top-3.5 left-6">
                <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">Popular</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Individual Plan</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for personal healthcare with simple and stress-free access.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Priority appointment & service coordination', 'Diagnostic & hospital support', 'Insurance consultation assistance', 'Emergency assistance support', '24×7 member helpline'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Family Plan */}
            <div className="relative flex flex-col rounded-2xl border-2 bg-white p-8 shadow-sm hover:shadow-lg transition duration-300" style={{ borderColor: 'rgb(25, 165, 164)' }}>
              <div className="absolute -top-3.5 left-6">
                <span className="text-white text-xs font-bold px-4 py-1 rounded-full" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>Best Value</span>
              </div>
              {/* Highlighted card */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(25,165,164,0.06) 0%, rgba(25,165,164,0.02) 100%)' }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(25,165,164,0.15)' }}>
                <Users className="w-6 h-6" style={{ color: 'rgb(25, 165, 164)' }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Family Plan</h3>
              <p className="text-gray-500 text-sm mb-6">Complete healthcare support for your entire family in one plan.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['All Individual Plan benefits', 'Multi-member healthcare coordination', 'Centralized medical support', 'Preventive care planning', 'Emergency & hospitalization assistance', 'Dedicated family care manager'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(25,165,164,0.15)' }}>
                      <Check className="w-3 h-3" style={{ color: 'rgb(25, 165, 164)' }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full text-white font-semibold" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
                Choose Plan <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Corporate Plan */}
            <div className="relative flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-primary transition duration-300">
              <div className="absolute -top-3.5 left-6">
                <span className="bg-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full">Enterprise</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Corporate Plan</h3>
              <p className="text-gray-500 text-sm mb-6">Smart healthcare solutions designed for organizations and teams.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['All Family Plan benefits', 'Employee healthcare coordination', 'Corporate health check-up camps', 'Insurance & hospital support services', 'Wellness & preventive care programs', 'Dedicated account manager'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-gray-300 text-foreground hover:bg-gray-50 font-semibold">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageCircleQuestion className="w-4 h-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: 'What is Namma Health?',
                a: 'Namma Health is a comprehensive healthcare coordination platform that connects you with 126+ partner hospitals, diagnostic labs, and specialist doctors — making quality healthcare accessible, affordable, and hassle-free.',
              },
              {
                q: 'Do you provide medical treatment directly?',
                a: 'No. We are a healthcare coordination and facilitation service. We connect you with the right hospitals, doctors, and diagnostic centers, and manage the entire process end-to-end on your behalf.',
              },
              {
                q: 'How does the membership work?',
                a: 'You can choose from Individual, Family, or Corporate memberships. Membership gives you priority access, end-to-end coordination, exclusive discounts, and 24×7 support for all healthcare services.',
              },
              {
                q: 'Can Namma Health help during emergencies?',
                a: 'Yes. Our 24×7 support team is always available to assist during medical emergencies — from ambulance coordination to hospital admission and real-time updates for your family.',
              },
              {
                q: 'How do I book appointments or services?',
                a: 'You can book through our website, mobile app, or by calling our helpline at 1800-NAMMA. Our care coordinators will handle everything from scheduling to reminders.',
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-gray-200 rounded-xl px-6 hover:border-primary transition-colors duration-200"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-5xl font-bold">Ready to Experience Premium Healthcare?</h2>
          <p className="text-xl text-white/90">
            Join 25,000+ members enjoying seamless healthcare coordination
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
            Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> <span className="font-semibold">Disclaimer:</span> Namma Health is a healthcare coordination and support platform. We do not provide medical treatment or clinical services directly. All medical services are delivered by licensed healthcare providers at partner facilities.</p>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        {/* Teal accent top bar */}
        <div className="h-1 w-full" style={{ backgroundColor: 'rgb(25, 165, 164)' }} />

        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <Image src="/logo.webp" alt="Namma Health" width={130} height={36} className="h-9 w-auto object-contain brightness-0 invert" />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-5">Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services.</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgb(25, 165, 164)' }}>One Membership. Complete Care.</p>
              {/* Social icons */}
              <div className="flex gap-3 mt-5">
                {[
                  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                  { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M6.5 2h11A4.5 4.5 0 0 1 22 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-11A4.5 4.5 0 0 1 6.5 2z' },
                  { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                  { label: 'Twitter/X', path: 'M4 4l16 16M4 20L20 4' },
                ].map(({ label, path }) => (
                  <a key={label} href="#" aria-label={label} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition">
                    <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Our Services</h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                <li><Link href="/services/hospital" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Hospital Services</Link></li>
                <li><Link href="/services/diagnostic" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Diagnostic Services</Link></li>
                <li><Link href="/services/insurance" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Health Insurance Support</Link></li>
                <li><Link href="/services/health-checkup" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Health Check-Up Programs</Link></li>
                <li><Link href="/services/home-care" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Home Care Services</Link></li>
                <li><Link href="/services/ambulance" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Ambulance Services</Link></li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Company</h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Contact Us</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Disclaimer</Link></li>
                <li><Link href="/grievance" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Grievance Policy</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-primary inline-block" />Refund Policy</Link></li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="mailto:info.nammahealth@gmail.com" className="flex items-start gap-3 text-white/60 hover:text-white transition group">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 group-hover:border-primary transition" style={{ backgroundColor: 'rgba(25,165,164,0.15)' }}>
                      <Mail className="w-3.5 h-3.5" style={{ color: 'rgb(25,165,164)' }} />
                    </span>
                    <span>info.nammahealth@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+916360108440" className="flex items-start gap-3 text-white/60 hover:text-white transition group">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 group-hover:border-primary transition" style={{ backgroundColor: 'rgba(25,165,164,0.15)' }}>
                      <Phone className="w-3.5 h-3.5" style={{ color: 'rgb(25,165,164)' }} />
                    </span>
                    <span>+91-6360108440</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10" style={{ backgroundColor: 'rgba(25,165,164,0.15)' }}>
                    <MapPin className="w-3.5 h-3.5" style={{ color: 'rgb(25,165,164)' }} />
                  </span>
                  <span>#198, CMH Road, 2nd Floor, Desk No. 317, Indira Nagar, Bangalore, Karnataka – 560038</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>&copy; 2026 Namma Health · Vinayaka Health Tech Ventures. All rights reserved.</p>
            <p>Designed &amp; Developed By{' '}
              <a href="https://peakinfosolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline underline-offset-2">Peakinfosolution.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
