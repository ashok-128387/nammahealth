'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Namma Health" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">Home</Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition">Services</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">About Us</Link>
            <Link href="/contact" className="text-sm font-medium text-primary transition">Contact</Link>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">Get In Touch</p>
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            We're here 24×7. Reach out for memberships, service queries, emergencies, or any healthcare coordination support.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6 text-primary" />,
                title: '24/7 Services',
                lines: ['We are available round the clock', 'for all healthcare coordination needs'],
              },
              {
                icon: <Mail className="w-6 h-6 text-primary" />,
                title: 'Email Us',
                lines: ['info.nammahealth@gmail.com'],
                link: 'mailto:info.nammahealth@gmail.com',
              },
              {
                icon: <MapPin className="w-6 h-6 text-primary" />,
                title: 'Visit Us',
                lines: ['#198, CMH Road, 2nd Floor, Desk No. 317', 'Indira Nagar, Bangalore', 'Karnataka – 560038'],
              },
            ].map((card, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                  {card.lines.map((line, j) =>
                    card.link ? (
                      <a key={j} href={card.link} className="block text-sm text-primary hover:underline">{line}</a>
                    ) : (
                      <p key={j} className="text-sm text-gray-600">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-1">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name <span className="text-primary">*</span></label>
                      <input required type="text" placeholder="Your full name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number <span className="text-primary">*</span></label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Interested In</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-primary transition bg-white">
                      <option value="">Select a service</option>
                      <option>Hospital Services</option>
                      <option>Diagnostic Services</option>
                      <option>Health Insurance Support</option>
                      <option>Health Check-Up Programs</option>
                      <option>Home Care Services</option>
                      <option>Ambulance Services</option>
                      <option>Membership Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-primary">*</span></label>
                    <textarea required rows={4} placeholder="Tell us how we can help you..." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary transition resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex-1">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">#198, CMH Road, Indira Nagar, Bangalore</span>
                </div>
                <iframe
                  title="Namma Health Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9274!2d77.6408!3d12.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c6b5b5b5b5%3A0x0!2sCMH%20Road%2C%20Indira%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick contact */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a href="mailto:info.nammahealth@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    info.nammahealth@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    Available 24 hours, 7 days a week
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span>#198, CMH Road, 2nd Floor, Desk No. 317, Indira Nagar, Bangalore, Karnataka – 560038</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Experience Premium Healthcare?</h2>
          <p className="text-white/90 text-lg">Join 25,000+ members enjoying seamless healthcare coordination</p>
          <Link href="/">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Explore Memberships <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center">⚠️ <span className="font-semibold">Disclaimer:</span> Namma Health is a healthcare coordination and support platform. We do not provide medical treatment or clinical services directly. All medical services are delivered by licensed healthcare providers at partner facilities.</p>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image src="/logo.webp" alt="Namma Health" width={130} height={36} className="h-9 w-auto object-contain brightness-0 invert" />
              </Link>
              <p className="text-white/70">Your trusted healthcare companion</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/services" className="hover:text-white transition">All Services</Link></li>
                <li><Link href="/services/diagnostic" className="hover:text-white transition">Diagnostics</Link></li>
                <li><Link href="/services/hospital" className="hover:text-white transition">Hospital Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" />info.nammahealth@gmail.com</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4" />24/7 Available</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /><span>Indira Nagar, Bangalore, Karnataka – 560038</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2026 Namma Health. All rights reserved.</p>
            <p>Designed & Developed By <a href="https://peakinfosolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline">Peakinfosolution.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
