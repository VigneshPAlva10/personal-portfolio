import React from 'react';
import {
  Brain,
  MessageSquare,
  CheckCircle2,
  Code,
  Laptop,
  Users2,
  GitBranch,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Strong Algorithmic Core",
      desc: "Deep grasp of C++ memory, pointers, STL, data structures and complexity analysis."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Exceptional verbal and written communication skills to bridge technical ideas and collaborative goals."
    },
    {
      icon: Laptop,
      title: "Modern Web Craft",
      desc: "Building intuitive, responsive frontend interfaces with Next.js, React, CSS, and Vercel deployment."
    },
    {
      icon: Users2,
      title: "Team Collaboration",
      desc: "Active listener, eager to learn from reviews, and skilled in GitHub pull-request workflows."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-3 py-1 rounded-full mb-3">
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="gradient-text">Vignesh P Alva</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-medium">
              Hello! I'm <span className="text-white font-semibold">Vignesh</span>, a software developer with a rigorous foundation in <span className="text-indigo-400 font-semibold">C++</span> and <span className="text-sky-400 font-semibold">Python</span>, and a strong passion for modern web engineering using <span className="text-teal-400 font-semibold">Next.js</span> and <span className="text-indigo-400 font-semibold">React</span>.
            </p>

            <p>
              My journey began with a curiosity for how computers work under the hood. Writing <span className="text-white font-medium">C++</span> taught me the value of computational efficiency, algorithm optimization, and clean memory management. Meanwhile, leveraging <span className="text-white font-medium">Python</span> gave me the speed and agility to automate tedious workflows, parse data, and prototype ideas rapidly.
            </p>

            <p>
              I believe great software isn't just about writing code that compiles—it's equally about <strong className="text-indigo-300 font-semibold">effective communication and human-centric engineering</strong>. Clear communication allows me to define requirements accurately, collaborate seamlessly in teams, document architecture with precision, and present technical concepts effortlessly.
            </p>

            {/* Core Values List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>C++ & Python Proficiency</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Next.js & React UI Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strong Interpersonal Communication</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Git, GitHub & Vercel Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
