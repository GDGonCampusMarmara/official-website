import { useState, useEffect, useRef, useCallback } from 'react';
import { EVENTS, FILTER_BUTTONS, FOCUS_CLASSES } from '../constants/eventsdata';
import { useIsMobile } from '../hooks/useismobile';
import { calcPos } from '../utils/calcpos';
import EventCard from '../components/eventscard';
import TimelineItem from '../components/timelineitem';
import EventModal from '../components/eventmodal';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIdx,   setCurrentIdx]   = useState(2);
  const [modalEv,      setModalEv]      = useState(null);
  const [modalOpen,    setModalOpen]    = useState(false);
  const touchStartX  = useRef(0);
  const isAnimRef    = useRef(false);

  const visibleEvents  = activeFilter === 'all' ? EVENTS : EVENTS.filter(e => e.focus === activeFilter);
  const timelineEvents = activeFilter === 'all' ? EVENTS : EVENTS.filter(e => e.focus === activeFilter);
  const safeIdx        = Math.min(currentIdx, Math.max(0, visibleEvents.length - 1));

  const navigate = useCallback((dir) => {
    if (isAnimRef.current) return;
    isAnimRef.current = true;
    setCurrentIdx(prev => (prev + dir + visibleEvents.length) % visibleEvents.length);
    setTimeout(() => { isAnimRef.current = false; }, 750);
  }, [visibleEvents.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [navigate]);

  const handleFilter = (value) => { setActiveFilter(value); setCurrentIdx(0); };
  const scrollToCalendar = () => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-ev-black text-ev-white overflow-x-hidden font-dm">

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-ev-glow pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-0" />
        <div className="absolute inset-0 bg-ev-noise pointer-events-none z-[1]" />
        <div className="relative z-[2] p-8">
          <div className="inline-flex items-center gap-2 rounded-full py-[6px] px-[18px] text-[12px] tracking-[.14em] uppercase text-ev-white/45 border border-white/10 backdrop-blur-[12px] mb-10">
            <span className="w-[6px] h-[6px] rounded-full inline-block bg-ev-yellow animate-ev-pulse" />
            Lorem ipsum dolor sit amet consectetur
          </div>
          <h1 className="font-bebas text-[clamp(80px,16vw,220px)] leading-[.88] tracking-[-0.01em] text-ev-white">
            Events<br />
            <em className="font-playfair italic text-ev-yellow text-[.75em]">Calendar</em>
          </h1>
          <p className="mt-8 text-[16px] font-light tracking-[.04em] max-w-[420px] mx-auto text-ev-white/45">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-[11px] tracking-[.12em] uppercase text-ev-white/45 border-0 bg-transparent cursor-pointer animate-ev-fadein"
          onClick={scrollToCalendar}
        >
          <div className="w-px h-[50px] bg-ev-scroll animate-ev-scroll-down" />
          Keşfet
        </button>
      </section>

      <section id="calendar" className="relative bg-ev-black py-24 pb-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-ev-sep" />

        <div className="max-w-[1200px] mx-auto px-8 pb-12 flex flex-wrap items-center gap-5 justify-center flex-col">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTER_BUTTONS.map((btn) => {
              const fc = FOCUS_CLASSES[btn.focusKey];
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  onClick={() => handleFilter(btn.value)}
                  className={['rounded-full py-2 px-[18px] text-[13px] cursor-pointer', 'tracking-[.02em] transition-all duration-[250ms] font-dm border', isActive ? `${fc.activeBtn} font-medium` : `bg-transparent border-white/10 text-ev-white/45 ${fc.hoverBtn}`].join(' ')}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] cursor-pointer transition-all duration-200 bg-white/[4%] border border-white/10 text-ev-white hover:bg-[rgba(249,171,0,0.15)] hover:border-ev-yellow">←</button>
            <div className="font-bebas text-[28px] tracking-[.04em] min-w-[180px] text-center text-ev-white">{visibleEvents[safeIdx]?.month || ''}</div>
            <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] cursor-pointer transition-all duration-200 bg-white/[4%] border border-white/10 text-ev-white hover:bg-[rgba(249,171,0,0.15)] hover:border-ev-yellow">→</button>
          </div>
        </div>

        <div
          className="relative w-full h-[560px] flex items-center justify-center [perspective:1200px]"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touchStartX.current; if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1); }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {visibleEvents.map((ev, i) => (
              <EventCard key={ev.id} ev={ev} posStr={calcPos(i, safeIdx, visibleEvents.length)} onNavigate={navigate} />
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-20 px-8">
          <div className="font-bebas text-[14px] tracking-[.14em] uppercase text-ev-white/45 mb-6">
            Tüm Etkinlikler — <span>2026</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-px">
            {timelineEvents.map((ev) => <TimelineItem key={ev.id} ev={ev} />)}
          </div>
        </div>
      </section>

      <EventModal isOpen={modalOpen} ev={modalEv} onClose={() => setModalOpen(false)} />
    </div>
  );
}