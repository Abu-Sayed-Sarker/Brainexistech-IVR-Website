"use client";
import Link from "next/link";
import { Globe, Mic, Star } from "lucide-react";
import Image from "next/image";

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(49,34,179,0.15),transparent_70%)]"></div>

      {/* Intense Glow effects */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/25 blur-[120px] rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Dynamic particles */}
      {[...Array(45)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[3px] h-[3px] bg-yellow-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 15px 3px rgba(250, 204, 21, 0.6)',
            animation: `fade-in ${4 + Math.random() * 6}s infinite ease-in-out, pulse-glow ${2 + Math.random() * 2}s infinite alternate`,
            animationDelay: `${Math.random() * 8}s`,
            opacity: 0.4 + Math.random() * 0.4
          }}
        />
      ))}

      {/* More visible grid pattern */}
      <div className="absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #fff 1.5px, transparent 0)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Floating lines decoration */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#090518] text-white overflow-hidden py-24 px-6">
      <ParticleEffect />

      {/* Top Header Section */}
      <div className="relative z-10 flex flex-col items-center mb-8 animate-fade-in">
        <Image src="/Main Image/2bff6837b99fdf61b3392925a78dccf3732286b9.png" alt="Logo" width={200} height={200} className="pb-4" />

        {/* Dynamic Badge */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-xl shadow-inner">
          <Globe className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-light tracking-wide text-gray-300">
            Empowering Businesses in 8+ Countries Worldwide
          </span>
        </div>
      </div>

      {/* Trust & Proof Section */}
      <div className="relative z-10 flex flex-col items-center mb-12 animate-fade-in-up">
        <div className="flex items-center gap-1.5 bg-[#1DBF73] px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(29,191,115,0.4)] transition-transform hover:scale-105">
          <span className="text-xs font-bold italic tracking-tighter">fiverr.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">4.9</span>
          <div className="flex gap-0.5 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />)}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] animate-fade-in-up">
          AI-Powered IVR That <br />
          <span className="text-gradient-purple drop-shadow-[0_0_30px_rgba(71,51,201,0.6)]">
            Talks Like a Human
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Voice-first ordering & appointment booking powered by conversational AI.
        </p>
      </div>

      {/* Primary Actions */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 mb-40 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <button className="primary-btn">
          <span className="relative z-10">Try Demo</span>
        </button>
        <button className="outline-btn">
          Book appointment
        </button>
      </div>

      {/* Floating Navigation */}
      <div className="fixed bottom-10 left-6 right-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <nav className="flex items-center justify-between sm:justify-start gap-4 sm:gap-14 px-10 py-5 rounded-2xl bg-gradient-to-b from-secondary to-primary to-80% shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
          <Link href="/" className="hidden sm:block text-sm text-white/90 hover:text-white transition-colors">Home</Link>
          <Link href="#services" className="text-sm text-white/90 hover:text-white transition-colors">Services</Link>

          <Link href="#" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/30 text-white transition-all hover:bg-white/10 group">
            <div className="p-1 bg-white rounded-md">
              <Mic className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-bold tracking-tight">Try Demo</span>
          </Link>

          <Link href="#features" className="text-sm text-white/90 hover:text-white transition-colors">Features</Link>
          <Link href="#about" className="hidden sm:block text-sm text-white/90 hover:text-white transition-colors">About</Link>
        </nav>
      </div>

      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"></div>
    </section>
  );
}

