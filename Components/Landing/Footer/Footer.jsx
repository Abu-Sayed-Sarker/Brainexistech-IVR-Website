import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const locations = [
    { country: "United States", address: "123 New Road, Sandy Springs, LA 70363" },
    { country: "Australia", address: "55 Elizabeth St, Melbourne VIC 3000" },
    { country: "South Africa", address: "80 Strand St, Cape Town, 8001" },
    { country: "Singapore", address: "16 Kallang Junction, Singapore" },
    { country: "Italy", address: "Via di S. Pantaleo, 66 00186 Roma RM" },
    { country: "Dubai", address: "Dubai Silicone Oasis, Dubai UAE" },
    { country: "Cyprus", address: "Christodoulou Chatzipavlou, Limassol" },
    { country: "Bangladesh", address: "H-54, R-02, Block-E, Banasree, Dhaka 1219" }
  ];

  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Global Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal-fade-up">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group cursor-default">
              <h4 className="text-white font-bold mb-3 group-hover:text-primary transition-colors">{loc.country}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{loc.address}</p>
            </div>
          ))}
        </div>

        {/* Brand Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 border-t border-white/10 pt-20 reveal-fade-up">
          
          <div className="col-span-2 lg:col-span-1">
             <Image src="/Main Image/2bff6837b99fdf61b3392925a78dccf3732286b9.png" alt="Logo" width={150} height={50} className="mb-6 opacity-80" />
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Important Links</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Services</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">IVR Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chatbot Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Agent Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Specialized Industry</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Health Care Industry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate & Smart Hosting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education Industry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce Industry</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Legal Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Demo</a></li>
            </ul>
          </div>
        </div>

        {/* Partners/Logos Section from Image */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for partner logos */}
           <div className="text-white font-bold text-xl tracking-tighter">Fiverr.</div>
           <div className="text-white font-bold text-xl tracking-tighter uppercase italic">Upwork</div>
           <div className="text-white font-bold text-xl tracking-tighter">Bēhance</div>
           <div className="text-white font-bold text-xl tracking-tighter">Clutch ★★★★★</div>
        </div>

        {/* Copyrights */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:row items-center justify-between gap-6">
           <div className="flex gap-8 text-gray-600 text-xs uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           </div>
           
           <p className="text-gray-600 text-sm">
             © 2026 Brainexis Ltd. All Rights Reserved.
           </p>

           <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer">
                   <Icon className="w-4 h-4" />
                </div>
              ))}
           </div>
        </div>

        {/* Large Background Text */}
        <div className="mt-20 overflow-hidden select-none pointer-events-none">
           <h1 className="text-[15vw] font-black text-white/[0.02] leading-none text-center">BRAINEXIS</h1>
        </div>
      </div>
    </footer>
  );
}
