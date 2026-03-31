import AppointmentBooking from "@/Components/Landing/Appointment Booking/AppointmentBooking";
import AppointmentCTA from "@/Components/Landing/CTA Section/AppointmentCTA";
import WhyChooseUs from "@/Components/Landing/Features/WhyChooseUs";
import Footer from "@/Components/Landing/Footer/Footer";
import HeroSection from "@/Components/Landing/Hero Section/HeroSection";
import OurServicesSection from "@/Components/Landing/Our Services/OurServicesSection";
import AgentCallingPage from "@/Components/Landing/Voice/AgentCallingPage";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <div id="services">
        <OurServicesSection />
      </div>

      <div id="about">
        <WhyChooseUs />
      </div>

      <div id="features">
        <AgentCallingPage />
      </div>

      <div id="appointment">
        <AppointmentBooking />
      </div>

      <div id="cta">
        <AppointmentCTA />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
