import { FOCUS_CLASSES, CARD_POS_DESKTOP, CARD_POS_MOBILE } from '../constants/eventsdata';
import { useIsMobile } from '../hooks/useismobile';

export default function EventCard({ ev, posStr, onNavigate }) {
  const fc       = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES['Affiliate Marketing'];
  const isMobile = useIsMobile();
  const posMap   = isMobile ? CARD_POS_MOBILE : CARD_POS_DESKTOP;
  const posClass = posMap[posStr] ?? posMap['3'];

  const handleClick = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    const pos = parseInt(posStr, 10);
    if (pos !== 0) onNavigate(pos > 0 ? 1 : -1);
  };

  return (
    <div
      className={[
        'absolute rounded-[24px] overflow-hidden cursor-pointer',
        'bg-white/[4%] border border-white/10',
        'transition-all duration-[750ms] ease-[cubic-bezier(.16,1,.3,1)]',
        '[will-change:transform,opacity,filter]',
        'select-none backdrop-blur-[20px]',
        posClass,
      ].join(' ')}
      onClick={handleClick}
    >
      <div className="relative w-full h-[190px] overflow-hidden">
        <img src={ev.img} alt={ev.title} loading="lazy" className="w-full h-full object-cover block" />
        <div className="absolute inset-0 bg-ev-img-overlay" />
        <span className={[
          'absolute top-[14px] left-[14px]',
          'text-[11px] font-medium tracking-[.1em] uppercase',
          'py-[5px] px-3 rounded-full',
          ev.past ? 'bg-white/[15%] text-ev-white/45' : `${fc.bg} ${fc.badgeText}`,
        ].join(' ')}>
          {ev.focus}
        </span>
        {ev.attending && (
          <span className="absolute top-[14px] right-[14px] text-[11px] tracking-[.06em] uppercase py-[5px] px-3 rounded-full bg-ev-green/[18%] border border-ev-green/45 text-ev-green">
            ✓ Katılıyoruz
          </span>
        )}
      </div>

      <div className="px-6 pt-[1.4rem] pb-6">
        <div className={['text-[12px] tracking-[.1em] uppercase mb-2 font-medium', ev.past ? 'text-ev-white/45' : fc.text].join(' ')}>
          {ev.date} · {ev.month}
        </div>
        <div className="font-bebas text-[26px] leading-[1.05] text-ev-white mb-[.6rem] tracking-[.02em]">
          {ev.title}
        </div>
        <div className="flex items-center gap-[6px] text-[13px] text-ev-white/45 mb-[.9rem]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] flex-shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {ev.location}
        </div>
        <p className="text-[13.5px] text-ev-white/60 leading-[1.65] mb-[1.1rem] line-clamp-3">{ev.desc}</p>
        <div className="h-px bg-white/10 mb-[1.1rem]" />
        <div className="flex gap-[.7rem]">
          <a
            href={ev.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className={['flex-1 flex items-center justify-center rounded-xl', 'py-[11px] px-3 text-[13px] font-medium tracking-[.02em]', 'no-underline transition-all duration-200 hover:-translate-y-px', fc.primaryBtn].join(' ')}
          >
            Daha Fazla &amp; Başvur
          </a>
          <button
            onClick={() => window.open(ev.link, '_blank')}
            className="bg-white/[4%] text-ev-white border border-white/10 rounded-xl py-[11px] px-[14px] text-[13px] transition-all duration-200 cursor-pointer hover:bg-white/[9%] hover:border-white/20"
          >
            ↗
          </button>
        </div>
      </div>
    </div>
  );
}