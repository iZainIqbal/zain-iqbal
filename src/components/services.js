import React from "react";
import { ChevronRight } from "lucide-react";
// Services Component
const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      description:
        "I build modern, scalable web applications using React for the frontend and Node.js for backend APIs. From responsive UIs to database integration and secure authentication — I deliver full-stack solutions ready for production.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "I specialize in crafting cross-platform apps using Flutter. Whether it's a live blood donor app or an eCommerce store, I ensure clean architecture, real-time features, and polished user experience across Android and iOS.",
    },
    {
      icon: "🎮",
      title: "Game Development",
      description:
        "I develop lightweight and engaging mobile games using Unity. From endless runners like *Chrono Chase* to clones of classics like *Flappy Bird*, I focus on performance, smooth mechanics, and immersive gameplay.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#projects"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center space-x-2 transition-colors"
                aria-label={`Learn more about ${service.title}`}
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
