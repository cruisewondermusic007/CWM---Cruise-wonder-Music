
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Video, Image as ImageIcon, Globe, Heart, 
  Phone, Home as HomeIcon, Info, Users, Disc, Calendar,
  Activity, UserPlus, FileText, ChevronRight, X, Menu,
  Share2, Cake, Copy, MessageCircle, Twitter, Facebook, ExternalLink
} from 'lucide-react';
import { MEMBERS, SOCIAL_LINKS } from './constants.tsx';

// --- Sub-componente: Compact Group Status Badge ---
const CompactStatusBadge: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = () => {
    setShowTooltip(!showTooltip);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!showTooltip) {
      timerRef.current = setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  return (
    <div className="relative flex items-center h-full px-2">
      <button 
        onClick={handleToggle}
        className="flex items-center gap-2 group transition-all"
        aria-label="Situação do Grupo"
      >
        <div className="relative w-12 h-6 flex items-center justify-center">
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
            <path d="M0,20 L30,20 L35,5 L45,35 L50,20 L100,20" stroke="white" strokeWidth="1" fill="none" className="opacity-10" />
            <path 
              d="M30,20 L35,5 L45,35 L50,20" 
              stroke="#22C55E" 
              strokeWidth="2" 
              fill="none" 
              className="opacity-40 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#22C55E]" 
            />
          </svg>
        </div>
      </button>

      {showTooltip && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[3000] bg-neutral-900 border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group/link"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22C55E]"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover/link:text-white whitespace-nowrap">Online agora</span>
            <ExternalLink size={10} className="text-white/20 group-hover/link:text-white" />
          </a>
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'menu' | 'share' | 'birthdays' | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: 'Início', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'Sobre', path: '/about', icon: <Info size={18} /> },
    { name: 'Agenda', path: '/agenda', icon: <Calendar size={18} /> },
    { name: 'Membros', path: '/members', icon: <Users size={18} /> },
    { name: 'Música', path: '/music', icon: <Disc size={18} /> },
    { name: 'Galeria', path: '/gallery', icon: <ImageIcon size={18} /> },
    { name: 'Vídeos', path: '/videos', icon: <Video size={18} /> },
    { name: 'Plataformas', path: '/platforms', icon: <Globe size={18} /> },
    { name: 'Memorial', path: '/memorial', icon: <Heart size={18} /> },
    { name: 'Recrutamento', path: '/join', icon: <UserPlus size={18} /> },
    { name: 'Press Kit', path: '/presskit', icon: <FileText size={18} /> },
    { name: 'Contacto', path: '/contact', icon: <Phone size={18} /> },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActivePanel(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CWM – Cruise Wonder Music',
          text: 'Confira o site oficial do coletivo CWM!',
          url: window.location.href,
        });
      } catch (err) { console.log('Share failed', err); }
    }
  };

  const birthdays = MEMBERS.filter(m => !!m.birthDate).map(m => {
    const bday = new Date(m.birthDate!);
    const today = new Date();
    let age = today.getFullYear() - bday.getFullYear();
    const mDiff = today.getMonth() - bday.getMonth();
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < bday.getDate())) age--;
    return {
      name: m.name,
      date: bday.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' }),
      turning: age + 1
    };
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/10 h-20 flex items-center px-4 sm:px-12 justify-between" ref={navRef}>
      {/* HOME BUTTON - SHADOW REMOVED */}
      <Link 
        to="/" 
        className="group relative flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-r from-white via-neutral-100 to-white border border-white/20 transition-all hover:scale-[1.03] active:scale-95"
      >
        <HomeIcon size={18} className="text-black transition-transform group-hover:scale-110 relative z-10" />
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* BIRTHDAYS ICON */}
        <div className="relative">
          <button 
            onClick={() => setActivePanel(activePanel === 'birthdays' ? null : 'birthdays')}
            className={`p-2.5 rounded-full transition-all border ${activePanel === 'birthdays' ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:border-white/20'}`}
          >
            <Cake size={18} />
          </button>
          {activePanel === 'birthdays' && (
            <div className="absolute top-14 right-0 w-64 bg-neutral-900 border border-white/20 rounded-[24px] shadow-2xl p-5 z-[3000] animate-in fade-in slide-in-from-top-2 duration-200">
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-4 pl-1">Aniversariantes</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {birthdays.length > 0 ? birthdays.map(b => (
                  <div key={b.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{b.name.split(' ')[0]}</span>
                      <span className="text-[8px] font-bold text-white/20 uppercase">Fará {b.turning} anos</span>
                    </div>
                    <span className="text-[10px] font-black text-white/40 italic">{b.date}</span>
                  </div>
                )) : <p className="text-[9px] font-black uppercase text-white/10 text-center py-4">Sem dados disponíveis</p>}
              </div>
            </div>
          )}
        </div>

        {/* COMPACT STATUS BADGE */}
        <CompactStatusBadge />

        {/* SHARE ICON */}
        <div className="relative">
          <button 
            onClick={() => setActivePanel(activePanel === 'share' ? null : 'share')}
            className={`p-2.5 rounded-full transition-all border ${activePanel === 'share' ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:border-white/20'}`}
          >
            <Share2 size={18} />
          </button>
          {activePanel === 'share' && (
            <div className="absolute top-14 right-0 w-64 bg-neutral-900 border border-white/20 rounded-[24px] shadow-2xl p-4 z-[3000] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="space-y-1.5">
                <button onClick={handleCopyLink} className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <Copy size={16} className="text-white/20 group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{copySuccess ? 'Copiado!' : 'Copiar Link'}</span>
                  </div>
                </button>
                {navigator.share && (
                  <button onClick={handleNativeShare} className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <Share2 size={16} className="text-white/20 group-hover:text-white" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Partilhar...</span>
                    </div>
                  </button>
                )}
                <div className="pt-2 grid grid-cols-3 gap-1">
                  <a href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} target="_blank" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] transition-all">
                    <MessageCircle size={14} className="text-white/20" /><span className="text-[7px] font-black uppercase opacity-40">Whats</span>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] transition-all">
                    <Twitter size={14} className="text-white/20" /><span className="text-[7px] font-black uppercase opacity-40">Twitter</span>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/[0.01] hover:bg-white/[0.05] transition-all">
                    <Facebook size={14} className="text-white/20" /><span className="text-[7px] font-black uppercase opacity-40">Face</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* OPTIONS MENU */}
        <div className="relative">
          <button 
            onClick={() => setActivePanel(activePanel === 'menu' ? null : 'menu')} 
            className={`p-2.5 rounded-full transition-all border ${activePanel === 'menu' ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:border-white/20'}`}
          >
            {activePanel === 'menu' ? <X size={18} /> : <Menu size={18} />}
          </button>
          {activePanel === 'menu' && (
            <div className="absolute top-14 right-0 w-72 bg-neutral-900/95 border border-white/20 rounded-[32px] shadow-2xl py-4 z-[3000] animate-in fade-in zoom-in-95 duration-200 backdrop-blur-xl">
              <div className="max-h-[70vh] overflow-y-auto">
                {navigationItems.map(item => (
                  <Link key={item.path} to={item.path} onClick={() => setActivePanel(null)} className={`flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-all group ${location.pathname === item.path ? 'text-white bg-white/[0.03]' : 'text-white/40'}`}>
                    <div className="flex items-center gap-4">
                      <span className={`transition-colors ${location.pathname === item.path ? 'text-white' : 'text-white/10 group-hover:text-white/40'}`}>{item.icon}</span>
                      <span className="text-[11px] font-black uppercase tracking-widest">{item.name}</span>
                    </div>
                    <ChevronRight size={14} className="text-white/10 group-hover:text-white transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
