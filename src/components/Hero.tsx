'use client';

import React, { useState } from 'react';
import {
  Github,
  Mail,
  ArrowRight,
  FileText,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {personalInfo.status}
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Passionate programmer specializing in <strong className="text-white font-semibold">C++</strong> and <strong className="text-white font-semibold">Python</strong>, building responsive modern web applications with <strong className="text-white font-semibold">Next.js</strong> & <strong className="text-white font-semibold">React</strong>. Equipped with strong technical and interpersonal communication skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="glow-btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all hover:border-slate-500"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              View Resume
            </button>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-all hover:text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Email Quick-Copy & GitHub Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>github.com/VigneshPAlva10</span>
            </a>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/40 text-slate-300 text-xs font-mono">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                className="ml-1.5 p-1 rounded hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] font-medium text-emerald-400 animate-fade-in">
                Email copied!
              </span>
            )}
          </div>

          {/* Core Tech Stack Highlights Badge Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">Core Language</p>
                <p className="text-sm font-semibold text-white">C++ (STL, OOP)</p>
              </div>
            </div>

            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">Automation</p>
                <p className="text-sm font-semibold text-white">Python</p>
              </div>
            </div>

            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">Modern UI</p>
                <p className="text-sm font-semibold text-white">Next.js & React</p>
              </div>
            </div>

            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium">Key Strength</p>
                <p className="text-sm font-semibold text-white">Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
