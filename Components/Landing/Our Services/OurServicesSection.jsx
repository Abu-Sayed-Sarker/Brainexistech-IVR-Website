"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import { services } from "@/Data/staticData";
import Header from "@/Libs/Header/Header";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function OurServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Futuristic Frame Decoration */}
      <div className="absolute inset-x-4 md:inset-x-12 inset-y-8 pointer-events-none opacity-20">
        <div className="w-full h-full border-t-2 border-b-2 border-primary/40 relative">
          <div className="absolute top-0 left-0 w-32 h-2 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-2 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-2 border-b-4 border-l-4 border-primary rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-2 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <Header
          title="Our Services"
          description="Enterprise grade AI voice technology built for reliability and scale"
        />

        <div className="reveal-fade-up">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="services-swiper !pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="!w-[350px] sm:!w-[400px]">
                <ServiceCard
                  active={true}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0}
                  animationClass="" // Let the swiper handle appearance
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


