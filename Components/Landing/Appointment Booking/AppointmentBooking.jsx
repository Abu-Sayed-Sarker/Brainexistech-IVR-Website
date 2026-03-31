"use client";
import { CheckCircle, SendHorizonal } from "lucide-react";
import CalendarComponent from "./CalendarComponent";
import TimeSelector from "./TimeSelector";
import { useState } from "react";
import Header from "@/Libs/Header/Header";
import { usePostAppointmentMutation } from "@/Apis/Appointment/appointmentApi";
import Toaster from "@/Libs/Toast/Toaster";

export default function AppointmentBooking() {
  const [postAppointment, { isLoading }] = usePostAppointmentMutation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [summary, setSummary] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

  const handleSubmit = async () => {
    if (!selectedTime || !name || !email || !summary) {
      return Toaster({ type: "error", message: "Please fill all fields.", backgroundColor: "#ff000075" });
    }

    const data = {
      appointment_time: new Date(`${selectedDate.toDateString()} ${selectedTime}`).toISOString(),
      name, email, description: summary,
    };
    try {
      await postAppointment(data).unwrap();
      Toaster({ type: "success", message: "Appointment booked successfully!" });
      setSummary(""); setName(""); setEmail("");
    } catch (error) {
      Toaster({ type: "error", message: "Failed to book appointment.", backgroundColor: "#ff000075" });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="appointment">
      {/* Futuristic Isometric Grid Background */}
      <div className="isometric-grid opacity-30"></div>

      <div className="container mx-auto relative z-10 px-4">
        <Header
          title="Instant Appointment Booking"
          description="Pick a date and time—our AI handles the rest."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Selection */}
          <div className="space-y-8 reveal-fade-left">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-4 shadow-xl border border-primary/10">
              <CalendarComponent onDateSelect={setSelectedDate} selectedDate={selectedDate} />
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-primary/10">
              <TimeSelector availableTimes={availableTimes} selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
            </div>
          </div>

          {/* Right Column - Summary Card (Blue styling from image) */}
          <div className="bg-primary rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(71,51,201,0.5)] flex flex-col border border-white/20 reveal-fade-right relative overflow-hidden group">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

            <div className="flex items-center gap-4 mb-10 relative z-10 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Appointment Summary</h2>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold ml-1">NAME</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="bg-white/10 border-2 border-white/20 rounded-2xl p-5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold ml-1">EMAIL</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-white/10 border-2 border-white/20 rounded-2xl p-5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold ml-1">SUMMARY</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="What would you like to discuss?"
                  className="bg-white/10 border-2 border-white/20 rounded-2xl p-5 text-white placeholder-white/30 resize-none focus:outline-none focus:border-white transition-all h-40"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-10 w-full py-5 rounded-2xl bg-white text-primary text-xl font-bold shadow-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all group"
            >
              Book With Assistant
              <SendHorizonal className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
