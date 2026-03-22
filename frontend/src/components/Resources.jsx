import React, { useState, useEffect } from 'react'; 
import Layout from './Layout';
import { BookOpen, ChevronRight, ExternalLink, Play, Sparkles } from 'lucide-react';

const EXTERNAL_COURSES = [
  { name: 'Physics Wallah', short: 'PW', url: 'https://pw.live', color: 'bg-orange-500', desc: 'India\'s fastest growing ed-tech' },
  { name: 'Vedantu', short: 'V', url: 'https://vedantu.com', color: 'bg-indigo-500', desc: 'Live interactive classes' },
  { name: 'Unacademy', short: 'U', url: 'https://unacademy.com', color: 'bg-green-500', desc: 'Structured prep courses' },
  { name: 'Khan Academy', short: 'K', url: 'https://khanacademy.org', color: 'bg-sky-500', desc: 'Free world-class education' },
];

export default function Resources() {
  const tabs = ["Thermodynamics", "Calculus", "Organic Chemistry"];
  const [topic, setTopic] = useState(tabs[0]);
  const [resource, setResource] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/resources?topic=${topic}`)
      .then(r => r.json())
      .then(d => { if (d.success) setResource(d.data); })
      .catch(e => console.error(e));
  }, [topic]);

  return (
    <Layout>
      <div className="p-8 w-full max-w-7xl mx-auto space-y-12">

        {/* External Courses */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-extrabold font-headline text-slate-900 dark:text-slate-50">External Courses</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Jump into top platforms directly from JARVIS</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EXTERNAL_COURSES.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 cursor-pointer">
                <div className={`${c.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>{c.short}</div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 dark:text-slate-50 text-sm truncate">{c.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{c.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors ml-auto flex-shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* Hero Banner */}
        <section>
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-10 rounded-xl text-white flex justify-between items-center overflow-hidden relative shadow-lg shadow-indigo-600/20">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-widest border border-white/10">Personalized Selection</span>
              <h2 className="text-4xl font-headline font-extrabold mt-4 mb-3 tracking-tight">Curated Learning Path</h2>
              <p className="text-indigo-100 text-lg font-medium leading-relaxed">
                {resource ? resource.reason : "Analyzing your recent attempts to surface the most impactful content for your journey."}
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none"></div>
            <Sparkles className="text-[120px] opacity-10 absolute right-8 bottom-[-20px]" />
          </div>
        </section>

        {/* Topic Tabs */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((t, idx) => (
            <button 
              key={idx} onClick={() => setTopic(t)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap ${topic === t ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >{t}</button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Featured Video Card */}
          <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl overflow-hidden group shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="relative h-[380px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL2exYmic32YRw8ON8QuA9wukIhvao97M9R49YF9h8B_2QFX7rIZjYjC0zY2FzodgEPv3x9sKbTjoGll9-jFRrKFx6oRUdYKA3-KuR8NyItVeRXjhVpebli9zm40wJOfEsVuTsV83ywZMM97ogI6C5OjFWlOB-n4A9zrh6Viu2xRVrUoo68v5s9ipsqpXgGd36VR5tTCue8Chfetg7ZQSUcMD89-Mo8vcZohZG_bfooKFr8afcYzZ6zU8cfv6E9fEKWFARUnS_T0BY" alt="Topic visual"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8">
                <div className="flex gap-3 mb-4">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Recommended</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Video</span>
                </div>
                <h3 className="text-white text-3xl font-headline font-bold mb-2">{topic} — Deep Dive</h3>
                <p className="text-slate-300 truncate max-w-lg mb-6">{resource ? resource.video_link : "Fetching resource..."}</p>
                <button className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all w-fit shadow-sm">
                  <Play className="w-4 h-4" fill="currentColor" /> Watch Recommended
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Focus Area + Quick Practice */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">

            {/* Focus Area Card — matches the screenshot */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="bg-red-500 px-5 py-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs font-black text-white">!</span>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Focus Area</span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-extrabold font-headline text-slate-900 dark:text-slate-50 mb-1">Struggling with {topic}?</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  You've missed 4 practice questions related to <span className="font-bold text-slate-700 dark:text-slate-300">this topic</span> this week.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">Core Concepts</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Quick Practice Card — matches the screenshot */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-5">Quick Practice</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-100 dark:border-slate-700">
                  <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">10-Min Quiz</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{topic} Equations</p>
                  </div>
                  <ChevronRight className="text-slate-400 w-5 h-5" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-100 dark:border-slate-700">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Concept Sketch</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Infinite Wells</p>
                  </div>
                  <ChevronRight className="text-slate-400 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Textbook Reference */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Textbook Reference</p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-50 mb-1 italic">{resource ? resource.book_ref : "Loading..."}</p>
              <button className="mt-3 w-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2.5 rounded-lg font-bold text-xs transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">Open Library View</button>
            </div>
          </div>

          {/* Practice Module Full-width Banner */}
          <div className="col-span-12 bg-indigo-600 text-white p-8 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-indigo-600/20">
            <div className="relative z-10">
              <h4 className="text-2xl font-headline font-extrabold mb-2 leading-tight">Interactive Practice: {topic}</h4>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-lg">
                Your assigned practice module for this topic: <span className="font-bold underline">{resource ? resource.practice : "Loading..."}</span>
              </p>
            </div>
            <button className="z-10 inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 px-8 py-3 rounded-full font-bold text-sm transition-all active:scale-95 shadow-sm whitespace-nowrap">
              Begin Practice Module <ChevronRight className="w-4 h-4" />
            </button>
            <BookOpen className="text-[140px] opacity-10 absolute -right-6 -bottom-6 rotate-12" />
          </div>

        </div>
      </div>
    </Layout>
  );
}
