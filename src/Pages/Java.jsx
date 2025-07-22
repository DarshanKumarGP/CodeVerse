import React from "react";
import { Link } from "react-router-dom";
import javaLogo from "../assets/java.svg";

export default function Java() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* Java Logo in Top Right */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={javaLogo}
            alt="Java Logo"
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-red-400 tracking-tight">
            Java Programming Mastery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Dive into one of the most widely-used programming languages on the planet.
            Java's reliability, scalability, and platform independence make it essential
            for developers building robust applications — from Android to banking systems.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "🔥 Platform-Independent", desc: "Write Once, Run Anywhere." },
            { title: "💼 Enterprise-Ready", desc: "Used in banking & ERP systems." },
            { title: "📱 Android Backbone", desc: "Primary language for Android." },
            { title: "⚙️ JVM Powered", desc: "Java Virtual Machine architecture." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-yellow-500/30 transition">
              <h3 className="text-lg font-bold text-yellow-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Object-Oriented Programming (OOP) Principles</li>
            <li>Classes, Objects, and Constructors</li>
            <li>Inheritance, Polymorphism, Encapsulation</li>
            <li>Exception Handling and File I/O</li>
            <li>Multithreading & Concurrency</li>
            <li>Collections Framework (List, Map, Set)</li>
            <li>Java Virtual Machine (JVM) & JDK</li>
            <li>JavaFX / Spring Boot Introduction</li>
          </ul>
        </section>

        {/* Where Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🌍 Where Java Shines</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📱 Android App Development</p>
              <p>🏦 Enterprise Solutions (Banking, Insurance)</p>
              <p>🚀 Spring Boot Web APIs</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📊 Big Data (Hadoop)</p>
              <p>📡 Embedded Systems & IoT</p>
              <p>📁 Desktop GUI with JavaFX</p>
            </div>
          </div>
        </section>

        {/* Sample Code Block */}
        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample Java Code</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Welcome to CodeVerse with Java!");
  }
}`}
          </pre>
        </section>

        {/* YouTube Embed */}
        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full Java Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UmnCZ7-9yDY"
              title="Java Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-blue-400 text-sm mt-2">
            📺 Watch directly on YouTube —{" "}
            <a
              href="https://www.youtube.com/watch?v=UmnCZ7-9yDY"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              click here
            </a>
          </p>
        </section>

        {/* Quote Section */}
        <div className="bg-yellow-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “Java is to programming what oxygen is to life — you may not always see it, but you’re always relying on it.”
          </p>
        </div>

        {/* Try Java Project Button (Updated External Redirect) */}
        <section className="mb-10 text-center">
          <a
            href="https://replit.com/languages/java10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try Java Project
          </a>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/" className="hover:underline hover:text-blue-300">⬅ Back to Home</Link>
          <Link to="/Python" className="hover:underline hover:text-blue-300">Next: Python ➡</Link>
        </div>
      </div>
    </div>
  );
}
