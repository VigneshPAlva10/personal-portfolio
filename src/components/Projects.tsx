'use client';

import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Code2,
  CheckCircle,
  FolderGit2,
  Sparkles
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cpp' | 'python' | 'web'>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'cpp') return project.techStack.includes('C++');
    if (selectedCategory === 'python') return project.techStack.includes('Python');
    if (selectedCategory === 'web') return project.techStack.includes('Next.js') || project.techStack.includes('React');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-3 py-1 rounded-full mb-3">
            Handcrafted Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Selected software projects demonstrating technical depth in C++, Python automation, and modern web application development.
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setSelectedCategory('cpp')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'cpp'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            C++ / Systems
          </button>
          <button
            onClick={() => setSelectedCategory('python')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'python'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Python / Automation
          </button>
          <button
            onClick={() => setSelectedCategory('web')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'web'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Next.js & React Web
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-600 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Category & Featured Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-indigo-400 bg-indigo-950/70 px-2.5 py-1 rounded-md border border-indigo-900/40">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/70">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-semibold transition-colors border border-slate-700/60"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-950/70 hover:bg-indigo-900/50 text-indigo-300 text-xs font-semibold transition-all border border-indigo-800/50"
                    >
                      <FolderGit2 className="w-4 h-4" />
                      Explore Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-400 mb-3">
            Looking for more repositories and code experiments?
          </p>
          <a
            href="https://github.com/VigneshPAlva10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700/80 shadow-md transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 text-sky-400" />
            Visit @VigneshPAlva10 on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
