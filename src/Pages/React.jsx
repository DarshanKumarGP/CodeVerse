// src/pages/React.jsx

import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export default function ReactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* React Logo in Top Right */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={reactLogo}
            alt="React Logo"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight">
            React Development Mastery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Build fast, interactive UIs with React — the library that powers modern web applications like Facebook, Instagram, and Netflix.
            Learn reusable components, JSX, hooks, and more.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "⚛️ Component-Based", desc: "Build UIs using reusable components." },
            { title: "🔥 Lightning Fast", desc: "Powered by Virtual DOM." },
            { title: "🎣 Hooks Support", desc: "Manage state & side effects easily." },
            { title: "🌐 SPA & Routing", desc: "Create single-page apps with ease." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-cyan-500/30 transition">
              <h3 className="text-lg font-bold text-cyan-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>JSX and Virtual DOM</li>
            <li>Components & Props</li>
            <li>useState and useEffect</li>
            <li>React Router</li>
            <li>Forms and Input Handling</li>
            <li>Conditional Rendering</li>
            <li>State Lifting & Context API</li>
            <li>React Project Structure</li>
          </ul>
        </section>

        {/* Where Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🌍 Where React Shines</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📦 E-commerce Web Apps</p>
              <p>📲 Admin Dashboards</p>
              <p>📺 Streaming Platforms (Netflix)</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📘 Social Platforms (Facebook)</p>
              <p>⚙️ SaaS & Productivity Tools</p>
              <p>🧠 AI/ML Dashboards</p>
            </div>
          </div>
        </section>

        {/* Sample Code Block */}
        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample React Code</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`import React from "react";

function Welcome() {
  return <h1>Welcome to CodeVerse with React!</h1>;
}

export default Welcome;`}
          </pre>
        </section>

        {/* YouTube Embed */}
        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full React Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bMknfKXIFA8"
              title="React Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-blue-400 text-sm mt-2">
            📺 Watch directly on YouTube —{" "}
            <a
              href="https://www.youtube.com/watch?v=bMknfKXIFA8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              click here
            </a>
          </p>
        </section>

        {/* Quote Section */}
        <div className="bg-cyan-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “React isn’t a framework. It’s a library — flexible, focused, and powerful.”
          </p>
        </div>

        {/* Try React Button */}
        <section className="mb-10 text-center">
          <a
            href="https://replit.com/@phil-mac/React-Vite-Template"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try React Project
          </a>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/JavaScript" className="hover:underline hover:text-blue-300">⬅ Back to Javascript</Link>
          <Link to="/MySQL" className="hover:underline hover:text-blue-300">Next: MySQL ➡</Link>
        </div>
      </div>
    </div>
  );
}
