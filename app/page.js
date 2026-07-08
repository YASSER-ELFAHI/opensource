"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Users,
  Clock,
  Briefcase,
  ExternalLink,
  Link,
  Mail,
  MapPin,
  Globe,
  Camera,
  Menu,
  X
} from "lucide-react";
import Image from "next/image";

// Reusable Animation Wrapper
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState(9);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [speakerIndex, setSpeakerIndex] = useState(1);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0071e3] selection:text-white">
      {/* Navigation */}
      <nav className="w-full z-50 pt-6 pb-4 px-8 md:px-12 flex items-center justify-between bg-black/90 backdrop-blur-xl border-b border-white/[0.06]">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors duration-200">yasser</a>
          <a href="#speakers" className="hover:text-white transition-colors duration-200">Speakers</a>
          <a href="#schedule" className="hover:text-white transition-colors duration-200">Schedule</a>
          <a href="#contests" className="hover:text-white transition-colors duration-200">Contests</a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <span className="font-semibold text-lg tracking-tight text-white">OS<span className="text-[#0071e3]">.</span></span>
        </div>

        {/* Right Links & CTA */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#team" className="text-neutral-400 hover:text-white transition-colors duration-200">Contact us</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-[#0071e3] text-white font-medium text-sm hover:opacity-90 transition-opacity">
            Booking now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-neutral-300">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#speakers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Speakers</a>
          <a href="#schedule" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Schedule</a>
          <a href="#contact" className="text-[#0071e3] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Booking now</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Text above image */}
        <div className="text-center pt-20 pb-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-medium text-neutral-400 mb-5 tracking-widest uppercase"
          >
            Open Source V14.0
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter leading-none mb-6"
          >
            Open Source &amp; Cloud<br />
            <span className="text-neutral-300">in The Age of AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Premium technology talks across AI, infrastructure &amp; beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#about" className="px-6 py-3 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Learn more ›
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
              Get tickets
            </a>
          </motion.div>
        </div>

        {/* Full-bleed cinematic image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-4 md:px-8 pb-8"
        >
          <div className="relative w-full h-[55vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
              alt="Conference Crowd"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Scroll cue */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#f5f5f7] text-black py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <FadeIn delay={0.1} className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-widest text-[#0071e3] uppercase">Latest Insights</span>
                <div className="h-px bg-[#0071e3]/30 flex-1" />
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-black">
                  Discover the future of{" "}
                  <span className="text-[#0071e3]">technology</span><br />
                  through expert insights
                </h2>
              </FadeIn>

              {/* Stats row — Apple "by the numbers" style */}
              <FadeIn delay={0.35}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-8 border-t border-black/10">
                  {[
                    { value: "5+", label: "Speakers" },
                    { value: "200+", label: "Attendees" },
                    { value: "2", label: "Days" },
                    { value: "3+", label: "Workshops" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-black">{stat.value}</p>
                      <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <p className="text-neutral-600 leading-relaxed text-base mb-4">
                    Dive deep into cutting-edge technologies, innovative solutions, and transformative ideas that are reshaping our digital landscape. From AI breakthroughs to quantum computing advances.
                  </p>
                  <details className="text-neutral-500 text-sm leading-relaxed">
                    <summary className="cursor-pointer font-medium mb-2 select-none hover:text-[#0071e3] transition-colors">Read more details</summary>
                    <p className="mt-2">
                      Explore the latest trends in artificial intelligence, blockchain innovation, cybersecurity advancements, and the expanding Internet of Things ecosystem.
                    </p>
                  </details>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 bg-[#0071e3] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                  <span>Explore Articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 border border-neutral-300 text-neutral-700 px-6 py-3 rounded-full font-medium text-sm hover:border-[#0071e3] hover:text-[#0071e3] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                  <span>Save for Later</span>
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-32 md:py-40 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-6">
            <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Confirmed Lineup</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4 text-white">Meet Our Expert Speakers</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Learn from the brightest minds in open source, cloud infrastructure, and artificial intelligence.</p>
          </FadeIn>

          <div className="sm:h-[700px] flex h-[600px] mt-14 relative items-center justify-center w-full" style={{ perspective: "1200px" }}>
            {[
              { id: 1, name: "Dr. Sarah Chen", role: "Chief AI Scientist", tag: "AI/ML", icon: <Users className="w-3.5 h-3.5"/>, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
              { id: 2, name: "Marcus Johnson", role: "Cloud Architect", tag: "Infrastructure", icon: <Users className="w-3.5 h-3.5"/>, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
              { id: 3, name: "Elena Rodriguez", role: "Open Source Lead", tag: "Community", icon: <Users className="w-3.5 h-3.5"/>, image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" },
              { id: 4, name: "David Kim", role: "VP of Engineering", tag: "Leadership", icon: <Users className="w-3.5 h-3.5"/>, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
              { id: 5, name: "Aisha Patel", role: "Security Researcher", tag: "Security", icon: <Users className="w-3.5 h-3.5"/>, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
            ].map((speaker, index) => {
              const diff = index - speakerIndex;
              const absDiff = Math.abs(diff);
              if (absDiff > 2) return null;

              let translateX = 0;
              let rotateZ = 0;
              let scale = 1;
              let zIndex = 1;
              let opacity = 1;

              if (diff === 0) {
                translateX = 0; rotateZ = 0; scale = 1.05; zIndex = 3;
              } else if (diff < 0) {
                translateX = -280 - (absDiff > 1 ? 40 : 0); rotateZ = -12; scale = 1 - (absDiff * 0.05); zIndex = 2 - absDiff; opacity = absDiff > 1 ? 0 : 1;
              } else if (diff > 0) {
                translateX = 280 + (absDiff > 1 ? 40 : 0); rotateZ = 12; scale = 1 - (absDiff * 0.05); zIndex = 2 - absDiff; opacity = absDiff > 1 ? 0 : 1;
              }

              const mobileTranslateX = translateX * 0.6;

              return (
                <motion.div
                  key={speaker.id}
                  animate={{
                    x: typeof window !== 'undefined' && window.innerWidth < 640 ? mobileTranslateX : translateX,
                    y: 0, rotateZ, scale, opacity, zIndex
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute w-64 sm:w-80 aspect-[3/4] rounded-[2rem] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => setSpeakerIndex(index)}
                  style={{ boxShadow: diff === 0 ? "rgba(0,0,0,0.6) 0px 30px 60px -12px" : "none" }}
                >
                  <img alt={speaker.name} className="absolute inset-0 size-full object-cover" src={speaker.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{speaker.name}</p>
                      <p className="text-xs text-neutral-400">{speaker.role}</p>
                    </div>
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 text-[10px] text-neutral-200">
                      {speaker.icon}{speaker.tag}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Slider Controls */}
          <div className="flex flex-col items-center justify-center mt-8 gap-5 z-20 relative">
            <input
              type="range"
              min="0"
              max="4"
              value={speakerIndex}
              onChange={(e) => setSpeakerIndex(parseInt(e.target.value))}
              className="w-64 sm:w-96 h-1 cursor-pointer"
            />
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSpeakerIndex(Math.max(0, speakerIndex - 1))}
                disabled={speakerIndex === 0}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all text-neutral-400"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              <span className="text-neutral-500 text-sm tabular-nums">{speakerIndex + 1} / 5</span>
              <button
                onClick={() => setSpeakerIndex(Math.min(4, speakerIndex + 1))}
                disabled={speakerIndex === 4}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all text-neutral-400"
              >
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contests & Challenges */}
      <section id="contests" className="py-32 md:py-40 bg-[#f5f5f7] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-5">Compete</p>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-black">Contests &amp; Challenges</h2>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Put your skills to the test in our 24-hour AI &amp; Cloud Hackathon. Build innovative solutions, compete with top talent, and win amazing prizes sponsored by industry leaders.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#0071e3] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                Go to Contest Site <ExternalLink className="w-4 h-4" />
              </button>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative rounded-[2rem] overflow-hidden bg-neutral-900">
                <div className="aspect-[4/3] relative">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" alt="AI Hackathon" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/50">
                    <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-wider mb-4 text-white">HACKATHON 2026</span>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">AI FOR GOOD</h3>
                    <p className="text-sm text-neutral-300 max-w-sm mb-6">Build the next generation of open-source AI tools.</p>
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="Avatar" className="w-9 h-9 rounded-full border-2 border-black" />
                      ))}
                      <div className="w-9 h-9 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">+50</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Event Schedule */}
      <section id="schedule" className="py-32 md:py-40 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Agenda</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">Event Schedule</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Two days of workshops, talks, and networking opportunities – February 9-10, 2026</p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTab(9)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 9 ? 'bg-white text-black' : 'bg-white/10 text-neutral-400 hover:bg-white/20 hover:text-white'}`}
            >
              February 9th
            </button>
            <button
              onClick={() => setActiveTab(10)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 10 ? 'bg-white text-black' : 'bg-white/10 text-neutral-400 hover:bg-white/20 hover:text-white'}`}
            >
              February 10th
            </button>
          </FadeIn>

          <div className="divide-y divide-white/10">
            {[
              { time: "08:30", title: "Welcome & Check-in", desc: "Registration, breakfast, and networking.", day: 9 },
              { time: "09:30", title: "Opening Keynote: The Future of Open Source AI", desc: "A deep dive into how open source is democratizing artificial intelligence.", day: 9 },
              { time: "11:00", title: "Cloud Native Architecture Patterns", desc: "Building resilient systems with Kubernetes and modern tools.", day: 9 },
              { time: "13:00", title: "Lunch Break", desc: "Catered lunch and sponsor booth visits.", day: 9 },
              { time: "14:30", title: "Workshop: Building RAG Apps", desc: "Hands-on session building Retrieval-Augmented Generation applications.", day: 9 },
              { time: "09:00", title: "Day 2 Kickoff", desc: "Welcome back and agenda overview.", day: 10 },
              { time: "09:30", title: "Security in the Age of AI Copilots", desc: "Securing code generated by LLMs in production environments.", day: 10 },
              { time: "11:30", title: "Hackathon Project Demos", desc: "Top 5 teams present their AI & Cloud solutions.", day: 10 },
              { time: "14:00", title: "Panel: Funding Open Source", desc: "VCs and founders discuss sustainable business models for OS.", day: 10 },
              { time: "16:00", title: "Closing Ceremony & Awards", desc: "Hackathon winners announced and closing remarks.", day: 10 },
            ].filter(item => item.day === activeTab).map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 hover:bg-white/[0.03] transition-colors px-2 rounded-xl group">
                  <div className="flex items-center gap-2 text-[#0071e3] font-mono text-sm shrink-0 w-16">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" className="py-32 md:py-40 bg-[#f5f5f7] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-4">People</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">Meet Our Team</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">The dedicated individuals behind Open Source Days V14.0.</p>
          </FadeIn>

          {/* Leaders */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
            {[
              { role: "President", name: "Jane Doe", img: "41" },
              { role: "Vice President", name: "John Smith", img: "11" },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white rounded-[2rem] p-8 text-center group hover:shadow-lg transition-all duration-500">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-5">
                    <img src={`https://i.pravatar.cc/300?img=${member.img}`} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-neutral-500 text-sm mb-5">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-[#0071e3] hover:opacity-70 transition-opacity"><Link className="w-4 h-4" /></a>
                    <a href="#" className="text-[#0071e3] hover:opacity-70 transition-opacity"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Other Members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { role: "Technical Lead", name: "Alice Johnson", img: "42" },
              { role: "Design Lead", name: "Bob Williams", img: "12" },
              { role: "Marketing", name: "Carol Brown", img: "43" },
              { role: "Logistics", name: "Dave Davis", img: "13" },
              { role: "Sponsorship", name: "Eve Miller", img: "44" },
              { role: "Media", name: "Frank Wilson", img: "14" },
              { role: "Coordinator", name: "Grace Moore", img: "45" },
              { role: "Coordinator", name: "Henry Taylor", img: "15" },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-5 text-center group hover:shadow-md transition-all duration-300">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                    <img src={`https://i.pravatar.cc/150?img=${member.img}`} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-black mb-0.5">{member.name}</h3>
                  <p className="text-neutral-400 text-xs mb-3">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href="#" className="text-[#0071e3] hover:opacity-70 transition-opacity"><Link className="w-3.5 h-3.5" /></a>
                    <a href="#" className="text-[#0071e3] hover:opacity-70 transition-opacity"><Globe className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-32 md:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Press</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">Media Coverage</h2>
            <p className="text-neutral-400 text-lg mb-16 max-w-2xl mx-auto">Who's talking about Open Source Days.</p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-neutral-900 rounded-[2rem] p-10 w-60 flex flex-col items-center justify-center gap-3 hover:scale-[1.03] transition-transform duration-300">
                  <div className="text-white font-bold text-xl tracking-tight">MEDIA LOGO</div>
                  <p className="text-neutral-500 text-xs">Campus Tech Radio {i}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <a href="#contact" className="text-[#0071e3] font-medium hover:opacity-80 transition-opacity">
              Want to cover our event? Get in touch ›
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-32 md:py-40 bg-[#f5f5f7] text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Partners</p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">Our Event Sponsors</h2>
            <p className="text-neutral-500 text-lg mb-16 max-w-2xl mx-auto">Supported by industry leaders making open source possible.</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl h-28 flex items-center justify-center hover:shadow-sm transition-all duration-300 group">
                  <div className="text-neutral-300 group-hover:text-neutral-600 font-semibold text-base transition-colors duration-300">SPONSOR {i}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[2rem] max-w-lg mx-auto p-10">
              <h3 className="text-2xl font-semibold mb-2">Want Your Logo Here?</h3>
              <p className="text-neutral-500 text-sm mb-6">Reach hundreds of talented developers and tech enthusiasts.</p>
              <button className="px-7 py-3 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Sponsor Us ›
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-semibold text-lg">OS<span className="text-[#0071e3]">.</span></span>
                <span className="text-neutral-400 text-sm font-medium">OPEN SOURCE DAYS</span>
              </div>
              <p className="text-neutral-500 text-sm max-w-sm mb-6 leading-relaxed">
                Building tomorrow's ecosystem through collaboration, open source, and artificial intelligence.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all"><Globe className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all"><Link className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all"><Camera className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-5 text-neutral-400 uppercase tracking-wider">Event</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#contests" className="hover:text-white transition-colors">Hackathon</a></li>
              </ul>
            </div>

            <div id="contact">
              <h4 className="font-semibold text-sm mb-5 text-neutral-400 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-neutral-600" />
                  <span>Tech Conference Center, Innovation District</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-neutral-600" />
                  <a href="mailto:contact@opensourcedays.dev" className="hover:text-white transition-colors">contact@opensourcedays.dev</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-neutral-600 text-xs">
            <p>© 2026 Open Source Days. All rights reserved.</p>
            <p>Developed with ❤️ by The Tech Team</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
