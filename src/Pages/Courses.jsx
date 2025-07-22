import React from "react";
import { Link } from "react-router-dom";


import javaLogo from "../assets/java.svg";
import pythonLogo from "../assets/python.svg";
import golangLogo from "../assets/golang.svg";

import jsLogo from "../assets/JavaScript.svg";
import reactLogo from "../assets/react.svg";
import mysqlLogo from "../assets/MySQL.svg";

const courses = [
  {
    name: "Java",
    path: "/Java",
    logo: javaLogo,
    desc: "Master OOP principles, build scalable systems, and kickstart Android or backend development using Java's robust ecosystem.",
  },
  {
    name: "Python",
    path: "/Python",
    logo: pythonLogo,
    desc: "Learn Python hands-on — from data structures to AI, automation, and real-world applications used across industries.",
  },
  {
    name: "GoLang",
    path: "/GoLang",
    logo: golangLogo,
    desc: "Explore the simplicity and performance of Go for building high-concurrency systems and microservices at scale.",
  },
  {
    name: "JavaScript",
    path: "/JavaScript",
    logo: jsLogo,
    desc: "Get hands-on with the language of the web — build dynamic, interactive websites, and understand the core of frontend development.",
  },
  {
    name: "React",
    path: "/React",
    logo: reactLogo,
    desc: "Learn modern web development with React — build fast, modular UIs and master component-driven architecture with hooks and state.",
  },
  {
    name: "MySQL",
    path: "/MySQL",
    logo: mysqlLogo,
    desc: "Understand relational databases and SQL — learn to design schemas, write complex queries, and manage real-world data efficiently.",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white px-4 py-14">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center text-blue-400 drop-shadow-lg">
          🚀 Explore CodeVerse Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <Link
              key={course.name}
              to={course.path}
              className="bg-gradient-to-r from-gray-800 to-gray-850 border border-gray-700 hover:border-blue-500 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-5">
                <img
                  src={course.logo}
                  alt={`${course.name} logo`}
                  className="w-14 h-14 object-contain"
                />
                <h2 className="text-2xl font-semibold text-white">
                  {course.name}
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {course.desc}
              </p>
              <div className="mt-5 text-blue-400 font-semibold hover:underline transition">
                Start Learning →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
