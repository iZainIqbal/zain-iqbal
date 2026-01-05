import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";

// Contact Component
const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate environment variables
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSubmitStatus("success");
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus("error");
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">appdev.zain@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+92 306 6244324</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/iZainiqbal", label: "GitHub Profile" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/zain-iqbal-devs/",
                    label: "LinkedIn Profile",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <button>
              <a
                href="/Zain_Iqbal_CV.pdf"
                download
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6" aria-label="Contact form">
              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-red-500/20 text-red-400 border border-red-500/50"
                  }`}
                  role="alert"
                >
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>Failed to send message. Please try again or email me directly.</span>
                    </>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="user_name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                  aria-label="Your Name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                  aria-label="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                  aria-label="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
