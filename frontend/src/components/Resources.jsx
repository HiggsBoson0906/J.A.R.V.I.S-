import React, { useState, useEffect } from 'react'; 
import Layout from './Layout';
import { BookOpen, ChevronRight, HelpCircle, Play, Send, Sparkles } from 'lucide-react';

export default function Resources() {
  const tabs = ["Thermodynamics", "Calculus", "Organic Chemistry"];
  const [topic, setTopic] = useState(tabs[0]);
  const [resource, setResource] = useState(null);
  
  const [doubtQuestion, setDoubtQuestion] = useState('');
  const [doubtAnswer, setDoubtAnswer] = useState(null);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/api/resources?topic=${topic}`)
      .then(r => r.json())
      .then(d => { if (d.success) setResource(d.data); })
      .catch(e => console.error(e));
  }, [topic]);

  const handleAskDoubt = async () => {
    if (!doubtQuestion) return;
    setAsking(true);
    try {
      const res = await fetch('http://localhost:3001/api/ask-doubt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: doubtQuestion })
      });
      const d = await res.json();
      if (d.success) setDoubtAnswer(d.data);
    } catch(e) {
      alert("Error contacting JARVIS: " + e.message);
    }
    setAsking(false);
  };

  return (
    <Layout>
      <div className="p-8 w-full max-w-7xl mx-auto">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-10 rounded-lg text-white flex justify-between items-center overflow-hidden relative shadow-lg shadow-indigo-600/20">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-widest border border-white/10">Personalized Selection</span>
              <h2 className="text-4xl font-headline font-extrabold mt-4 mb-3 tracking-tight">Curated Learning Path</h2>
              <p className="text-indigo-100 text-lg font-medium leading-relaxed">
                {resource ? resource.reason : "Analyzing your recent attempts to gather the most impactful content for your study journey."}
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none"></div>
            <Sparkles className="text-[120px] opacity-10 absolute right-8 bottom-[-20px]" />
          </div>
        </section>

        <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((t, idx) => (
            <button 
              key={idx}
              onClick={() => setTopic(t)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${topic === t ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-lg overflow-hidden group shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="relative h-[400px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dynamic universe and nebula background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL2exYmic32YRw8ON8QuA9wukIhvao97M9R49YF9h8B_2QFX7rIZjYjC0zY2FzodgEPv3x9sKbTjoGll9-jFRrKFx6oRUdYKA3-KuR8NyItVeRXjhVpebli9zm40wJOfEsVuTsV83ywZMM97ogI6C5OjFWlOB-n4A9zrh6Viu2xRVrUoo68v5s9ipsqpXgGd36VR5tTCue8Chfetg7ZQSUcMD89-Mo8vcZohZG_bfooKFr8afcYzZ6zU8cfv6E9fEKWFARUnS_T0BY"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <div className="flex gap-3 mb-4">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">Recommended Format</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">Video Resource</span>
                </div>
                <h3 className="text-white text-3xl font-headline font-bold mb-2">{topic} Visualized</h3>
                <p className="text-slate-300 max-w-lg mb-6 truncate">{resource ? resource.video_link : "Fetching video URI..."}</p>
                <div className="mt-2 flex items-center gap-4">
                  <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95 hover:bg-slate-100">
                    <Play className="w-4 h-4" fill="currentColor" /> Watch Recommended Video
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 flex flex-col rounded-lg flex-1 shadow-sm border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Sparkles className="text-indigo-600 w-4 h-4" /> JARVIS Doubt Solver
              </h4>
              
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                 {doubtAnswer ? (
                   <div className="space-y-4">
                     <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
                       <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">Explanation</p>
                       <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{doubtAnswer.explanation}</p>
                     </div>
                     <div className="flex gap-4">
                       <div className="bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20 flex-1">
                         <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Hint</p>
                         <p className="text-xs text-slate-700 dark:text-slate-300">{doubtAnswer.hint}</p>
                       </div>
                       <div className="bg-amber-50 dark:bg-amber-500/10 p-4 rounded-xl border border-amber-100 dark:border-amber-500/20 flex-1">
                         <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Exam Tip</p>
                         <p className="text-xs text-slate-700 dark:text-slate-300">{doubtAnswer.exam_tip}</p>
                       </div>
                     </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center px-4">
                     <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                        <BookOpen className="w-8 h-8" />
                     </div>
                     <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Stuck on a problem?</p>
                     <p className="text-xs text-slate-500 mt-2">Ask JARVIS for step-by-step explanations, hints, and exam tricks backed by generative AI.</p>
                   </div>
                 )}
              </div>

              <div className="relative mt-auto">
                <input 
                  type="text" 
                  value={doubtQuestion}
                  onChange={(e) => setDoubtQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskDoubt()}
                  placeholder="Paste your question here..." 
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-900 dark:text-white"
                  disabled={asking}
                />
                <button 
                  onClick={handleAskDoubt}
                  disabled={asking}
                  className="absolute right-1 top-1 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition-all outline-none"
                >
                  <Send className={`w-4 h-4 ${asking ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-8">
              <HelpCircle className="text-indigo-600 dark:text-indigo-400 text-3xl" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Textbook Reference</span>
            </div>
            <h4 className="text-lg font-headline font-bold mb-2 text-slate-900 dark:text-slate-50">Standard Literature</h4>
            <p className="text-xs text-slate-500 mb-6 italic">{resource ? resource.book_ref : "Loading..."}</p>
            <button className="w-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 rounded-full font-bold text-sm transition-colors cursor-pointer border border-slate-200 dark:border-slate-700">Open Library View</button>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-indigo-600 text-white p-8 rounded-lg relative overflow-hidden flex flex-col shadow-lg shadow-indigo-600/20">
            <div className="relative z-10">
              <h4 className="text-2xl font-headline font-extrabold mb-4 leading-tight">Interactive Practice Material</h4>
              <p className="text-indigo-100 text-sm mb-8 leading-relaxed max-w-lg">
                Your assigned practice for this topic is: <span className="font-bold underline">{resource ? resource.practice : "Loading..."}</span>. Completing this will incrementally increase your accuracy mastery.
              </p>
              <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 px-8 py-3 rounded-full font-bold text-sm transition-all active:scale-95 cursor-pointer shadow-sm">
                 Begin Practice Module
                 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <BookOpen className="text-[120px] opacity-10 absolute -right-4 -bottom-4 rotate-12" />
          </div>
        </div>

      </div>
    </Layout>
  );
}
