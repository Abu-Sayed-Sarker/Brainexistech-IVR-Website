"use client";
import React from "react";
import Image from "next/image";
import { Mic, Play, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
       {/* Futuristic Frame Decoration (matching Services) */}
       <div className="absolute inset-x-4 md:inset-x-12 inset-y-8 pointer-events-none opacity-20 transform rotate-180">
        <div className="w-full h-full border-t-2 border-b-2 border-primary/40 relative">
          <div className="absolute top-0 left-0 w-32 h-2 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-2 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
          
          <div className="absolute top-0 left-1/4 w-1/2 h-4 bg-white border-b-2 border-x-2 border-primary/40 rounded-b-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] text-sm block mb-4 uppercase">A Bit</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">ABOUT US</h2>
          <p className="text-gray-500 font-medium text-lg italic">
            Just talk our AI Voice Agent and get instant company insights.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Side - Stats Card */}
          <div className="flex-1 w-full reveal-fade-left">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">↗</span>
                  </div>
               </div>
               
               <div className="mb-8">
                 <h3 className="text-5xl font-bold text-primary mb-2">20,000+</h3>
                 <p className="text-gray-400 font-medium">Clients who have partnered and are highly satisfied</p>
               </div>

               {/* Avatars */}
               <div className="flex -space-x-3 mb-8">
                 {[1, 2, 3, 4, 5].map((i) => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="customer" 
                        width={48} 
                        height={48} 
                      />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                   +1k
                 </div>
               </div>

               <p className="text-gray-500 leading-relaxed max-w-md">
                 We're a modern technology company delivering smart digital solutions to help businesses grow. New AI-powered systems can help businesses handle sales, service, and automation easily and result.
               </p>

               <button className="mt-8 primary-btn !px-8 !py-3 !text-sm">
                 EXPLORE MORE
               </button>
            </div>
          </div>

          {/* Right Side - AI Agent Visual */}
          <div className="flex-1 w-full flex flex-col items-center reveal-fade-right">
            <div className="relative mb-8">
              {/* Pulsing AI Circle */}
              <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(71,51,201,0.4)]">
                 <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                 <Image src="/Main Image/logo.webp" alt="AI" width={30} height={30} className="relative z-10" />
              </div>
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">AI Voice Assistant</h4>
            <div className="mb-6">
              {/* Waveform Visualization Placeholder */}
              <div className="flex items-center gap-1 h-12">
                 {[...Array(15)].map((_, i) => (
                   <div 
                     key={i} 
                     className="w-1.5 bg-primary/40 rounded-full animate-pulse" 
                     style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.1}s` }}
                   ></div>
                 ))}
              </div>
            </div>

            <p className="text-primary font-bold text-sm mb-6 border border-primary/20 bg-primary/5 px-4 py-2 rounded-lg italic">
               "Hey, I'm here to help you solve your business tasks"
            </p>

            <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl">
               <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                 <Mic className="w-4 h-4 fill-white" />
               </span>
               ASK ABOUT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

