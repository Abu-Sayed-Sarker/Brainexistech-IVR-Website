import React from 'react'

export default function KeyComponents() {
    const features = [
        {
            title: "Accelerated Development:",
            description: "Enables faster, more efficient, and cost-effective software delivery"
        },
        {
            title: "Agentic AI Platform:",
            description: "Acts as a flexible AI-driven operating system for enterprises"
        },
        {
            title: "Seamless Integration:",
            description: "Easily connects third-party systems with customized AI-powered applications"
        },
        {
            title: "Enterprise Transformation:",
            description: "Speeds up and simplifies enterprise digital transformation journeys"
        },
        {
            title: "Unified Interface:",
            description: "Consolidates multiple GenAI and cloud services into a single platform"
        },
        {
            title: "Scalability & Efficiency:",
            description: "Enhances scalability, productivity, and overall operational efficiency"
        }
    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:gap-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/30 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 p-5 sm:p-6 transition-all duration-300 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative flex items-center gap-3 sm:gap-4">
                            {/* Bullet point */}
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-white text-base sm:text-lg leading-relaxed">
                                    <span className="font-semibold">{feature.title}</span>{' '}
                                    <span className="font-normal text-gray-100">{feature.description}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
