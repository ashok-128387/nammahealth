import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Heart, Shield, Users, Clock, Handshake, Target, Eye, Building2, FlaskConical, ShieldCheck, ClipboardCheck, Home, Ambulance } from 'lucide-react';
import { stats } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { icon: Building2, name: 'Hospital Services', desc: 'End-to-end coordination for OPD, surgeries, inpatient care, and post-discharge follow-up across our partner hospitals in Bengaluru.' },
  { icon: FlaskConical, name: 'Diagnostic Services', desc: 'Blood tests, imaging (X-ray, CT, MRI), ECG, and home sample collection with same-day digital reports.' },
  { icon: ShieldCheck, name: 'Health Insurance Services', desc: 'Cashless hospitalization, claim support, and customized coverage plans for individuals, families, and corporates.' },
  { icon: ClipboardCheck, name: 'Health Check-Up Services', desc: 'Preventive full-body screening packages tailored by age, gender, and lifestyle for early detection.' },
  { icon: Home, name: 'Home Care Services', desc: 'Trained nurses, physiotherapists, and caregivers at your doorstep for recovery and ongoing care.' },
  { icon: Ambulance, name: 'Ambulance Services', desc: '24x7 equipped ambulances with trained paramedics and GPS tracking for rapid emergency response.' },
];

const forCustomers = [
  { icon: Heart, title: 'Personalised Care Plans', desc: 'Every member gets a dedicated care coordinator who understands your health history and needs.' },
  { icon: Clock, title: '24x7 Support', desc: 'Round-the-clock helpline for emergencies, appointments, and any healthcare query always available.' },
  { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden charges. Clear, upfront costs for every service with member-exclusive discounts.' },
  { icon: Users, title: 'Family & Corporate Plans', desc: 'Flexible membership tiers for individuals, families, and organisations of all sizes.' },
  { icon: Check, title: 'Hassle-Free Coordination', desc: 'We handle paperwork, pre-authorisations, and follow-ups so you can focus on recovery.' },
  { icon: Handshake, title: 'Trusted Partner Network', desc: 'Access to 20+ accredited hospitals, certified labs, and verified healthcare professionals in Bengaluru.' },
];

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To make quality healthcare accessible, affordable, and stress-free for every individual and family through seamless coordination and a trusted partner network.' },
  { icon: Eye, title: 'Our Vision', desc: "To be India's most trusted healthcare coordination ecosystem where every person receives the right care, at the right time, without barriers." },
  { icon: Heart, title: 'Our Values', desc: 'Compassion, transparency, reliability, and innovation guide every decision we make from the services we offer to the partners we choose.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">About Us</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                All-In-One Healthcare Ecosystem
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Your 24x7 Complete Healthcare Coordination Partner</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services. Through a trusted network of partner hospitals, diagnostic centres, insurance providers, and healthcare service partners, we coordinate end-to-end healthcare needs ensuring affordability, transparency, and round-the-clock support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                From doctor appointments and surgeries to diagnostics, insurance guidance, home care, and ambulance services, Namma Health manages your healthcare journey so you can focus on what matters most your recovery.
              </p>
              <div className="flex gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-gray-300 text-foreground hover:bg-gray-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[480px]">
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(25,165,164,0.15) 0%, transparent 70%)' }} />
              <Image
                src="/d28d5a29-7c53-4cc3-8a1a-fb2fa7a352ab_removalai_preview.webp"
                alt="Namma Health"
                width={520}
                height={560}
                className="relative w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What Drives Us</p>
            <h2 className="text-4xl font-bold text-foreground">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">More Than a Healthcare Platform</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Namma Health was founded with a single belief that navigating healthcare should never be a burden. Whether it's finding the right specialist, coordinating a surgery, or managing insurance claims, the process is often overwhelming for patients and families.</p>
                <p>We built Namma Health to change that. As a membership-based ecosystem, we act as your personal healthcare manager connecting you to the right resources, at the right time, with complete transparency and care.</p>
                <p>Our team of experienced healthcare coordinators, medical professionals, and technology experts work together to ensure every member receives seamless, dignified, and affordable care.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '20+', label: 'Partner Hospitals' },
                { number: '50+', label: 'Healthcare Professionals' },
                { number: '100+', label: 'Members Served' },
                { number: '1', label: 'City: Bengaluru' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:border-primary transition">
                  <p className="text-3xl font-bold text-primary mb-1">{item.number}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">For Customers</p>
            <h2 className="text-4xl font-bold text-foreground">Why Members Choose Us</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">Everything we do is designed around one goal making your healthcare experience effortless.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forCustomers.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-5xl font-bold">Ready to Experience Premium Healthcare?</h2>
          <p className="text-xl text-white/90">Join 100+ members enjoying seamless healthcare coordination in Bengaluru</p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
            Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
