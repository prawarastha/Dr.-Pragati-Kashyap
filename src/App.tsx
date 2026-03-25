/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  Activity, 
  Stethoscope, 
  Home, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Clock, 
  User,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Heart,
  Sparkles,
  ArrowRight
} from "lucide-react";
import a1 from './assets/a1.png';
import a2 from './assets/a2.jpeg';
import a3 from './assets/a3.jpeg';
import a4 from './assets/a4.png';
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/919521865475?text=Hi%20Doctor,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session";
const PHONE_1 = "9521865475";

const ServiceCard = ({ title, subtitle, items, icon: Icon }: { title: string, subtitle: string, items: string[], icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-[32px] shadow-sm border border-brand-primary/10 hover:shadow-md transition-shadow"
  >
    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-brand-dark">{title}</h3>
    <p className="text-brand-primary font-medium mb-6 text-sm">{subtitle}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-[32px] border border-brand-primary/5 shadow-sm"
  >
    <div className="flex gap-1 mb-4 text-brand-accent">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-brand-dark/80 text-lg leading-relaxed mb-6 italic">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold">
        {name.charAt(0)}
      </div>
      <p className="font-bold text-brand-dark">{name}</p>
    </div>
  </motion.div>
);

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-12 h-12">
      <motion.div 
        className="absolute inset-0 bg-brand-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-primary/20"
      />
      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center border-2 border-brand-primary overflow-hidden">
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-primary fill-none stroke-current stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H7M17 19H7M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" className="opacity-10" />
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-display font-bold text-xl tracking-tight text-brand-dark leading-none">
        Dr. Pragati <span className="text-brand-primary">Kashyap</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mt-1.5">
        Movement & Recovery
      </span>
    </div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-secondary selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-secondary/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Services", "Home Visits", "Contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className="text-sm font-semibold text-brand-dark/70 hover:text-brand-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={`tel:${PHONE_1}`}
              className="bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-secondary border-t border-brand-primary/10 shadow-2xl p-8 flex flex-col gap-6"
          >
            {["About", "Services", "Home Visits", "Contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className="text-left py-2 text-xl font-bold text-brand-dark"
              >
                {item}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a href={WHATSAPP_LINK} className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-2xl font-bold text-sm">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href={`tel:${PHONE_1}`} className="flex items-center justify-center gap-2 bg-brand-primary text-white py-4 rounded-2xl font-bold text-sm">
                <Phone size={20} /> Call
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-5 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
              <Sparkles size={14} />
              Personalized Healing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-[1.1] mb-4">
              Pain Relief & Physiotherapy <span className="text-brand-primary italic">at Your Home</span>
            </h1>
            <p className="text-brand-primary font-bold text-lg mb-8">Dr. Pragati Kashyap | Physiotherapist</p>
            <p className="text-xl md:text-2xl text-brand-dark/70 mb-10 leading-relaxed max-w-xl">
              Whether it’s back pain, a sports injury, or post-surgery recovery — get expert physiotherapy at home and start feeling better, faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-[24px] text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 group"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                Book on WhatsApp
              </a>
              <a 
                href={`tel:${PHONE_1}`}
                className="flex items-center justify-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-[24px] text-lg font-bold hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/10 group"
              >
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
                Call Now
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-secondary bg-brand-primary/20 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Patient" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-brand-dark/60">
                <span className="text-brand-primary">500+</span> Happy Patients Recovered
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                src={a4} 
                alt="Dr. Pragati Kashyap" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[32px] shadow-2xl z-20 border border-brand-primary/5 max-w-[240px]">
              <p className="text-brand-primary font-bold text-sm mb-1">Expert Care</p>
              <p className="text-xl font-bold text-brand-dark mb-2">Dr. Pragati Kashyap</p>
              <p className="text-xs text-brand-dark/60 font-medium leading-relaxed">Physiotherapist at Health India Hospital</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full -z-10 blur-3xl" />
            <div className="absolute top-1/2 -left-20 w-40 h-40 bg-brand-accent/10 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src={a2} alt="Physiotherapy Treatment" className="rounded-[40px] shadow-lg" />
                  <div className="bg-brand-primary p-8 rounded-[40px] text-white">
                    <p className="text-4xl font-bold mb-2">5+</p>
                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Trust</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-brand-accent p-8 rounded-[40px] text-white">
                    <p className="text-4xl font-bold mb-2">1k+</p>
                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Sessions Done</p>
                  </div>
                  <img src={a3} alt="Physiotherapy Treatment" className="rounded-[40px] shadow-lg" />
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest mb-6">
                <Heart size={16} fill="currentColor" />
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">
                Care That Understands Your Pain
              </h2>
              <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
                <p>
                  Pain isn’t just physical — it affects how you move, work, and live your daily life.
                </p>
                <p>
                  <span className="font-bold text-brand-dark">Dr. Pragati Kashyap</span>, a physiotherapist at Health India Hospital, focuses on not just treating symptoms, but understanding the root cause of your discomfort.
                </p>
                <p>
                  Every session is designed around you — your lifestyle, your body, and your recovery goals. With home visits, you receive expert care in a space where you feel most comfortable.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary">
                    <User size={24} />
                  </div>
                  <p className="font-bold text-brand-dark">Human Centered</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <p className="font-bold text-brand-dark">Trust Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-brand-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-6">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8">What We Help You With</h3>
            <p className="text-xl text-brand-dark/60">
              We translate medical expertise into real-life solutions for your daily comfort and long-term health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Everyday Pain Relief"
              subtitle="Struggling with pain that just won’t go away?"
              icon={Activity}
              items={[
                "Neck stiffness from phone/laptop use",
                "Shoulder pain limiting movement",
                "Lower back pain affecting routine",
                "Sciatica shooting pain",
                "Knee or ankle pain while walking"
              ]}
            />
            <ServiceCard 
              title="Injury & Surgery Recovery"
              subtitle="Recover safely and regain your strength."
              icon={ShieldCheck}
              items={[
                "Sports injuries stopping activity",
                "Recovery after ACL or meniscus surgery",
                "Post knee or hip replacement rehab",
                "Shoulder surgery recovery",
                "Regaining mobility after long-term pain"
              ]}
            />
            <ServiceCard 
              title="Advanced Therapies"
              subtitle="Targeted treatments for faster relief."
              icon={Sparkles}
              items={[
                "Dry needling for deep muscle relief",
                "Cupping therapy for circulation",
                "Myofascial release for tight muscles",
                "Posture correction for long-term results",
                "Women’s health specialized care"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Home Visit Section */}
      <section id="home-visits" className="py-16 bg-brand-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-6">Comfortable Healing</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Healing Should Be Comfortable</h3>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                When you’re in pain, even stepping out of your home can feel exhausting. That’s why Dr. Pragati brings physiotherapy to you — so you can focus on healing without the stress of travel.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "No Waiting, No Travel", desc: "Just care at your doorstep." },
                  { title: "One-on-One Attention", desc: "Focused care every session." },
                  { title: "Designed Around You", desc: "Fits your daily routine." },
                  { title: "Relaxed Experience", desc: "More effective recovery at home." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-3 bg-white text-brand-primary px-10 py-5 rounded-[24px] text-lg font-bold hover:bg-brand-secondary transition-all shadow-2xl"
              >
                <MessageCircle size={24} />
                Request Home Visit
              </a>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square rounded-[80px] overflow-hidden shadow-2xl border-[16px] border-white/10">
                <img 
                  src={a1} 
                  alt="Home Physiotherapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-6">Patient Stories</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8">Real People, Real Recovery</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Advait P."
              text="I ignored my back pain for months until it got unbearable. Within a few sessions, I could feel a huge difference."
            />
            <TestimonialCard 
              name="Ishani V."
              text="The best part was getting treated at home — it made recovery so much easier and stress-free."
            />
            <TestimonialCard 
              name="Basavaraj H."
              text="Very patient and understanding approach. Helped me get back to normal after surgery much faster than expected."
            />
            <TestimonialCard 
              name="Tanvi B."
              text="Dr. Pragati is very professional. She explained the root cause of my neck pain and the exercises really helped."
            />
            <TestimonialCard 
              name="Gowramma S."
              text="Excellent home visit service. Saved me so much time and the treatment was very effective for my sports injury."
            />
            <TestimonialCard 
              name="Kairav G."
              text="I highly recommend her for post-surgery rehab. She is very gentle yet thorough with the exercises."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-brand-primary/5">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-24">
                <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-6">Get In Touch</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">Let’s Start Your Recovery</h3>
                <p className="text-xl text-brand-dark/60 mb-12 leading-relaxed">
                  The sooner you begin treatment, the faster you recover. Don’t wait for the pain to get worse.
                </p>
                
                <div className="space-y-10 mb-16">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-primary font-bold uppercase tracking-widest mb-2">Call Directly</p>
                      <div className="flex flex-col gap-2">
                        <a href={`tel:${PHONE_1}`} className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors">
                          +91 {PHONE_1}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageCircle size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">WhatsApp Chat</p>
                      <a href={WHATSAPP_LINK} className="text-xl font-bold text-brand-dark hover:text-emerald-600 transition-colors">
                        Connect with Dr. Pragati
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a 
                    href={WHATSAPP_LINK}
                    className="flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100"
                  >
                    <MessageCircle size={24} /> Book Appointment
                  </a>
                  <a 
                    href={`tel:${PHONE_1}`}
                    className="flex items-center justify-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/10"
                  >
                    <Phone size={24} /> Call Now
                  </a>
                </div>
              </div>
              
              <div className="bg-brand-primary p-10 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
                
                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-10">Why Choose Home Physiotherapy?</h4>
                  <ul className="space-y-6">
                    {[
                      "Hospital-grade expertise in your space",
                      "Personalized recovery tracking",
                      "Advanced manual therapy techniques",
                      "Compassionate & professional care",
                      "Zero travel stress or clinic waiting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-5 text-lg">
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} className="text-white" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-brand-secondary relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-tight">
              Don’t Let Pain <br /><span className="text-brand-primary italic">Control Your Life</span>
            </h2>
            <p className="text-2xl text-brand-dark/60 mb-12 max-w-2xl mx-auto">
              Take the first step towards a pain-free, active life today. Expert care is just a message away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-3 bg-emerald-500 text-white px-12 py-6 rounded-[32px] text-xl font-bold hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-100"
              >
                <MessageCircle size={28} /> Book via WhatsApp
              </a>
              <a 
                href={`tel:${PHONE_1}`}
                className="flex items-center justify-center gap-3 bg-brand-primary text-white px-12 py-6 rounded-[32px] text-xl font-bold hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/10"
              >
                <Phone size={28} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-brand-primary/5 select-none -z-0 whitespace-nowrap">
          RECOVER FAST
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <Logo />
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-brand-dark/40 text-sm font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Dr. Pragati Kashyap. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href={`tel:${PHONE_1}`} className="text-brand-dark/30 hover:text-brand-primary transition-colors"><Phone size={24} /></a>
              <a href={WHATSAPP_LINK} className="text-brand-dark/30 hover:text-emerald-500 transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-8 left-8 right-8 z-40 flex gap-4">
        <a 
          href={WHATSAPP_LINK}
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white py-5 rounded-[24px] font-bold shadow-2xl shadow-emerald-200"
        >
          <MessageCircle size={22} /> WhatsApp
        </a>
        <a 
          href={`tel:${PHONE_1}`}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white py-5 rounded-[24px] font-bold shadow-2xl shadow-brand-primary/20"
        >
          <Phone size={22} /> Call Now
        </a>
      </div>
    </div>
  );
}
