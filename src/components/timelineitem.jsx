import { FOCUS_CLASSES } from '../constants/eventsdata';

export default function TimelineItem({ ev }) {
  const fc = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES['Affiliate Marketing'];

  return (
    <div
      className="cursor-pointer transition-colors duration-200 hover:bg-ev-yellow/[5%] p-[1.1rem_1.3rem] bg-white/[2%] grid grid-cols-[80px_1fr_auto] gap-[.8rem] items-center border-r border-b border-white/10"
      onClick={() => window.open(ev.formLink, '_blank')}
    >
      <div className={`text-[12px] tracking-[.06em] font-medium ${fc.text}`}>{ev.date}</div>
      <div>
        <div className="text-[14px] font-normal text-ev-white flex items-center">
          {ev.attending && <span className="inline-block w-[6px] h-[6px] rounded-full bg-ev-green flex-shrink-0 mr-[6px]" />}
          {ev.title}
        </div>
        <div className="text-[12px] text-ev-white/45 mt-[2px]">{ev.location}</div>
      </div>
      <div className={`text-[11px] py-[4px] px-[10px] rounded-full tracking-[.04em] whitespace-nowrap border ${fc.bgFaint} ${fc.text} ${fc.borderFaint}`}>
        {ev.focus.split(' ')[0]}
      </div>
    </div>
  );
}