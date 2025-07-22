import React from "react";
import { Link } from "react-router-dom";
import jsLogo from "../assets/javascript.svg";

export default function JavaScript() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* JavaScript Logo */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={jsLogo}
            alt="JavaScript Logo"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>

        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-yellow-300 tracking-tight">
            JavaScript Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            JavaScript is the backbone of interactive web applications. Powering
            everything from dynamic UI to APIs, mastering JS is key to front-end
            and back-end development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "🌐 Web Standard", desc: "Most-used language on the web." },
            { title: "⚡ Fast & Dynamic", desc: "Lightweight and powerful." },
            { title: "🔄 Async & Event Driven", desc: "Handle async tasks smoothly." },
            { title: "📦 Huge Ecosystem", desc: "NPM & frameworks galore." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-yellow-500/30 transition"
            >
              <h3 className="text-lg font-bold text-yellow-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Variables, Data Types & Operators</li>
            <li>Functions, Arrow Functions</li>
            <li>DOM Manipulation</li>
            <li>Asynchronous JavaScript (Promises, async/await)</li>
            <li>Events and Event Listeners</li>
            <li>ES6+ Features</li>
            <li>APIs and Fetch</li>
            <li>Intro to Node.js</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🌍 JavaScript in Action</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>🖥️ Dynamic Web Applications</p>
              <p>📱 Mobile Apps via React Native</p>
              <p>⚙️ Server-side Apps with Node.js</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📦 Build Tools & Bundlers</p>
              <p>🧩 Browser Extensions</p>
              <p>📊 Dashboards & Visualization</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample JavaScript Code</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("CodeVerse");`}
          </pre>
        </section>

        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full JavaScript Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PkZNo7MFNFg"
              title="JavaScript Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-blue-400 text-sm mt-2">
            📺 Watch directly on YouTube — {" "}
            <a
              href="https://www.youtube.com/watch?v=PkZNo7MFNFg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              click here
            </a>
          </p>
        </section>

        <div className="bg-yellow-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “JavaScript is the duct tape of the Internet — you can build almost anything with it.”
          </p>
        </div>

        <section className="mb-10 text-center">
          <a
            href="https://replit.com/languages/javascript"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try JavaScript Project
          </a>
        </section>

        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/GOLang" className="hover:underline hover:text-blue-300">
            ⬅ Back to GO Lang
          </Link>
          <Link to="/React" className="hover:underline hover:text-blue-300">
            Next: React JS ➡
          </Link>
        </div>
      </div>
    </div>
  );
}
