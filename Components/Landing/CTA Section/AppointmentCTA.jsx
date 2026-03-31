"use client";
import React from "react";

export default function AppointmentCTA() {
  return (
    <section className="py-24 bg-white text-center px-4">
      <div className="container mx-auto reveal-zoom">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Build Your AI Voice <br /> System Today
        </h2>
        
        <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          Just leading business transforming customer interaction with AI-powered voice technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="primary-btn !px-12">
            Try Demo
          </button>
          <button className="outline-btn !border-primary !text-primary hover:!text-white hover:!border-transparent">
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}

