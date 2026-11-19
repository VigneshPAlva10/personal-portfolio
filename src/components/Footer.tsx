'use client';

import React from 'react';
import { ArrowUp, Github, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                {personalInfo.name}
              </span>
            </div>
            <p className="max-w-sm text-slate-400 text-xs leading-relaxed">
              Software Developer specializing in C++, Python, Next.js, and effective technical communication.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#journey" className="hover:text-indigo-400 transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Built with Next.js, React, CSS & Lucide Icons. Deployed to Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
