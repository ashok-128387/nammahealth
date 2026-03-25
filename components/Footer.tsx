import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span className="font-semibold">Disclaimer:</span> Namma Health is a healthcare coordination and support platform. We do not provide medical treatment or clinical services directly. All medical services are delivered by licensed healthcare providers at partner facilities.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="h-1 w-full" style={{ backgroundColor: 'rgb(25, 165, 164)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <Image src="/logo.webp" alt="Namma Health" width={130} height={36} className="h-9 w-auto object-contain brightness-0 invert" />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-5">Namma Health is a membership-based healthcare coordination ecosystem designed to simplify access to hospitals, diagnostics, insurance, home care, and emergency services.</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgb(25, 165, 164)' }}>One Membership. Complete Care.</p>
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
    </>
  );
}
