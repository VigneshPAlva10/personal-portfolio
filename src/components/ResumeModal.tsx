'use client';

import React from 'react';
import { X, Printer, Download, Mail, Github, Code, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-mono text-slate-400">
              {personalInfo.name} - Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-900 text-slate-200">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-indigo-400 font-medium text-sm mt-1">
                Software Developer (C++, Python, Next.js, React)
              </p>
            </div>
            <div className="flex flex-col sm:items-end text-xs font-mono text-slate-300 space-y-1">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.email}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-sky-400" />
                github.com/VigneshPAlva10
              </a>
              <span className="text-slate-400">Location: India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-900/40 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enthusiastic and detail-oriented Software Developer with core foundations in C++ object-oriented design and Python scripting, paired with modern web engineering in React and Next.js. Recognized for high-level problem-solving capabilities, rapid adaptability, and outstanding technical communication skills.
            </p>
          </div>

          {/* Core Technical & Soft Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-900/40 pb-1 mb-3">
              Technical & Soft Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <p className="font-semibold text-white mb-1">Programming Languages</p>
                <p className="text-slate-300">C++ (STL, OOP, Data Structures, Memory Management), Python (Automation, Scripting, File I/O), JavaScript (ES6+)</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <p className="font-semibold text-white mb-1">Web & Frontend Technologies</p>
                <p className="text-slate-300">Next.js (App Router), React.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design, Lucide React</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <p className="font-semibold text-white mb-1">Developer Tools & Deployment</p>
                <p className="text-slate-300">Git, GitHub, Vercel, VS Code, PowerShell / Terminal CLI, npm, CI/CD basics</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <p className="font-semibold text-white mb-1">Interpersonal & Soft Skills</p>
                <p className="text-slate-300">Clear Communication, Cross-Functional Teamwork, Analytical Problem Solving, Agile Adaptability</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-900/40 pb-1 mb-3">
              Highlighted Projects
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-indigo-500 pl-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">High-Performance C++ Algorithm Suite</span>
                  <span className="text-slate-400 font-mono">C++, STL, Algorithms</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered modular implementations of graph algorithms, sorting trees, and dynamic programming with rigorous memory efficiency and benchmarked runtime metrics.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 pl-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Python Automation & Data Processing Hub</span>
                  <span className="text-slate-400 font-mono">Python, File I/O, Automation</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Developed automated data processing pipelines for cleaning, restructuring, and analyzing batch datasets with resilient error handling and CLI reporting.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 pl-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Modern Developer Portfolio Platform</span>
                  <span className="text-slate-400 font-mono">Next.js, React, Tailwind, Vercel</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Built a responsive, accessible portfolio application with Next.js App Router, featuring interactive contact handling, custom typography, and Vercel hosting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Press Print/Save PDF or use browser print dialog.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
