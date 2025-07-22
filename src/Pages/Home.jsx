import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../assets/hero-banner.png";
import javaLogo from "../assets/java.svg";
import pythonLogo from "../assets/python.svg";
import reactLogo from "../assets/react.svg";

const featuredCourses = [
  {
    name: "Java",
    path: "/Java",
    logo: javaLogo,
    desc: "Master OOP principles and backend development.",
  },
  {
    name: "Python",
    path: "/Python",
    logo: pythonLogo,
    desc: "From data science to automation — Python does it all.",
  },
  {
    name: "React",
    path: "/React",
    logo: reactLogo,
    desc: "Modern UI development with React and hooks.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-4 pt-14 pb-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-400 drop-shadow-lg mb-6 leading-tight">
              Welcome to <span className="text-white">CodeVerse</span>
            </h1>
            <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mx-auto lg:mx-0">
              Your gateway to mastering programming. Learn Java, Python, React, and more —
              from basics to advanced, all in one immersive platform.
            </p>
            <Link
              to="/Courses"
              className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md hover:shadow-blue-500/40"
            >
              🚀 Browse All Courses
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroImg}
              alt="CodeVerse Hero"
              className="w-full max-w-md rounded-3xl shadow-2xl border-2 border-gray-800"
            />
          </motion.div>
        </div>

        {/* Featured Courses */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
        >
          🔥 Featured Courses
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {featuredCourses.map((course) => (
            <Link
              key={course.name}
              to={course.path}
              className="bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 hover:border-blue-500 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={course.logo}
                  alt={`${course.name} logo`}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold text-white">
                  {course.name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {course.desc}
              </p>
              <div className="mt-4 text-blue-400 font-semibold hover:underline transition">
                Start Learning →
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 rounded-3xl border border-gray-700 p-10 text-center shadow-xl mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">
            Why Learn With CodeVerse?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "📚 Hands-on Projects",
                text: "Apply your knowledge by building real-world projects and showcasing them in your portfolio.",
              },
              {
                title: "🧠 AI-Powered Learning",
                text: "Personalized learning paths, instant feedback, and smart recommendations powered by AI.",
              },
              {
                title: "🌐 Global Community",
                text: "Connect with fellow learners, join discussions, get mentorship, and collaborate worldwide.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-gray-400 text-sm border-t border-gray-800 pt-6 text-center">
          <div className="mb-2">
            Made with 💙 by CodeVerse Team ·{" "}
            <Link to="/Contact" className="text-blue-400 hover:underline">
              Contact Us
            </Link>
          </div>
          <div>&copy; {new Date().getFullYear()} CodeVerse. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
