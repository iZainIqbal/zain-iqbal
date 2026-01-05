import React from "react";
import { ExternalLink } from "lucide-react";

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Flutter eCommerce App",
      image: "images/ecom_app.png",
      description:
        "A Flutter-based eCommerce app with cart, JWT auth, and Nodejs and MongoDb. Admin panel in Flutter Web + Node.js [In Progress]",
      link: "https://github.com/iZainIqbal",
      tech: ["Flutter", "Node.js", "MongoDB"],
    },
    {
      title: "Chrono Chase (Unity Game)",
      image: "images/chrono_chase.png",
      description:
        "An endless runner Unity game based on time-travel themes. Features include a shop system, user profiles, and powerups.",
      link: "https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd",
      tech: ["Unity", "C#", "Game Design"],
    },
    {
      title: "Digitalize Blood Bank",
      image: "images/digitalizeblood.png",
      description:
        "A real-time blood donor app developed during a 6-month internship. Features include user profiles, donation requests, and admin panel.",
      link: "https://www.youtube.com/shorts/XoDwdQPJYMU",
      tech: ["Flutter", "Firebase", "Firestore"],
    },
    {
      title: "AI Chatbot (Dialogflow)",
      image: "images/chat_screen.png",
      description:
        "An intelligent chatbot integrated into a Flutter app using Dialogflow to support natural conversations.",
      link: "https://github.com/iZainIqbal/chatbot",
      tech: ["Flutter", "Dialogflow", "AI"],
    },
    {
      title: "QR Scanner App",
      image: "images/qr_scanner.png",
      description:
        "A real-time QR code scanner and generator built in Flutter. Published on Play Store with 100+ downloads.",
      link: "https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh",
      tech: ["Flutter", "Play Store", "QR Code"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
