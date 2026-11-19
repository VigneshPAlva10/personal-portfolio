import React from 'react';
import { Calendar, Compass, Milestone, Sparkles } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="journey" className="py-20 relative bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full mb-3">
            Growth & Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Coding <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            How I built a solid computational bedrock in C++ and Python, and elevated it into modern full-stack web engineering.
          </p>
          <div className="w-16 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-12">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on the timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-500/50" />

              {/* Milestone Card */}
              <div className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-indigo-400 font-mono">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-slate-400">
                    {milestone.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
