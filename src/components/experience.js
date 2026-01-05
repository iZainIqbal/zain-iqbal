import React, { useState } from "react";
import { Calendar, MapPin, ExternalLink, Code, Users, Zap, Award } from "lucide-react";

// Experience Component with Case Study Style
const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      company: "Metaviz AI",
      role: "Flutter Developer",
      period: "Aug 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Developing scalable Flutter applications following clean architecture principles and implementing complex features for production-ready software solutions.",
      achievements: [
        "Developed multiple Flutter apps including Wellness AOE Distributor and Member apps",
        "Built Ride-booking platform with real-time tracking and intelligent driver matching (30-sec timeout)",
        "Created AiPEX fitness app with personalized meal/workout plans and AI chatbot",
        "Developed Snap n shop Ecommerce app with Stripe payment integration",
        "Built blog app with REST APIs and Google OAuth integration"
      ],
      technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe", "Provider", "REST APIs", "Google OAuth", "Clean Architecture"],
      metrics: [
        "5+ Production Apps",
        "Real-time GPS Tracking",
        "Payment Integration"
      ],
      projects: [
        {
          name: "AIPEX Fitness App",
          period: "Sep 2025 - Oct 2025",
          description: "Personalized workout/meal plans, body metrics tracking, dark/light themes, AI chatbot with conversation history",
          tech: ["Flutter", "AI Chatbot", "Provider", "Firebase"]
        },
        {
          name: "Ride-Booking Platform",
          period: "Sep 2025",
          description: "Dual-app system with intelligent driver matching (30-sec timeout), real-time GPS tracking, trip history, and earnings dashboard",
          tech: ["Flutter", "Google Maps", "Real-time Tracking", "Provider"]
        },
        {
          name: "E-commerce Platform",
          period: "Sep 2025",
          description: "Full e-commerce app with Stripe payments, Google OAuth, shopping cart (Provider), product catalog, and order management",
          tech: ["Flutter", "Stripe", "Google OAuth", "Provider", "REST APIs"]
        },
        {
          name: "Wellness APP - AOE",
          period: "Aug 2025 - Sep 2025",
          description: "Social blogging with rich text editor, user profiles, content feed, and Google authentication",
          tech: ["Flutter", "Google Auth", "Rich Text Editor", "Firebase"]
        }
      ]
    },
    {
      company: "Business Incubation Center (BIC), University of Gujrat",
      role: "Flutter Developer Intern",
      period: "Nov 2023 – Apr 2024",
      location: "Gujrat, Pakistan",
      type: "Internship",
      description: "Developed a real-time blood donation app serving actual users, implementing secure messaging and real-time notifications.",
      achievements: [
        "Developed blood donation app with live location matching and Firebase Auth",
        "Implemented real-time notifications for donation requests",
        "Built secure in-app messaging using third-party libraries",
        "Collaborated on code reviews, team meetings, and technical documentation"
      ],
      technologies: ["Flutter", "Firebase", "Firestore", "FCM", "Real-time Database"],
      metrics: [
        "6-Month Internship",
        "Real-time System",
        "Production App"
      ],
      projects: [
        {
          name: "Digitalize Blood Bank",
          period: "Nov 2023 - Apr 2024",
          description: "Real-time blood donor app with live location matching, Firebase Auth, real-time notifications, and secure in-app messaging",
          tech: ["Flutter", "Firebase", "Firestore", "FCM", "Google Maps"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world projects and professional experience building scalable applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden border transition-all duration-300 ${
                activeExperience === index
                  ? "border-blue-500/50 shadow-2xl shadow-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              {/* Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setActiveExperience(activeExperience === index ? -1 : index)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Code className="w-4 h-4" />
                        <span className="font-semibold text-blue-400">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {activeExperience === index && (
                <div className="border-t border-gray-700 p-6 space-y-6 animate-fade-in">
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold text-sm">{metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        Projects
                      </h4>
                      <div className="space-y-4">
                        {exp.projects.map((project, i) => (
                          <div
                            key={i}
                            className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-white">{project.name}</h5>
                              <span className="text-xs text-gray-400">{project.period}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, j) => (
                                <span
                                  key={j}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

