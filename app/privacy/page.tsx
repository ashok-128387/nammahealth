import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const sections = [
  {
    number: '1',
    title: 'Data Controller',
    content: 'Namma Health is operated by Vinayaka Health Tech Ventures (Sole Proprietorship Firm), Bengaluru, Karnataka, India. For applicable data protection laws, the Company acts as the Data Fiduciary responsible for processing personal data.',
  },
  {
    number: '2',
    title: 'Data Collected',
    bullets: [
      'Personal Information: Full name, contact number, email, address, date of birth, gender (optional)',
      'Membership Information: Membership ID, plan details, enrollment records, validity period',
      'Health Information (Voluntarily Shared): Medical reports, diagnostics, appointments, treatment references',
      'Payment Information: Transaction ID, payment confirmation, billing details. Card/banking credentials are not stored.',
      'Technical Information: IP address, device type, browser type, website usage data',
    ],
  },
  {
    number: '3',
    title: 'Purpose of Data Collection',
    bullets: [
      'Membership administration and identity verification',
      'Appointment and partner hospital coordination',
      'Diagnostic service facilitation',
      'Customer support and communication',
      'Legal and regulatory compliance',
    ],
    note: 'Data will not be used for unrelated purposes without consent.',
  },
  {
    number: '4',
    title: 'Sensitive Health Data',
    content: 'Health-related information is considered sensitive and will be:',
    bullets: [
      'Collected only when voluntarily shared',
      'Used strictly for healthcare coordination purposes',
      'Processed only with explicit user consent',
    ],
  },
  {
    number: '5',
    title: 'Data Sharing',
    bullets: [
      'Partner hospitals and diagnostic centers',
      'Healthcare service providers involved in coordination',
      'Payment gateways for transactions',
      'Technology service providers supporting the platform',
      'Government/regulatory authorities where legally required',
    ],
    note: 'Namma Health does not sell or trade personal data. Sharing is strictly for service coordination.',
  },
  {
    number: '6',
    title: 'Data Retention',
    content: 'Personal data will be retained only as long as necessary to:',
    bullets: [
      'Manage membership services',
      'Comply with legal obligations',
      'Resolve disputes and maintain transaction records',
    ],
    note: 'Data may be securely deleted once no longer required.',
  },
  {
    number: '7',
    title: 'Data Security',
    bullets: [
      'Secure digital storage systems',
      'Access controls',
      'Encryption and safeguards where applicable',
    ],
    note: 'Absolute security cannot be guaranteed for electronic data.',
  },
  {
    number: '8',
    title: 'User Rights (DPDP Act 2023)',
    bullets: [
      'Access personal data',
      'Request correction of inaccurate information',
      'Withdraw consent for processing',
      'Request deletion of personal data (subject to legal obligations)',
      'Raise complaints regarding data handling',
    ],
    note: 'Requests can be submitted using the contact details below.',
  },
  {
    number: '9',
    title: 'Withdrawal of Consent',
    content: 'Users may withdraw consent for data processing at any time. Withdrawal may affect Namma Health\'s ability to provide certain services.',
  },
  {
    number: '10',
    title: 'Third-Party Websites',
    content: 'The website may contain links to third-party websites. Namma Health is not responsible for their privacy practices. Users should review their privacy policies separately.',
  },
  {
    number: '11',
    title: 'Policy Updates',
    content: 'This Privacy Policy may be updated to reflect changes in services, legal requirements, or operations. Updated versions will be published on the website with a revised effective date.',
  },
  {
    number: '12',
    title: 'Grievance & Data Requests',
    content: 'For privacy concerns, data requests, or complaints, reach us via the contact details below. Requests are typically addressed within 7–15 working days.',
  },
];

export default function PrivacyPage() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            DPDP Act 2023 Aligned — How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Brand Info Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><span className="text-gray-500">Brand:</span> <span className="font-semibold text-foreground">Namma Health</span></div>
            <div><span className="text-gray-500">Operated by:</span> <span className="font-semibold text-foreground">Vinayaka Health Tech Ventures</span></div>
            <div><span className="text-gray-500">Website:</span> <span className="font-semibold text-foreground">www.nammahealthassist.in</span></div>
            <div><span className="text-gray-500">Effective Date:</span> <span className="font-semibold text-foreground">2026</span></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-12 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm leading-relaxed bg-primary/5 border border-primary/20 rounded-xl p-5">
            This Privacy Policy explains how Namma Health, operated by Vinayaka Health Tech Ventures, collects, uses, processes, stores, and protects personal information of users accessing www.nammahealthassist.in and related membership services. By accessing the website or enrolling in membership services, you consent to the collection and use of information as described below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-16">
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
            <h2 className="text-lg font-bold mb-1">Privacy Concerns & Data Requests</h2>
            <p className="text-white/80 text-sm mb-4">Requests are typically addressed within 7–15 working days.</p>
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
