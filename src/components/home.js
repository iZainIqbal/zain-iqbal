import React from "react";

// Home Component - MVP Developer Hero Section
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for new projects (Feb 2026)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              I Build MVPs That Help Startups{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Validate Ideas Fast
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Product developer who turns your concept into a working mobile or web app in{" "}
              <span className="text-purple-600 font-semibold">weeks, not months</span>.
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            From Flutter mobile apps to React web platforms, I help startups ship their first version fast.
            Clean code, real features, and ready for real users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 text-center shadow-sm"
            >
              Let's Talk About Your Idea
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">8+</div>
              <div className="text-sm text-gray-600 font-medium">Production Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">4-8</div>
              <div className="text-sm text-gray-600 font-medium">Weeks Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600 font-medium">Code Ownership</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 w-64 h-64 bg-white rounded-full border-4 border-purple-200 hover:scale-105 transition-transform duration-500 flex items-center justify-center shadow-xl">
                <img
                  src="images/heroPic.jpeg"
                  alt="Zain Iqbal - MVP Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
