import { FOCUS_CLASSES } from '../constants/eventsdata';

export default function EventModal({ isOpen, ev, onClose }) {
  if (!ev) return null;
  const fc = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES['Affiliate Marketing'];

  return (
    <div
      className={['fixed inset-0 z-[100] flex items-center justify-center p-8', 'bg-[rgba(5,5,5,.88)] backdrop-blur-[18px]', 'transition-opacity duration-300', isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'].join(' ')}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={['bg-ev-modal border border-white/10 rounded-[28px]', 'max-w-[520px] w-full max-h-[90vh] overflow-y-auto', 'transition-[transform] duration-[350ms] ease-[cubic-bezier(.25,.46,.45,.94)]', isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-5'].join(' ')}>
        <img src={ev.img} alt={ev.title} className="w-full h-[220px] object-cover rounded-t-[24px]" />
        <div className="p-8">
          <h2 className="font-bebas text-[36px] tracking-[.02em] text-ev-white mb-[.3rem]">{ev.title}</h2>
          <div className="flex flex-wrap gap-[.8rem] mb-[1.2rem]">
            {[`${ev.date} · ${ev.month}`, ev.location, ev.focus].map((chip, i) => (
              <span key={i} className="flex items-center gap-[5px] text-[12px] text-ev-white/45 bg-white/[5%] border border-white/10 py-[5px] px-3 rounded-full">{chip}</span>
            ))}
          </div>
          <p className="text-[14px] text-ev-white/65 leading-[1.75] mb-6">{ev.desc}</p>
          <h3 className="text-[13px] tracking-[.1em] uppercase text-ev-white/45 mb-4">Katılım Başvurusu</h3>
          <div className="flex gap-[.7rem] mb-[.7rem] flex-wrap">
            <input type="text" placeholder="Adınız" className="flex-1 min-w-[140px] bg-white/[5%] border border-white/10 rounded-xl py-3 px-[14px] text-[14px] text-ev-white font-dm outline-none focus:border-[rgba(200,255,0,0.5)] placeholder:text-ev-white/30 transition-colors duration-200" />
            <input type="text" placeholder="Soyadınız" className="flex-1 min-w-[140px] bg-white/[5%] border border-white/10 rounded-xl py-3 px-[14px] text-[14px] text-ev-white font-dm outline-none focus:border-[rgba(200,255,0,0.5)] placeholder:text-ev-white/30 transition-colors duration-200" />
          </div>
          <div className="flex gap-[.7rem] mb-[.7rem]">
            <input type="email" placeholder="E-posta adresiniz" className="flex-1 bg-white/[5%] border border-white/10 rounded-xl py-3 px-[14px] text-[14px] text-ev-white font-dm outline-none focus:border-[rgba(200,255,0,0.5)] placeholder:text-ev-white/30 transition-colors duration-200" />
          </div>
          <select className="w-full bg-white/[5%] border border-white/10 rounded-xl py-3 px-[14px] text-[14px] text-ev-white font-dm outline-none mb-[.7rem] appearance-none cursor-pointer">
            <option value="">Şirket büyüklüğü seçin</option>
            <option>1-10 çalışan</option>
            <option>11-50 çalışan</option>
            <option>51-200 çalışan</option>
            <option>200+ çalışan</option>
          </select>
          <select className="w-full bg-white/[5%] border border-white/10 rounded-xl py-3 px-[14px] text-[14px] text-ev-white font-dm outline-none mb-[.7rem] appearance-none cursor-pointer">
            <option value="">İlgilendiğiniz alan</option>
            <option>Affiliate Marketing</option>
            <option>Digital Marketing</option>
            <option>FinTech</option>
            <option>GameDev</option>
            <option>Influencer Marketing</option>
          </select>
          <div className="flex gap-[.7rem] mt-[1.2rem]">
            <button onClick={onClose} className="bg-transparent border border-white/10 text-ev-white/45 rounded-xl py-3 px-[18px] text-[14px] font-dm cursor-pointer transition-all duration-200 hover:border-white/25 hover:text-ev-white">Kapat</button>
            <button className={`flex-1 rounded-xl py-3 text-[14px] font-medium font-dm cursor-pointer transition-all duration-200 border-0 ${fc.primaryBtn}`}>Başvur →</button>
          </div>
        </div>
      </div>
    </div>
  );
}