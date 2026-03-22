import React from 'react'; 
import Layout from './Layout';
import { BarChart2, Bell, BookOpen, Bot, Calendar, CheckCircle, ChevronRight, HelpCircle, Home, Search, Timer } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <Layout>
      {/*  SideNavBar (Shared Component)  */}

{/*  TopNavBar (Shared Component)  */}

{/*  Main Content Canvas  */}
<div className="p-8 w-full max-w-7xl mx-auto">
<div className="max-w-6xl mx-auto space-y-10">
{/*  Bento Layout Header  */}
<div className="grid grid-cols-12 gap-8 items-stretch">
{/*  User Info Card  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-10 rounded-lg flex flex-col md:flex-row gap-8 items-center md:items-start">
<div className="relative group">
<div className="w-32 h-32 rounded-full ring-4 ring-primary-fixed overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Large detailed user profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1qh2-OrycgKHi2zdWbygbOpwaIE2Q99z_4QvySvXGoAL1_FnwORFC-SKfVjR88FOUN8TNyirhQgRebk41ceBKmpu1Vm88zLZJiFV_qfo17nHQWb1j-pGc1KoY-X0RW-0rLqNf-uCFZVy2t2QGXTMrljtbjXG-f4UFumt7H2i_1Av4lLUR3M5VAh-AdpBEHhtTcxnZIN_0wVdPogoClLFMatOLoxN6E1BGj4s6QTu0u73GevcXiGQv_aq8RK88iwVFXwV_a-p-Td1g"/>
</div>
<button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:scale-110 transition-transform">
<HelpCircle className="text-sm" />
</button>
</div>
<div className="flex-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Alex Carter</h2>
<p className="text-primary font-semibold font-label uppercase tracking-widest text-xs mt-1">Graduate Student • Computer Science</p>
</div>
<button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">Edit Profile</button>
</div>
<div className="mt-6 space-y-4">
<p className="text-on-surface-variant leading-relaxed max-w-xl font-body">
                                Passionate about AI ethics and distributed systems. Currently mastering Neural Networks while juggling three core projects. I believe in deep work and consistent, incremental progress.
                            </p>
<div className="flex flex-wrap gap-3">
<span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant flex items-center gap-2">
<HelpCircle className="text-sm" /> Stanford, CA
                                </span>
<span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant flex items-center gap-2">
<HelpCircle className="text-sm" /> alex.c@stanford.edu
                                </span>
</div>
</div>
</div>
</div>
{/*  Stats Quick View  */}
<div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-10 rounded-lg flex flex-col justify-between">
<div>
<h3 className="text-lg font-bold opacity-80 font-headline">Academic Rank</h3>
<p className="text-4xl font-black mt-2">Elite Learner</p>
</div>
<div className="space-y-6 mt-8">
<div>
<div className="flex justify-between text-sm font-bold mb-2">
<span>Current Streak</span>
<span>14 Days</span>
</div>
<div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-3/4 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="bg-white/10 p-3 rounded-xl">
<HelpCircle className="text-2xl" />
</div>
<span className="text-sm font-medium">Top 5% of active students this month</span>
</div>
</div>
</div>
</div>
{/*  Dashboard Sections Grid  */}
<div className="grid grid-cols-12 gap-8">
{/*  Performance Stats  */}
<div className="col-span-12 lg:col-span-7 space-y-8">
<h3 className="text-xl font-bold px-2">Learning Analytics</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Total Study Hours  */}
<div className="bg-surface-container-low p-8 rounded-lg">
<div className="flex items-center justify-between mb-4">
<HelpCircle className="text-primary text-3xl" />
<span className="text-xs font-bold text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">+12% this week</span>
</div>
<p className="text-sm font-medium text-on-surface-variant uppercase tracking-tighter">Total Study Time</p>
<h4 className="text-4xl font-black text-on-surface mt-1">428.5 <span className="text-lg font-normal text-on-surface-variant">hrs</span></h4>
</div>
{/*  Completed Sessions  */}
<div className="bg-surface-container-low p-8 rounded-lg">
<div className="flex items-center justify-between mb-4">
<CheckCircle className="text-primary text-3xl" />
<span className="text-xs font-bold text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">98% Success</span>
</div>
<p className="text-sm font-medium text-on-surface-variant uppercase tracking-tighter">Sessions Completed</p>
<h4 className="text-4xl font-black text-on-surface mt-1">1,240 <span className="text-lg font-normal text-on-surface-variant">Total</span></h4>
</div>
</div>
{/*  Focus Trend (Visual Representation)  */}
<div className="bg-surface-container-lowest p-8 rounded-lg">
<div className="flex items-center justify-between mb-8">
<h4 className="font-bold">Focus Distribution</h4>
<select className="bg-surface-container-high border-none rounded-md text-xs font-bold focus:ring-0">
<option>Last 30 Days</option>
<option>Last 7 Days</option>
</select>
</div>
<div className="flex items-end justify-between h-48 gap-4 px-2">
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[40%] rounded-t-xl group relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mon</div>
</div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[65%] rounded-t-xl group relative"></div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[85%] rounded-t-xl group relative"></div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[45%] rounded-t-xl group relative"></div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[95%] rounded-t-xl group relative"></div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[60%] rounded-t-xl group relative"></div>
<div className="w-full bg-primary-fixed hover:bg-primary transition-colors h-[75%] rounded-t-xl group relative"></div>
</div>
</div>
</div>
{/*  Settings & Preferences  */}
<div className="col-span-12 lg:col-span-5 space-y-8">
<h3 className="text-xl font-bold px-2">System Preferences</h3>
<div className="bg-surface-container-lowest rounded-lg divide-y divide-surface-container-high">
{/*  Dark Mode Toggle  */}
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-surface-container-high p-3 rounded-full">
<HelpCircle className="text-on-surface-variant" />
</div>
<div>
<p className="font-bold text-sm">Midnight Interface</p>
<p className="text-xs text-on-surface-variant">Switch to high-contrast dark theme</p>
</div>
</div>
<div className="w-12 h-6 bg-surface-container-highest rounded-full p-1 cursor-pointer">
<div className="w-4 h-4 bg-on-surface-variant rounded-full"></div>
</div>
</div>
{/*  Notifications  */}
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-surface-container-high p-3 rounded-full">
<HelpCircle className="text-on-surface-variant" />
</div>
<div>
<p className="font-bold text-sm">Focus Reminders</p>
<p className="text-xs text-on-surface-variant">Get pinged when it's time to study</p>
</div>
</div>
<div className="w-12 h-6 bg-primary rounded-full p-1 cursor-pointer relative">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
</div>
{/*  AI Assistant  */}
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-surface-container-high p-3 rounded-full">
<HelpCircle className="text-on-surface-variant" />
</div>
<div>
<p className="font-bold text-sm">Adaptive Difficulty</p>
<p className="text-xs text-on-surface-variant">AI tunes session length to focus levels</p>
</div>
</div>
<div className="w-12 h-6 bg-primary rounded-full p-1 cursor-pointer relative">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
</div>
{/*  Security  */}
<div className="p-6 flex items-center justify-between group cursor-pointer hover:bg-surface-container-low transition-colors rounded-b-lg">
<div className="flex items-center gap-4">
<div className="bg-surface-container-high p-3 rounded-full">
<HelpCircle className="text-on-surface-variant" />
</div>
<div>
<p className="font-bold text-sm">Privacy &amp; Security</p>
<p className="text-xs text-on-surface-variant">Manage your data and cloud sync</p>
</div>
</div>
<ChevronRight className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
</div>
</div>
{/*  Subscription/Storage  */}
<div className="bg-secondary-container p-8 rounded-lg">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="font-black text-on-secondary-container text-lg">Knowledge Cloud</h4>
<p className="text-sm font-medium opacity-80">8.2 GB of 20 GB used</p>
</div>
<HelpCircle className="text-on-secondary-container" />
</div>
<div className="h-3 w-full bg-white/30 rounded-full overflow-hidden mb-6">
<div className="h-full bg-primary w-[41%] rounded-full"></div>
</div>
<button className="w-full bg-white text-on-surface font-bold py-3 rounded-full text-sm hover:bg-opacity-90 transition-all">Upgrade Storage</button>
</div>
</div>
</div>
</div>
</div>
{/*  Floating AI Chatbot Button  */}

    </Layout>
  );
}
