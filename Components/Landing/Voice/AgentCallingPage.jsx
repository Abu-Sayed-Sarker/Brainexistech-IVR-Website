"use client";

import {
  vapi_assistant_id_for_bangla,
  vapi_assistant_id_for_english,
} from "@/env";
import { Mic, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useVapi } from "@/Providers/VapiAgentProvider";
import Header from "@/Libs/Header/Header";

export default function AgentCallingPage() {
  const {
    vapi,
    isConnected,
    isSpeaking,
    setLanguage,
    language,
    callStatus,
  } = useVapi();

  const startCall = () => {
    if (language === "bn-BD" && vapi) {
      vapi.start(vapi_assistant_id_for_bangla);
    } else if (vapi) {
      vapi.start(vapi_assistant_id_for_english);
    }
  };

  const endCall = () => {
    if (vapi) vapi.stop();
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="demo">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-8">
           AI Powered
        </div>

        <Header
          title="AI Hotel Service Demo"
          description="Try our hotel reservation demo and see how our AI agent provides instant, real-time assistance."
        />

        {/* Central Pulsing Mic */}
        <div className="flex justify-center my-20 reveal-zoom">
          <div className="relative">
            {/* Pulsing Background Layers */}
            <div className={`absolute inset-0 rounded-full bg-primary/5 transition-all duration-700 ${isConnected ? 'scale-[2.5] opacity-20 animate-ping' : 'scale-150 opacity-10 blur-xl'}`}></div>
            <div className={`absolute inset-0 rounded-full bg-primary/10 transition-all duration-700 ${isConnected ? 'scale-[1.8] opacity-30 animate-pulse' : 'scale-125 opacity-20 blur-lg'}`}></div>
            
            {/* Main Button */}
            <button
              onClick={() => (isConnected ? endCall() : startCall())}
              disabled={callStatus === "connecting"}
              className={`relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-indigo-900 border-4 border-white shadow-[0_0_40px_rgba(71,51,201,0.3)] flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 group z-10 ${isConnected ? 'animate-pulse-slow shadow-primary/50' : ''}`}
            >
              <div className="flex flex-col items-center">
                <Mic className={`w-16 h-16 text-white transition-transform duration-500 ${isConnected ? 'scale-110' : ''}`} />
              </div>
              
              {/* Spinning Ring */}
              {isConnected && (
                <div className="absolute inset-0 rounded-full border-t-4 border-white animate-spin"></div>
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-500 font-medium mb-10 max-w-lg mx-auto reveal-fade-up">
          The agent listens, understands and speaks back commits.
        </p>

        {/* Language & CTA Actions */}
        <div className="flex flex-col items-center gap-8 reveal-fade-up">
          <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200">
            <button
              onClick={() => setLanguage("en-US")}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${language === "en-US" ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-primary'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("bn-BD")}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${language === "bn-BD" ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-primary'}`}
            >
              Bangla
            </button>
          </div>

          <button
            onClick={() => (isConnected ? endCall() : startCall())}
            className="primary-btn !px-16"
          >
            {isConnected ? "STOP TESTING" : "START TESTING"}
          </button>
        </div>
      </div>
    </section>
  );
}
