import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

const sections = [
  {
    title: 'General Disclaimer',
    content: 'Namma Health is a healthcare access facilitation and coordination platform. It assists members in identifying providers, coordinating appointments, and accessing negotiated discounts. The platform does not provide medical services or function as a hospital, clinic, diagnostic center, pharmacy, ambulance, insurance provider, or practitioner.',
  },
  {
    title: 'No Medical Advice',
    content: 'All information shared is for informational purposes only. Namma Health representatives are not licensed medical practitioners. Users must consult qualified medical professionals for any healthcare decisions.',
  },
  {
    title: 'Third-Party Services Disclaimer',
    bullets: [
      'Healthcare services are provided solely by independent third-party providers.',
      'Namma Health does not control medical practices, treatment decisions, or conduct of providers.',
      'Not responsible for quality, negligence, misdiagnosis, outcomes, delays, or billing disputes.',
    ],
  },
  {
    title: 'Diagnostic Services',
    bullets: [
      'All diagnostics performed by independent third-party labs.',
      'Namma Health does not conduct tests, verify results, or interpret findings.',
      'Not responsible for inaccurate reports, delays, or clinical decisions based on reports.',
    ],
  },
  {
    title: 'No Guarantee of Medical Outcome',
    content: "Medical outcomes depend entirely on the healthcare provider's professional judgment. Namma Health does not guarantee any results or recovery.",
  },
  {
    title: 'No Free or Cashless Services',
    content: 'Membership does not provide free services or cashless hospitalization. Members pay providers directly. Namma Health only provides coordination and possible discounts.',
  },
  {
    title: 'Emergency Disclaimer & Ambulance Coordination',
    bullets: [
      'Namma Health does not operate emergency services; contact hospitals or local ambulances directly.',
      'Ambulance coordination is via third-party operators; Namma Health is not responsible for response times or transport conditions.',
    ],
  },
  {
    title: 'Upcoming Services & Discounts',
    bullets: [
      'Services marked as "Upcoming" may not be operational yet.',
      'Discounts depend on provider participation, service, location, and availability.',
      'Final billing and discount decisions are made by providers.',
    ],
  },
  {
    title: 'Technology & Liability',
    bullets: [
      'Platform availability is not guaranteed; downtime may occur due to network or technical issues.',
      'To the maximum extent permitted by law, Namma Health is not liable for direct or indirect damages from platform use or third-party services.',
    ],
  },
  {
    title: 'User Responsibility',
    bullets: [
      'Verify provider credentials independently.',
      'Review medical advice from qualified professionals.',
      'Ensure accurate information during registration.',
      'Contact providers directly for emergencies.',
    ],
  },
  {
    title: 'Intellectual Property & Website Content',
    content: 'All content, logos, trademarks, and designs are the property of Vinayaka Health Tech Ventures. Unauthorized use is prohibited. Website content is for informational purposes only; accuracy is not guaranteed.',
  },
  {
    title: 'Legal Jurisdiction & Contact',
    content: 'This Disclaimer is governed by Indian law. Disputes are subject to arbitration under the Arbitration and Conciliation Act, 1996, seat in Bengaluru, Karnataka. Courts in Bengaluru have exclusive jurisdiction.',
  },
];

export default function DisclaimerPage() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Please read this disclaimer carefully before using Namma Health's services.
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-primary transition duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-foreground mb-3">{section.title}</h2>
                    {section.content && (
                      <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
                    )}
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Box */}
            <div className="p-6 rounded-2xl text-white" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
              <h2 className="text-lg font-bold mb-4">Contact Us</h2>
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
