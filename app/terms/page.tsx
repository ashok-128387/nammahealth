import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const sections = [
  {
    number: '1',
    title: 'Nature of Platform',
    bullets: [
      'Namma Health is a healthcare access facilitation and coordination platform.',
      'It is NOT a hospital, clinic, practitioner, diagnostic center, pharmacy, insurance company, TPA, ambulance operator, or telemedicine provider.',
      'The platform does NOT provide medical diagnosis, advice, treatment, surgery, hospitalization, insurance coverage, cashless facility, reimbursement, or direct emergency services.',
    ],
  },
  {
    number: '2',
    title: 'Membership Programs',
    bullets: [
      'Individual, Family, and Corporate Memberships available.',
      'Provides coordinated access and eligibility for negotiated discounts at empanelled partners.',
      'Does NOT guarantee discounts, hospital admission, doctor availability, ICU/bed availability, or priority treatment.',
    ],
  },
  {
    number: '3',
    title: 'No Free or Cashless Services',
    bullets: [
      'Membership does not provide free medical services.',
      'Cashless treatment is not available.',
      'Members must pay providers directly.',
      'Membership enables coordination and eligibility for certain discounts only.',
    ],
  },
  {
    number: '4',
    title: 'Prior Coordination',
    bullets: [
      'Members should contact Namma Health before availing services.',
      'Walk-ins without coordination may not qualify for benefits.',
      'Membership ID verification may be required.',
      'Failure to follow procedures may result in denial of discounts.',
    ],
  },
  {
    number: '5',
    title: 'Discount & Billing Disclaimer',
    bullets: [
      'Discounts vary based on provider policies, service category, location, market conditions, and partner agreements.',
      'Final billing decisions are made solely by healthcare providers.',
      'Namma Health is not responsible for billing disputes, pricing changes, withdrawal of discounts, service refusal, or provider errors.',
      'Membership does not guarantee financial savings.',
    ],
  },
  {
    number: '6',
    title: 'No Medical Advice',
    bullets: [
      'All communications are for coordination purposes only.',
      'Namma Health representatives are not medical practitioners.',
      'Users must consult licensed healthcare professionals for diagnosis and treatment.',
    ],
  },
  {
    number: '7',
    title: 'Emergency Disclaimer',
    bullets: [
      'Namma Health does not operate emergency medical services.',
      'In emergencies, contact nearest hospital, government emergency services, or local ambulance.',
      'Emergency coordination assistance, if provided, is facilitative only and without guarantee.',
      'Ambulance coordination is through independent third-party operators; Namma Health is not responsible for delays, transport, medical care during transport, or equipment/personnel issues.',
    ],
  },
  {
    number: '8',
    title: 'User Eligibility',
    bullets: [
      'Membership is open to all ages, including newborns.',
      'Minors must be enrolled under parent/legal guardian supervision.',
      'Users must provide accurate and complete information.',
    ],
  },
  {
    number: '9',
    title: 'Third-Party Providers & Diagnostics',
    bullets: [
      'All providers operate independently; Namma Health does not control clinical decisions or service quality.',
      'Providers may join or leave the network without notice.',
      'Diagnostic services are performed by independent labs; Namma Health is not responsible for errors, delays, or incorrect reports.',
    ],
  },
  {
    number: '10',
    title: 'No Partnership or Agency',
    content: 'Nothing creates a partnership, joint venture, agency, or employment relationship. Providers are independent entities responsible for their services.',
  },
  {
    number: '11',
    title: 'No Guarantee of Outcome',
    content: 'Namma Health does not guarantee medical results, recovery, or treatment success. Outcomes are the responsibility of healthcare providers.',
  },
  {
    number: '12',
    title: 'Upcoming Services Disclaimer',
    bullets: [
      '"Upcoming" services may include pharmacy facilitation, teleconsultation, online consultations, and government scheme assistance.',
      'Availability depends on regulatory approvals.',
      'Government scheme coordination does not imply partnership or authorization.',
    ],
  },
  {
    number: '13',
    title: 'User Obligations & Membership Misuse',
    bullets: [
      'Do not share Membership IDs, misrepresent identity, submit false claims, alter documents, or use membership commercially.',
      'Misuse may result in suspension, termination, or legal action without refund.',
    ],
  },
  {
    number: '14',
    title: 'Payment & Refund Policy',
    bullets: [
      'Membership fees are payable in advance and non-refundable once activated.',
      'Medical service charges are separate and payable directly to providers.',
      'Applicable GST charged as per Indian law.',
    ],
  },
  {
    number: '15',
    title: 'Data Privacy',
    bullets: [
      'Data is collected for membership management and coordination.',
      'Complies with IT Act 2000, IT (SPDI) Rules 2011, DPDP Act 2023.',
      'Data shared only when required for service coordination; not sold.',
    ],
  },
  {
    number: '16',
    title: 'Technology Disclaimer',
    content: 'Namma Health does not guarantee uninterrupted access to website, OTP systems, or support channels and is not liable for cyber incidents beyond reasonable control.',
  },
  {
    number: '17',
    title: 'Limitation of Liability',
    bullets: [
      'Not liable for medical negligence, injury, death, treatment complications, financial loss, emotional distress, or business interruption.',
      'Total liability shall not exceed membership fees paid in the past 12 months.',
    ],
  },
  {
    number: '18',
    title: 'Indemnity & Force Majeure',
    bullets: [
      'Users agree to indemnify Namma Health against claims arising from misuse or violation of Terms.',
      'Not liable for delays/failures due to natural disasters, pandemics, regulatory changes, or events beyond control.',
    ],
  },
  {
    number: '19',
    title: 'Intellectual Property',
    bullets: [
      'All website content, logos, trademarks, text, graphics, and membership materials are the property of Namma Health.',
      'Unauthorized reproduction or commercial use is prohibited and may result in legal action.',
    ],
  },
  {
    number: '20',
    title: 'Modification of Terms',
    content: 'Namma Health reserves the right to modify services, policies, partner networks, and website content. Changes become effective upon publication.',
  },
  {
    number: '21',
    title: 'Electronic Consent',
    content: 'Acceptance via checkbox, OTP, online payment, or digital acknowledgment constitutes legally binding consent under Indian law.',
  },
  {
    number: '22',
    title: 'Grievance Redressal',
    bullets: [
      'Email: info.nammahealth@gmail.com',
      'Customer Support: +91-6360108440',
      'Response time: Within 7 working days',
    ],
  },
  {
    number: '23',
    title: 'Dispute Resolution',
    bullets: [
      'Attempt amicable resolution first.',
      'If unresolved, refer to arbitration under the Arbitration and Conciliation Act, 1996.',
      'Sole arbitrator; Seat & venue: Bengaluru, Karnataka.',
      'Court at Bengaluru has exclusive jurisdiction.',
    ],
  },
  {
    number: '24',
    title: 'Entire Agreement',
    content: 'These Terms constitute the entire agreement between the User and Namma Health and supersede all prior communications.',
  },
];

export default function TermsPage() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Terms of Use · Terms &amp; Conditions · Service Disclaimer — Please read carefully before using our services.
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

      {/* Intro */}
      <section className="pt-12 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm leading-relaxed bg-primary/5 border border-primary/20 rounded-xl p-5">
            By accessing the website, enrolling in membership, making payment, or using any services, you agree to these Terms. These Terms govern your use of Namma Health's platform and services operated by Vinayaka Health Tech Ventures, Bengaluru, Karnataka, India.
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
            <h2 className="text-lg font-bold mb-1">Contact Information</h2>
            <p className="text-white/80 text-sm mb-4">Namma Health · Vinayaka Health Tech Ventures · Bengaluru, Karnataka, India · www.nammahealthassist.in</p>
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
