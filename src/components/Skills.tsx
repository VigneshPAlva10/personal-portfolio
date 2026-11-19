'use client';

import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Layers,
  Component,
  Globe,
  Palette,
  GitBranch,
  UploadCloud,
  Terminal,
  MessageSquare,
  BrainCircuit,
  Users,
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { skillsData, SkillItem } from '../data/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Layers,
  Component,
  Globe,
  Palette,
  GitBranch,
  UploadCloud,
  Terminal,
  MessageSquare,
  BrainCircuit,
  Users
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frontend' | 'tools' | 'soft-skills'>('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Competencies' },
    { id: 'languages', label: 'Core Languages' },
    { id: 'frontend', label: 'Web & UI' },
    { id: 'tools', label: 'Tools & Cloud' },
    { id: 'soft-skills', label: 'Soft Skills' }
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full mb-3">
            Technical & Interpersonal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            A comprehensive overview of programming languages, frontend systems, developer workflows, and professional soft skills.
          </p>
          <div className="w-16 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const Icon = iconMap[skill.iconName] || Code2;
            const isSoftSkill = skill.category === 'soft-skills';

            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isSoftSkill
                          ? 'bg-amber-500/10 text-amber-400'
                          : skill.category === 'languages'
                          ? 'bg-indigo-500/10 text-indigo-400'
                          : skill.category === 'frontend'
                          ? 'bg-sky-500/10 text-sky-400'
                          : 'bg-emerald-500/10 text-emerald-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        isSoftSkill
                          ? 'bg-amber-950/70 text-amber-300 border border-amber-800/40'
                          : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                  <span>
                    {skill.category === 'languages'
                      ? 'Core Logic & Performance'
                      : skill.category === 'frontend'
                      ? 'UI & Responsive Layouts'
                      : skill.category === 'tools'
                      ? 'Deployment & Productivity'
                      : 'Interpersonal & Collaboration'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Banner for User's exact requested technologies */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-white mb-1">
              Technology Stack In Action
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Next.js & React for framework and UI, CSS for responsive design, JavaScript for interactivity, Lucide React for icons, Git & GitHub for version control, and Vercel for continuous deployment.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Next.js', 'React', 'CSS', 'JavaScript', 'Lucide React', 'Git', 'GitHub', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono font-medium text-indigo-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
