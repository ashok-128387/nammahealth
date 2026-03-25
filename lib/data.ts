import { Hospital, FlaskConical, ShieldCheck, HeartPulse, Home, Ambulance, ClipboardList, CalendarCheck, Target, Globe, Sparkles, BadgeDollarSign, PhoneCall, Star, Users, Smile, Building2, Microscope } from 'lucide-react';

export const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    experience: "18 years",
    qualifications: "MD, DM (Cardiology), FACC",
    image: "cardiologist",
    bio: "Renowned cardiac specialist with expertise in interventional cardiology and complex heart conditions.",
    rating: 4.9,
    consultations: 2540,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "General Physician",
    experience: "14 years",
    qualifications: "MD (General Medicine), Fellowship in Internal Medicine",
    image: "physician",
    bio: "Compassionate healthcare professional specializing in preventive medicine and wellness.",
    rating: 4.8,
    consultations: 1890,
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialization: "Orthopedic Surgeon",
    experience: "16 years",
    qualifications: "MS (Orthopedics), MCh (Joint Replacement)",
    image: "surgeon",
    bio: "Expert in joint replacement and sports medicine with minimally invasive techniques.",
    rating: 4.9,
    consultations: 2120,
  },
  {
    id: 4,
    name: "Dr. Neha Gupta",
    specialization: "Neurologist",
    experience: "12 years",
    qualifications: "MD (Neurology), DNB Neurology",
    image: "neurologist",
    bio: "Specialist in neurological disorders with advanced diagnostic and treatment expertise.",
    rating: 4.8,
    consultations: 1650,
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialization: "Diabetologist",
    experience: "20 years",
    qualifications: "MD (Medicine), Diploma in Diabetology",
    image: "diabetologist",
    bio: "Leading diabetes specialist with comprehensive metabolic disorder management.",
    rating: 4.9,
    consultations: 3200,
  },
];

export const services = [
  {
    id: 1,
    name: "Diagnostic Services",
    shortDesc: "Comprehensive diagnostic testing and imaging",
    fullDesc: "Advanced diagnostic services including blood tests, imaging (X-ray, CT, MRI, Ultrasound), ECG, and specialized investigations with fastest turnaround times.",
    icon: "microscope",
    features: [
      "Advanced laboratory testing",
      "Digital imaging facilities",
      "Pathology expertise",
      "Home collection service",
      "Report accessibility online",
    ],
    price: "From ₹500",
  },
  {
    id: 2,
    name: "Doctor Appointment Booking",
    shortDesc: "Easy online doctor consultation",
    fullDesc: "Book appointments with experienced doctors across multiple specializations. Online and offline consultation options available with flexible scheduling.",
    icon: "calendar",
    features: [
      "126+ partner doctors",
      "Multiple specializations",
      "Instant booking",
      "Video consultation",
      "Prescription management",
    ],
    price: "From ₹200",
  },
  {
    id: 3,
    name: "Hospital Services",
    shortDesc: "Seamless hospital care coordination",
    fullDesc: "Coordinated hospital services including OPD consultations, surgery coordination, inpatient care, and emergency support across network hospitals.",
    icon: "hospital",
    features: [
      "Pre-authorization services",
      "Surgery coordination",
      "Inpatient support",
      "Emergency assistance",
      "Post-discharge follow-up",
    ],
    price: "Membership based",
  },
  {
    id: 4,
    name: "Health Insurance Services",
    shortDesc: "Comprehensive health coverage plans",
    fullDesc: "Customized health insurance solutions with cashless hospitalization, pre and post-hospitalization benefits, and comprehensive coverage.",
    icon: "shield",
    features: [
      "Cashless hospitalization",
      "Preventive coverage",
      "Maternity benefits",
      "Critical illness cover",
      "24/7 claim support",
    ],
    price: "From ₹3,000/month",
  },
  {
    id: 5,
    name: "Home Care Services",
    shortDesc: "Professional healthcare at home",
    fullDesc: "Trained nursing staff and healthcare professionals available for home-based care including wound management, physiotherapy, and patient monitoring.",
    icon: "home",
    features: [
      "Trained nurses available",
      "Wound management",
      "Physiotherapy sessions",
      "Vital monitoring",
      "Medication management",
    ],
    price: "From ₹800/visit",
  },
  {
    id: 6,
    name: "Ambulance Services",
    shortDesc: "24/7 emergency ambulance support",
    fullDesc: "Equipped ambulances with trained paramedics available round the clock for medical emergencies with GPS tracking and quick response.",
    icon: "ambulance",
    features: [
      "24/7 availability",
      "Trained paramedics",
      "GPS tracking",
      "ICU ambulances",
      "Quick response time",
    ],
    price: "From ₹1,500",
  },
  {
    id: 7,
    name: "Health Check-up Packages",
    shortDesc: "Preventive health screening packages",
    fullDesc: "Comprehensive health check-up packages designed for different age groups and lifestyles to ensure early detection and prevention.",
    icon: "heartpulse",
    features: [
      "Full body screening",
      "Age-specific packages",
      "Women's health packages",
      "Executive wellness",
      "Annual preventive care",
    ],
    price: "From ₹2,500",
  },
  {
    id: 8,
    name: "OPD Services",
    shortDesc: "Outpatient department facilities",
    fullDesc: "Well-equipped OPD services with experienced doctors, quick consultation, and easy follow-up care management.",
    icon: "clipboard",
    features: [
      "Quick check-ins",
      "Multiple specialists",
      "Prescription management",
      "Follow-up coordination",
      "Online reports",
    ],
    price: "From ₹300",
  },
];

export const testimonials = [
  {
    name: "Rajesh Verma",
    title: "Software Engineer, Bangalore",
    content: "Namma Health made my healthcare journey so smooth. The doctor appointment booking was hassle-free and the consultation was professional.",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    title: "Business Owner, Mysore",
    content: "Excellent service! The health insurance coordination was seamless. I was impressed with their attention to detail and customer support.",
    rating: 5,
  },
  {
    name: "Vikram Sharma",
    title: "Corporate Professional, Pune",
    content: "Their diagnostic services are top-notch with quick turnaround times. The home collection service saved me so much time.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    title: "Teacher, Kochi",
    content: "The 24/7 member support is fantastic. Whenever I had questions, they responded promptly and professionally.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    title: "Retired Government Officer, Chennai",
    content: "At my age, navigating hospitals was stressful. Namma Health's coordinators handled everything — from admission to discharge. Truly a blessing.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    title: "Homemaker, Coimbatore",
    content: "Booked a full-body health check-up for my entire family in minutes. The reports were online the same day. Highly recommend!",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    title: "Startup Founder, Hyderabad",
    content: "The corporate membership for my team has been a game-changer. Employees feel cared for and productivity has improved significantly.",
    rating: 5,
  },
  {
    name: "Deepa Menon",
    title: "Nurse, Trivandrum",
    content: "Even as a healthcare professional, I was amazed by how efficiently Namma Health coordinated my mother's surgery. Exceptional service.",
    rating: 5,
  },
  {
    name: "Karthik Iyer",
    title: "Chartered Accountant, Mumbai",
    content: "The ambulance was at our door in under 10 minutes during an emergency. Their response time and professionalism are unmatched.",
    rating: 5,
  },
  {
    name: "Lakshmi Patel",
    title: "College Student, Ahmedabad",
    content: "Affordable student membership with great benefits. Got my blood tests done at home and the doctor consultation was super easy to book.",
    rating: 5,
  },
];

export const faqItems = [
  {
    question: "What is Namma Health?",
    answer: "Namma Health is a membership-based healthcare coordination ecosystem that connects you to 126+ partner hospitals, experienced doctors, and comprehensive health services including diagnostics, insurance, and home care.",
  },
  {
    question: "Do you provide medical treatment directly?",
    answer: "No, we don't provide treatment directly. We coordinate your healthcare journey by connecting you with qualified doctors, partner hospitals, and insurance services for seamless care.",
  },
  {
    question: "How does the membership work?",
    answer: "Our membership plans offer exclusive benefits including discounted consultations, hospital coordination, health insurance options, priority appointments, and 24/7 support.",
  },
  {
    question: "Can Namma Health help during emergencies?",
    answer: "Yes! Our 24/7 emergency support includes ambulance coordination, emergency room assistance, and immediate doctor consultations when you need urgent care.",
  },
  {
    question: "How do I book an appointment with a doctor?",
    answer: "Simply visit our appointment section, select your preferred doctor and specialization, choose a time slot, and you're booked! Video consultations are also available.",
  },
  {
    question: "Is my data secure with Namma Health?",
    answer: "Absolutely. We follow strict data protection protocols and compliance standards to ensure your medical records and personal information are completely secure and confidential.",
  },
];

export const stats = [
  { number: "126+", label: "Partner Hospitals" },
  { number: "25k+", label: "Members Served" },
  { number: "98%",  label: "Member Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

export const whyChooseUs = [
  {
    title: "Single Point of Contact",
    description: "One platform for all your healthcare needs - from appointments to insurance coordination.",
    icon: "target",
  },
  {
    title: "Network of Excellence",
    description: "Access to 126+ trusted partner hospitals and 1000+ experienced healthcare professionals.",
    icon: "globe",
  },
  {
    title: "Hassle-Free Coordination",
    description: "We handle all the paperwork and coordination so you focus on getting better.",
    icon: "sparkles",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. Clear, upfront pricing for all services and membership plans.",
    icon: "badgedollar",
  },
  {
    title: "24/7 Member Support",
    description: "Round-the-clock support team ready to assist with any healthcare needs or queries.",
    icon: "phonecall",
  },
  {
    title: "Trusted By Thousands",
    description: "Thousands of satisfied members trust us with their healthcare coordination needs.",
    icon: "star",
  },
];
