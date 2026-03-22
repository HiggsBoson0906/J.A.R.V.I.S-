import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BarChart2, Bell, BookOpen, Bot, Calendar, Check, Clock, Home, Search, Timer, User, Moon, Sun, X } from 'lucide-react';
import { useTimer } from './TimerContext';

const DUMMY_NOTIFICATIONS = [
  { id: 1, read: false, icon: '📅', title: 'Make your timetable for tomorrow', body: 'J.A.R.V.I.S. recommends scheduling sessions for Thermodynamics and Calculus.', time: '2 min ago' },
  { id: 2, read: false, icon: '⚡', title: 'New weak topic detected', body: 'Organic Chemistry accuracy dropped below 50%. Resources have been queued.', time: '18 min ago' },
  { id: 3, read: true, icon: '🏆', title: 'Streak milestone reached!', body: 'You have maintained a 12-day study streak. Keep it up!', time: '1 hr ago' },
  { id: 4, read: true, icon: '🤖', title: 'AI Plan ready', body: 'Your optimized study plan for the week has been generated.', time: '3 hr ago' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isActive, timeLeft } = useTimer();
  const [isDark, setIsDark] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState(DUMMY_NOTIFICATIONS);
  const notifRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('jarvis-theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
    
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    const nowDark = root.classList.contains('dark');
    setIsDark(nowDark);
    localStorage.setItem('jarvis-theme', nowDark ? 'dark' : 'light');
  };

  const NavLinkItem = ({ to, icon, label }) => {
    const active = location.pathname === to;
    return (
      <Link to={to} className={`flex items-center gap-3 px-4 py-3 font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-xl ${active ? 'text-indigo-700 dark:text-indigo-400 font-bold bg-white dark:bg-slate-800 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
        {icon}
        <span className="text-sm font-label">{label}</span>
      </Link>
    );
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 min-h-screen font-body">
      <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-indigo-50/50 dark:bg-slate-900 flex flex-col p-4 border-r border-slate-200 dark:border-slate-800">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter font-headline text-indigo-700 dark:text-slate-200">J.A.R.V.I.S.</h1>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">AI Study Platform</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <NavLinkItem to="/" icon={<Home className="w-5 h-5"/>} label="Home" />
          <NavLinkItem to="/planner" icon={<Calendar className="w-5 h-5"/>} label="Planner" />
          <NavLinkItem to="/timer" icon={<Timer className="w-5 h-5"/>} label="Timer" />
          <NavLinkItem to="/performance" icon={<BarChart2 className="w-5 h-5"/>} label="Performance" />
          <NavLinkItem to="/resources" icon={<BookOpen className="w-5 h-5"/>} label="Resources" />
        </nav>
        <Link to="/profile" className="mt-auto p-4 bg-white dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group block border border-slate-200 dark:border-slate-700/50 shadow-sm">
          <div className="flex items-center gap-3">
            <img alt="User Avatar" className="w-10 h-10 rounded-full bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTr2lSjNuE4tN0G-ObCMlK1bUjLt73TgkJffJqESR_8P94gTXK08qduVe32ZXqUlySDi3ugqoO7oI5Bk8IVW7fdD8_sBQ9wztJycb5macSYk2z7aZyVjg_ram7xUwCX6VUoy8d-476ca2VITXvkr8ldff6GIWTInGjU6_y-PtcXUqRL90zJUBZZE2Oo0WSDlzmEoFb5_qNf6MG-Sq1sXaAKRmRUgkATabgLp_0SmxZ_5JWm_ItYJX6CaL1j6UwOhmG2-XUQ6no1fwm"/>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate dark:text-slate-200">Alex Chen</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Pro Plan</p>
            </div>
            <User className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0" />
          </div>
        </Link>
      </aside>

      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-30 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center h-16 px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 w-96 shadow-sm">
          <Search className="text-slate-400 w-4 h-4" />
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 dark:placeholder:text-slate-500 ml-2 outline-none dark:text-white" placeholder="Search resources, notes..." type="text"/>
        </div>
        <div className="flex items-center gap-4">
          
          {isActive && (
            <button onClick={() => navigate('/timer')} className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse border border-indigo-200 dark:border-indigo-500/30 cursor-pointer shadow-sm">
              <Timer className="w-3 h-3" /> {Math.floor(timeLeft/60)}:{(timeLeft%60).toString().padStart(2, '0')}
            </button>
          )}

          <button onClick={toggleTheme} className="hover:bg-slate-200 dark:bg-slate-800 rounded-full p-2 transition-all active:opacity-80 text-slate-600 dark:text-slate-400 cursor-pointer">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {/* Notification Bell + Dropdown */}
          <div className="relative" ref={notifRef}>
            <button onClick={() => setNotifOpen(o => !o)} className="hover:bg-slate-200 dark:bg-slate-800 rounded-full p-2 transition-all relative active:opacity-80 cursor-pointer">
              <Bell className="text-slate-600 dark:text-slate-400 w-5 h-5" />
              {notifs.some(n => !n.read) && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-950"></span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-12 w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/20 dark:shadow-black/40 border border-slate-200 dark:border-slate-800 z-50 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-slate-50 text-sm">Notifications</h3>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setNotifs(notifs.map(n => ({...n, read: true})))} className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer uppercase tracking-widest">Mark all read</button>
                    <button onClick={() => setNotifOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"><X className="w-4 h-4" /></button>
                  </div>
                </div>

                {/* Notification List */}
                <div className="max-h-96 overflow-y-auto">
                  {notifs.map(n => (
                    <div key={n.id} onClick={() => setNotifs(notifs.map(x => x.id === n.id ? {...x, read: true} : x))} className={`flex items-start gap-4 px-5 py-4 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-800/60 last:border-none ${n.read ? 'bg-white dark:bg-slate-900' : 'bg-indigo-50/60 dark:bg-indigo-500/5 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'}`}>
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg flex-shrink-0 border border-slate-200 dark:border-slate-700">{n.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate ${n.read ? 'text-slate-600 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>{n.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed line-clamp-2">{n.body}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
                        </div>
                      </div>
                      {!n.read && <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2"></span>}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
                  <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer w-full text-center">View all activity →</button>
                </div>
              </div>
            )}
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
          <img alt="User Avatar" className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-indigo-500 transition-all border border-slate-200 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTr2lSjNuE4tN0G-ObCMlK1bUjLt73TgkJffJqESR_8P94gTXK08qduVe32ZXqUlySDi3ugqoO7oI5Bk8IVW7fdD8_sBQ9wztJycb5macSYk2z7aZyVjg_ram7xUwCX6VUoy8d-476ca2VITXvkr8ldff6GIWTInGjU6_y-PtcXUqRL90zJUBZZE2Oo0WSDlzmEoFb5_qNf6MG-Sq1sXaAKRmRUgkATabgLp_0SmxZ_5JWm_ItYJX6CaL1j6UwOhmG2-XUQ6no1fwm"/>
        </div>
      </header>

      <main className="ml-64 pt-24 min-h-screen">
        {children}
      </main>

      <button className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center hover:scale-110 hover:shadow-indigo-600/50 active:scale-95 transition-all duration-300 group cursor-pointer">
        <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
