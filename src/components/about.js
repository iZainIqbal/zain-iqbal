import React from "react";
import { Zap, MessagesSquare, FileCode, DollarSign } from "lucide-react";

// About Component - Why Work With Me
const About = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Quick Delivery",
      description: "Most MVPs are ready in 4-8 weeks. I focus on shipping working products fast.",
      color: "blue",
    },
    {
      icon: MessagesSquare,
      title: "Clear Communication",
      description: "Weekly updates, direct access to me, and no technical jargon unless you want it.",
      color: "purple",
    },
    {
      icon: FileCode,
      title: "You Own Everything",
      description: "Full source code, documentation, and deployment credentials. Everything I build is yours.",
      color: "pink",
    },
    {
      icon: DollarSign,
      title: "Startup-Friendly",
      description: "I understand limited budgets and tight timelines. I help you prioritize features that matter most.",
      color: "green",
    },
  ];

  const techStack = {
    mobile: ["Flutter", "React Native", "Expo", "Firebase"],
    web: ["React", "Next.js", "TailwindCSS", "Material-UI"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    integrations: ["Stripe", "Google Maps", "Dialogflow", "OAuth", "Twilio", "SendGrid"],
  };

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Work With Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[benefit.color]} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative w-full h-96 bg-gray-900 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 w-64 h-64 bg-gray-700 rounded-full border-4 border-white/10 hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <img
                    src="images/min.jpeg"
                    alt="Zain Iqbal - MVP Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Hi, I'm Zain Iqbal
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a <span className="text-blue-400 font-semibold">Full-Stack Software Developer</span> specializing in building production-ready mobile and web applications with Flutter, React Native, and the MERN stack. I transform ideas into scalable digital products across healthcare, logistics, e-commerce, and social impact sectors.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My experience includes developing <span className="text-purple-400">AI-powered fitness apps</span> with Dialogflow integration, <span className="text-purple-400">ride-booking platforms</span> with real-time GPS tracking serving 1,000+ test rides, <span className="text-purple-400">digital blood donation networks</span> connecting donors with patients, and <span className="text-purple-400">e-commerce solutions</span> with Stripe payment processing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I focus on <span className="text-blue-400 font-semibold">full-stack architecture, RESTful API design, database management</span>, and delivering MVPs in 4-8 weeks. No bloat, no endless meetings—just solid applications with production-ready code, comprehensive documentation, and real features that users love.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-300 mb-3">
                <span className="text-blue-400 font-semibold">Key Achievements:</span>
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>✅ 8+ production applications deployed across multiple industries</li>
                <li>✅ 10,000+ active users impacted through developed applications</li>
                <li>✅ 15+ third-party integrations (Stripe, Google Maps, Dialogflow, etc.)</li>
                <li>✅ 100% client satisfaction with on-time delivery</li>
              </ul>
            </div>

            {/* Industries Served */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Industries Served:</p>
              <p className="text-gray-300">
                Healthcare · Logistics & Transportation · E-commerce · Social Impact
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Tech Stack
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                Mobile
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.mobile.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                Web
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.web.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-pink-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                Integrations
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.integrations.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
