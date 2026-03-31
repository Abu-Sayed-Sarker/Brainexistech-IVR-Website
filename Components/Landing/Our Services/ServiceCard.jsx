import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay,
  animationClass = "reveal-fade-up"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group transition-all duration-300 ${animationClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Shadow/Glow */}
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <div className="relative h-full bg-gradient-to-br from-primary to-indigo-900 rounded-[2rem] p-8 transition-transform duration-300 group-hover:-translate-y-2 border border-white/10 flex flex-col items-center text-center shadow-xl">

        {/* Dynamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Icon Container */}
        <div className="mb-6 p-4 bg-white/10 rounded-2xl border border-white/20 transition-transform group-hover:scale-110">
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Action Button */}
        <button className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-white group-hover:text-primary">
          Select Service
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
