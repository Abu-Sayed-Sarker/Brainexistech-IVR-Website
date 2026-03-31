import React from "react";

export default function Header({ title, description, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16 lg:mb-20 reveal-fade-up px-4">
      <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h1>
      <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium ${light ? 'text-blue-200' : 'text-gray-500'}`}>
        {description}
      </p>
    </div>
  );
}
