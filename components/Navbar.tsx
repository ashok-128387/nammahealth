'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Building2, FlaskConical, ShieldCheck, ClipboardCheck, Home, Ambulance, LayoutGrid } from 'lucide-react';
import NextImage from 'next/image';

const serviceLinks = [
  { icon: Building2, name: 'Hospital Services', href: '/services/hospital' },
  { icon: FlaskConical, name: 'Diagnostic Services', href: '/services/diagnostic' },
  { icon: ShieldCheck, name: 'Health Insurance Support', href: '/services/insurance' },
  { icon: ClipboardCheck, name: 'Health Check-Up Programs', href: '/services/health-checkup' },
  { icon: Home, name: 'Home Care Services', href: '/services/home-care' },
  { icon: Ambulance, name: 'Ambulance Services', href: '/services/ambulance' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 border-b border-white/20" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>
      <div className="h-1 w-full bg-white/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <NextImage src="/logo.webp" alt="Namma Health" width={180} height={52} className="h-14 w-auto object-contain" />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition hover:text-white/70 ${pathname === '/' ? 'text-white font-semibold' : 'text-white'}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition hover:text-white/70 text-white ${isServicesActive ? 'font-semibold' : ''}`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
                {/* All Services link */}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b border-gray-100 hover:bg-primary/10 transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <LayoutGrid className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">All Services</p>
                    <p className="text-xs text-gray-400">View complete overview</p>
                  </div>
                </Link>

                {/* Individual services */}
                <div className="py-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition group ${pathname === s.href ? 'bg-primary/5' : ''}`}
                    >
                      <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className={`text-sm font-medium group-hover:text-primary transition ${pathname === s.href ? 'text-primary' : 'text-foreground'}`}>
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`text-sm font-medium transition hover:text-white/70 ${pathname === '/about' ? 'text-white font-semibold' : 'text-white'}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition hover:text-white/70 ${pathname === '/contact' ? 'text-white font-semibold' : 'text-white'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Button className="hidden md:inline-flex bg-white hover:bg-white/90 font-semibold" style={{ color: 'rgb(25, 165, 164)' }}>Book Now</Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-white/20 px-4 py-3 flex flex-col gap-1">
          <Link href="/" onClick={() => setMobileOpen(false)} className={`py-2 text-sm font-medium ${pathname === '/' ? 'text-primary font-semibold' : 'text-foreground'}`}>Home</Link>

          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between py-2 text-sm font-medium text-foreground w-full"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileServicesOpen && (
            <div className="pl-3 flex flex-col gap-1 border-l-2 border-primary/30 mb-1">
              <Link href="/services" onClick={() => setMobileOpen(false)} className="py-1.5 text-sm font-bold text-primary flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> All Services
              </Link>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className={`py-1.5 text-sm flex items-center gap-2 ${pathname === s.href ? 'text-primary font-medium' : 'text-foreground'}`}>
                  <s.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" onClick={() => setMobileOpen(false)} className={`py-2 text-sm font-medium ${pathname === '/about' ? 'text-primary font-semibold' : 'text-foreground'}`}>About Us</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className={`py-2 text-sm font-medium ${pathname === '/contact' ? 'text-primary font-semibold' : 'text-foreground'}`}>Contact</Link>

          <Button className="mt-2 bg-primary hover:bg-primary/90 text-white font-semibold w-full" style={{ backgroundColor: 'rgb(25, 165, 164)' }}>Book Now</Button>
        </div>
      )}
    </header>
  );
}
