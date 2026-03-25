import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const sections = [
  {
    number: '1',
    title: 'Membership Fees',
    bullets: [
      'Fees are for access to healthcare coordination and facilitation services only.',
      'Provides eligibility to access coordination services and negotiated discounts via empanelled partners.',
      'Does not cover medical services, treatments, diagnostics, or hospitalization costs.',
      'All medical services are billed directly by the respective healthcare provider.',
    ],
  },
  {
    number: '2',
    title: 'Refund Eligibility',
    content: 'Refund requests are considered only if all of the following conditions are met:',
    bullets: [
      'Request submitted within 7 days of purchase.',
      'Membership has not been activated or used.',
      'No coordination or partner services have been availed.',
    ],
    note: 'Requests submitted after the eligibility period may not be considered.',
  },
  {
    number: '3',
    title: 'Definition of Membership Usage',
    content: 'Membership is considered used/activated if any of the following occur:',
    bullets: [
      'Healthcare coordination assistance is requested.',
      'Appointment coordination is provided.',
      'Diagnostic or hospital partner access is facilitated.',
      'Membership ID is used to obtain benefits or discounts.',
      'Customer support assistance related to healthcare services is provided.',
    ],
    note: 'Once membership usage occurs, refunds are not applicable.',
  },
  {
    number: '4',
    title: 'Non-Refundable Situations',
    bullets: [
      'Membership benefits have been utilized.',
      'Membership validity has started and services used.',
      'Incorrect information provided during registration.',
      'Change of personal preference or non-usage of services.',
      'Suspension or termination due to misuse of membership.',
    ],
  },
  {
    number: '5',
    title: 'Cancellation Policy',
    bullets: [
      'Members may discontinue membership at any time.',
      'Cancellation does not entitle the member to a refund.',
      'Membership benefits remain valid until expiry unless suspended for policy violations.',
    ],
  },
  {
    number: '6',
    title: 'Corporate Memberships',
    content: 'Refunds and cancellations for corporate membership plans are governed by the respective corporate agreement with Namma Health.',
  },
  {
    number: '7',
    title: 'Refund Processing',
    bullets: [
      'Approved refunds processed within 7–14 business days.',
      'Refunds issued through the original payment method wherever possible.',
      'Processing timelines may vary depending on banking systems.',
    ],
  },
  {
    number: '8',
    title: 'Refund Review & Approval',
    content: "All refund requests are subject to internal verification and approval by Namma Health. The Company's decision regarding eligibility is final.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/20" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
        <div className="h-1 w-full bg-white/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Namma Health" width={180} height={52} className="h-14 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-white/70 transition">Home</Link>
            <Link href="/services" className="text-sm font-medium text-white hover:text-white/70 transition">Services</Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-white/70 transition">About Us</Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-white/70 transition">Contact</Link>
          </nav>
          <Button className="bg-white hover:bg-white/90 font-semibold" style={{ color: 'rgb(25, 165, 164)' }}>Book Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">Legal</p>
          <h1 className="text-5xl font-bold text-white mb-4">Membership Fees &amp; Refund Policy</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Understand our membership fee structure, refund eligibility, and cancellation terms.
          </p>
        </div>
      </section>

      {/* Brand Info Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><span className="text-gray-500">Brand:</span> <span className="font-semibold text-foreground">Namma Health</span></div>
            <div><span className="text-gray-500">Operated by:</span> <span className="font-semibold text-foreground">Vinayaka Health Tech Ventures</span></div>
            <div><span className="text-gray-500">Location:</span> <span className="font-semibold text-foreground">Bengaluru, Karnataka, India</span></div>
            <div><span className="text-gray-500">Effective Date:</span> <span className="font-semibold text-foreground">2026</span></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {sections.map((section) => (
            <div key={section.number} className="p-6 rounded-2xl border border-gray-200 hover:border-primary transition duration-200">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {section.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-foreground mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">{section.content}</p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-2 mb-3">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-gray-600 italic">{section.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Contact Box */}
          <div className="p-6 rounded-2xl text-white" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
            <h2 className="text-lg font-bold mb-1">Refund Requests &amp; Queries</h2>
            <p className="text-white/80 text-sm mb-4">Submit your refund request or reach out for any membership fee queries.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info.nammahealth@gmail.com" className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition">
                <Mail className="w-4 h-4" /> info.nammahealth@gmail.com
              </a>
              <a href="tel:+916360108440" className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition">
                <Phone className="w-4 h-4" /> +91-6360108440
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image src="/logo.webp" alt="Namma Health" width={130} height={36} className="h-9 w-auto object-contain brightness-0 invert" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/services/hospital" className="hover:text-white transition">Hospital Services</Link></li>
                <li><Link href="/services/diagnostic" className="hover:text-white transition">Diagnostic Services</Link></li>
                <li><Link href="/services/insurance" className="hover:text-white transition">Health Insurance Support</Link></li>
                <li><Link href="/services/health-checkup" className="hover:text-white transition">Health Check-Up Programs</Link></li>
                <li><Link href="/services/home-care" className="hover:text-white transition">Home Care Services</Link></li>
                <li><Link href="/services/ambulance" className="hover:text-white transition">Ambulance Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
                <li><Link href="/grievance" className="hover:text-white transition">Grievance Policy</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info.nammahealth@gmail.com" className="hover:text-white transition">info.nammahealth@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+916360108440" className="hover:text-white transition">+91-6360108440</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>#198, CMH Road, 2nd Floor, Desk No. 317, Indira Nagar, Bangalore, Karnataka – 560038</span>
                </li>
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
