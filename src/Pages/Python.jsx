import React from "react";
import { Link } from "react-router-dom";
import pythonLogo from "../assets/python.svg";

export default function Python() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* Python Logo in Top Right */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={pythonLogo}
            alt="Python Logo"
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-blue-400 tracking-tight">
            Python Programming Mastery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Python is known for its simplicity and power. Whether you're building
            web apps, analyzing data, automating tasks, or diving into AI —
            Python is your go-to language.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "🐍 Easy Syntax", desc: "Great for beginners and pros alike." },
            { title: "📊 Data Science", desc: "Used in AI, ML, and analytics." },
            { title: "🌐 Web Frameworks", desc: "Django, Flask, FastAPI, and more." },
            { title: "🧪 Huge Ecosystem", desc: "Thousands of libraries available." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-blue-500/30 transition">
              <h3 className="text-lg font-bold text-blue-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Variables, Data Types, and Control Flow</li>
            <li>Functions, Modules, and Packages</li>
            <li>Object-Oriented Programming</li>
            <li>File Handling and Exceptions</li>
            <li>Web Development (Flask/Django)</li>
            <li>Data Science with NumPy & Pandas</li>
            <li>APIs and Automation with Requests</li>
            <li>Intro to Machine Learning</li>
          </ul>
        </section>

        {/* Where Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🌍 Where Python Excels</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📈 Data Science & Machine Learning</p>
              <p>🌐 Web Development with Flask & Django</p>
              <p>🤖 Automation and Scripting</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>🧪 Scientific Computing</p>
              <p>🎮 Game Development</p>
              <p>📊 Financial Analysis & Tools</p>
            </div>
          </div>
        </section>

        {/* Sample Code Block */}
        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample Python Code</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`def greet(name):
  print(f"Welcome to CodeVerse, {name}!")

greet("Python Learner")`}
          </pre>
        </section>

        {/* YouTube Embed */}
        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full Python Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_uQrJ0TkZlc"
              title="Python Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-blue-400 text-sm mt-2">
            📺 Watch directly on YouTube —{" "}
            <a
              href="https://www.youtube.com/watch?v=_uQrJ0TkZlc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              click here
            </a>
          </p>
        </section>

        {/* Quote */}
        <div className="bg-blue-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “Python is the Swiss Army knife of programming — simple, powerful, and everywhere.”
          </p>
        </div>

        {/* CTA */}
        <section className="mb-10 text-center">
          <a
            href="https://replit.com/languages/python3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-400 hover:bg-blue-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try Python Project
          </a>
        </section>

        {/* Footer Nav */}
        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/Java" className="hover:underline hover:text-blue-300">⬅ Back to Java</Link>
          <Link to="/Golang" className="hover:underline hover:text-blue-300">Next: Go Lang ➡</Link>
        </div>
      </div>
    </div>
  );
}
