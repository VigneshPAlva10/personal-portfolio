'use client';

import React, { useState } from 'react';
import {
  Mail,
  Github,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Basic email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate sending / preparing mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-3 py-1 rounded-full mb-3">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Whether you have an opportunity, an open-source collaboration, or simply want to discuss C++, Python, or web engineering, my inbox is open!
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Fast Response
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Email Vignesh
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Direct inquiries, project proposals, and technical discussions.
                </p>
                <p className="text-sm font-mono text-indigo-300 font-medium break-all mb-4">
                  {personalInfo.email}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors border border-slate-700/60"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  title="Open mail client"
                  aria-label="Send email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 w-fit mb-4">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  GitHub Profile
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Check out repositories, code commits, and open-source contributions.
                </p>
                <p className="text-sm font-mono text-sky-300 font-medium break-all mb-4">
                  github.com/VigneshPAlva10
                </p>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors border border-slate-700/60"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Communication Guarantee Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Communication Commitment
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Clear, prompt, and friendly responses within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below to reach Vignesh directly.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-white">{formData.name}</strong>. You can click below to immediately launch your email client with this pre-filled message, or reach out to <strong className="text-indigo-300">{personalInfo.email}</strong>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      onClick={openMailClient}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg transition-all"
                    >
                      Open Email App Now
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Collaboration / Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Vignesh, I saw your portfolio and would love to discuss..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-btn flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
