// src/pages/MySQL.jsx

import React from "react";
import { Link } from "react-router-dom";
import mysqlLogo from "../assets/mysql.svg";

export default function MySQL() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto relative">
        {/* MySQL Logo in Top Right */}
        <div className="absolute top-0 right-0 m-6">
          <img
            src={mysqlLogo}
            alt="MySQL Logo"
            className="w-24 h-24 rounded-full border-4 border-emerald-400 shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-extrabold text-emerald-400 tracking-tight">
            MySQL Database Mastery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
            Learn how to structure, query, and manage relational databases with MySQL — one of the world’s most popular open-source databases.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { title: "🗃️ Relational Model", desc: "Structured schema with tables." },
            { title: "📊 SQL Mastery", desc: "Powerful querying language." },
            { title: "🔒 Secure & Scalable", desc: "Widely used in production systems." },
            { title: "⚙️ Data Integrity", desc: "Constraints, keys, and ACID compliance." },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-emerald-500/30 transition">
              <h3 className="text-lg font-bold text-emerald-300">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">🧠 Key Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Database & Table Design</li>
            <li>CRUD Operations (SELECT, INSERT, UPDATE, DELETE)</li>
            <li>Joins, Subqueries, and Views</li>
            <li>Primary & Foreign Keys</li>
            <li>Indexes & Optimization</li>
            <li>Stored Procedures and Triggers</li>
            <li>MySQL Workbench Usage</li>
            <li>Data Backup & Export</li>
          </ul>
        </section>

        {/* Where Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">🌍 Where MySQL Shines</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>🌐 Backend for Web Apps</p>
              <p>📊 Business Intelligence Tools</p>
              <p>🛒 E-Commerce Platforms</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p>📱 Mobile App Backends</p>
              <p>📚 CMS like WordPress</p>
              <p>🔐 Secure Transaction Systems</p>
            </div>
          </div>
        </section>

        {/* Sample Code Block */}
        <section className="bg-gray-800 rounded-xl p-6 mb-14">
          <h3 className="text-xl font-semibold text-white mb-4">💡 Sample MySQL Query</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
{`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
          </pre>
        </section>

        {/* YouTube Embed */}
        <section className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-4">🎥 Full MySQL Course (YouTube)</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7S_tz1z_5bA"
              title="MySQL Full Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-blue-400 text-sm mt-2">
            📺 Watch directly on YouTube —{" "}
            <a
              href="https://www.youtube.com/watch?v=7S_tz1z_5bA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              click here
            </a>
          </p>
        </section>

        {/* Quote Section */}
        <div className="bg-emerald-100 text-gray-900 p-6 rounded-xl shadow-inner mb-14">
          <p className="italic text-lg text-center max-w-3xl mx-auto">
            “A good database structure is the backbone of powerful applications.”
          </p>
        </div>

        {/* Try MySQL Button */}
        <section className="mb-10 text-center">
          <a
            href="https://onecompiler.com/mysql"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            🚀 Try MySQL Online
          </a>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between border-t border-gray-700 pt-6 text-blue-400 font-medium">
          <Link to="/React" className="hover:underline hover:text-blue-300">⬅ Back to React</Link>
          <Link to="/" className="hover:underline hover:text-blue-300">🏠 Home ➡</Link>
        </div>
      </div>
    </div>
  );
}
