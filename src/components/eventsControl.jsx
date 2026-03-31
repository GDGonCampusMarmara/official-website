import { FILTER_BUTTONS, FOCUS_CLASSES } from "../constants/eventsdata";

export default function EventsControls({
  activeFilter,
  onFilterChange,
  currentMonth,
  onNavigate,
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 pb-12 flex flex-col items-center justify-center text-center">
      {/* Filtre Butonları */}
      <nav
        className="flex flex-wrap gap-2 justify-center mb-10"
        aria-label="Etkinlik Filtreleri"
      >
        {FILTER_BUTTONS.map((btn) => {
          const fc = FOCUS_CLASSES[btn.focusKey];
          const isActive = activeFilter === btn.value;
          return (
            <button
              key={btn.value}
              onClick={() => onFilterChange(btn.value)}
              aria-pressed={isActive}
              className={`rounded-full py-2 px-[18px] text-[13px] cursor-pointer tracking-wide transition-all duration-250 border
                ${
                  isActive
                    ? `${fc.activeBtn} font-medium shadow-lg shadow-[#f9ab00]/10`
                    : `bg-transparent border-white/10 text-[#f8f6f1]/45 ${fc.hoverBtn}`
                }`}
            >
              {btn.label}
            </button>
          );
        })}
      </nav>

      {/* Navigasyon (Ay Seçici) */}
      <div className="flex items-center gap-4 select-none">
        <button
          onClick={() => onNavigate(-1)}
          aria-label="Önceki"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#f9ab00]/20 hover:border-[#f9ab00] transition-all cursor-pointer"
        >
          ←
        </button>
        <span className="text-2xl md:text-3xl tracking-tight min-w-[200px] tabular-nums font-sans">
          {currentMonth || "---"}
        </span>
        <button
          onClick={() => onNavigate(1)}
          aria-label="Sonraki"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#f9ab00]/20 hover:border-[#f9ab00] transition-all cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  );
}
