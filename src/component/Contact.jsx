import React from "react";
import { Send, MessageCircle, Briefcase, Coffee, Users } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 px-4 text-[#e2e8f0] mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#84cc16]">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whether it’s a freelance project, collaboration, or just a hello — I’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className=" shadow-lg rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold text-[#84cc16]">Why Reach Out?</h3>

            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-[#06b6d4] mt-1" />
              <div>
                <p className="font-semibold">Freelance Projects</p>
                <p className="text-sm text-gray-400">
                  Need a MERN/React developer? Let's create something impactful.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-[#06b6d4] mt-1" />
              <div>
                <p className="font-semibold">Team Collaborations</p>
                <p className="text-sm text-gray-400">
                  Passionate about building something together? Let’s talk teamwork.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-[#06b6d4] mt-1" />
              <div>
                <p className="font-semibold">Tech Conversations</p>
                <p className="text-sm text-gray-400">
                  Love chatting React, TypeScript, or dev life? I’m all ears.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Coffee className="h-5 w-5 text-[#06b6d4] mt-1" />
              <div>
                <p className="font-semibold">Just Say Hi</p>
                <p className="text-sm text-gray-400">
                  Even a casual hello is welcome — I enjoy meeting new minds.
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#84cc16] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#0f172a] text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#84cc16] outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#0f172a] text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#84cc16] outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-1">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Let me know how I can help"
                  className="w-full bg-[#0f172a] text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#84cc16] outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-[#0f172a] text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#84cc16] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#84cc16] hover:bg-lime-500 text-[#0f172a] font-semibold py-2 rounded-lg flex items-center justify-center transition"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
