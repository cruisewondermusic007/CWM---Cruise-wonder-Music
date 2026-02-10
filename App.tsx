
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Facebook, Youtube, Music, Instagram, Disc, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Navbar } from './Navbar.tsx';
import { SideNavArrows } from './components/SideNavArrows.tsx';
import { SOCIAL_LINKS, FORM_ENDPOINT } from './constants.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Members from './pages/Members.tsx';
import DiscographyPage from './pages/Music.tsx';
import Gallery from './pages/Gallery.tsx';
import Videos from './pages/Videos.tsx';
import Platforms from './pages/Platforms.tsx';
import Memorial from './pages/Memorial.tsx';
import Contact from './pages/Contact.tsx';
import Agenda from './pages/Agenda.tsx';
import JoinCWM from './pages/JoinCWM.tsx';
import PressKit from './pages/PressKit.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) setStatus('success');
      else setStatus('idle');
    } catch {
      setStatus('idle');
    }
  };

  return (
    <footer className="py-24 px-6 sm:px-12 border-t border-white/5 bg-black flex flex-col items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-center">
        <div className="space-y-8 text-white">
          <div className="space-y-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Newsletter</h3>
            <h4 className="text-3xl font-black uppercase tracking-tighter">Fica por dentro de tudo</h4>
          </div>
          {status === 'success' ? (
            <div className="flex items-center gap-4 text-green-500 font-black uppercase text-[10px] tracking-widest">
              <CheckCircle2 size={16} />
              <span>Subscrito com sucesso!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
              <input required name="email" type="email" placeholder="TEU E-MAIL" className="flex-grow bg-white/[0.03] border border-white/5 px-6 py-4 rounded-xl focus:border-white outline-none text-[10px] font-bold uppercase tracking-widest text-white" />
              <button disabled={status === 'loading'} className="px-6 py-4 bg-white text-black rounded-xl hover:bg-neutral-200 transition-all">
                {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-[0.5em] uppercase opacity-40 text-white">CWM</h2>
            <p className="text-[9px] text-white/10 tracking-[0.6em] uppercase font-black italic">Cruise Wonder Music Global</p>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 text-white/20">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><Instagram size={20} /></a>
            <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><Music size={20} /></a>
            <a href={SOCIAL_LINKS.appleMusic} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><Disc size={20} /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><Facebook size={20} /></a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 w-full flex flex-col items-center space-y-4 text-white">
        <p className="text-[9px] text-white/10 tracking-[0.5em] font-black uppercase">
          &copy; {new Date().getFullYear()} CWM. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[9px] text-white/30 tracking-[0.3em] font-bold uppercase italic">
          Site desenvolvido por <span className="text-white/60">Dadilson Gervásio</span>.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <Navbar />
        <SideNavArrows />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/music" element={<DiscographyPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="/photo/:id" element={<Navigate to="/gallery" replace />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/memorial" element={<Memorial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<JoinCWM />} />
            <Route path="/presskit" element={<PressKit />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
