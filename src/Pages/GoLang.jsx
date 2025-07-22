import React from "react";
import { Link } from "react-router-dom";
import golangLogo from "../assets/golang.svg";

export default function Golang() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* Go Logo */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={golangLogo}
            alt="Golang Logo"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-cyan-300 tracking-tight">
            Go Programming Mastery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Learn Go (or Golang), an open-source, statically typed language designed
            at Google. It's ideal for building scalable, high-performance backend systems.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "⚡ Fast Performance", desc: "Compiled and efficient." },
            { title: "📦 Minimalist Syntax", desc: "Clean and modern structure." },
            { title: "🧵 Built-in Concurrency", desc: "Goroutines & channels." },
            { title: "☁️ Cloud-Native", desc: "Ideal for microservices." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-cyan-500/30 transition">
              <h3 className="text-lg font-bold text-cyan-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Variables, Pointers, and Constants</li>
            <li>Structs, Interfaces, and Methods</li>
            <li>Concurrency with Goroutines & Channels</li>
            <li>Error Handling and Packages</li>
            <li>Standard Library and File I/O</li>
            <li>Building REST APIs with net/http</li>
            <li>JSON and Web Services</li>
            <li>Go Modules and Dependency Management</li>
          </ul>
        </section>

        {/* Where Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🌍 Where Go Excels</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>☁️ Cloud Infrastructure Tools</p>
              <p>🧩 Microservices Architecture</p>
              <p>🗂️ DevOps Tools (Docker, Kubernetes)</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>🌐 Web Servers and APIs</p>
              <p>🛠️ CLI Tools</p>
              <p>📈 High Performance Backends</p>
            </div>
          </div>
        </section>

        {/* Sample Code */}
        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample Go Code</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`package main

import "fmt"

func main() {
  fmt.Println("Welcome to CodeVerse with Go!")
}`}
          </pre>
        </section>

        {/* YouTube Embed */}
        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full Go Lang Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yyUHQIec83I"
              title="Go Lang Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-cyan-300 text-sm mt-2">
            📺 Watch directly on YouTube —{" "}
            <a
              href="https://www.youtube.com/watch?v=yyUHQIec83I"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-200"
            >
              click here
            </a>
          </p>
        </section>

        {/* Quote */}
        <div className="bg-cyan-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “Go is simplicity, concurrency, and power — all packed into one modern language.”
          </p>
        </div>

        {/* CTA */}
        <section className="mb-10 text-center">
          <a
            href="https://replit.com/languages/go"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try Go Lang Project
          </a>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/Python" className="hover:underline hover:text-blue-300">⬅ Back to Python</Link>
          <Link to="/Javascript" className="hover:underline hover:text-blue-300">Next: JavaScript ➡</Link>
        </div>
      </div>
    </div>
  );
}
