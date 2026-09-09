import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutExpectations({
  selected,
  draggedItem,
  checking,
  movingItems,
  arrivedItems,
  availableItems,
  addItem,
  removeItem,
  handleDragStart,
  handleDragEnd,
  handleDrop,
  handleCheck,
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
        <div className="mb-7">
          <p className="font-['Google_Sans',Arial,sans-serif] text-sm font-medium text-white/45">
            Bizden neler bekliyorsun?
          </p>

          <h3 className="mt-2 font-['Google_Sans',Arial,sans-serif] text-2xl font-medium tracking-[-0.025em] text-white">
            Sana ne katabiliriz?
          </h3>
        </div>

        <div className="flex min-h-[260px] flex-wrap content-start gap-3">
          {availableItems.map((item) => {
            const Icon = item.icon;
            const isMoving = movingItems.some(
              (movingItem) => movingItem.id === item.id
            );

            return (
              <button
                key={item.id}
                type="button"
                draggable={!checking}
                disabled={checking}
                onDragStart={(event) => handleDragStart(event, item)}
                onDragEnd={handleDragEnd}
                onClick={() => addItem(item)}
                className={`flex items-center gap-2.5 rounded-full border px-4 py-3 font-['Google_Sans',Arial,sans-serif] text-sm text-white/80 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMoving
                    ? "translate-x-10 scale-95 opacity-0"
                    : "translate-x-0 scale-100 opacity-100"
                } ${
                  checking
                    ? "pointer-events-none"
                    : "hover:-translate-y-0.5 hover:bg-white/[0.055]"
                } ${item.border} ${item.bg}`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg} ${item.color}`}
                >
                  <Icon size={14} strokeWidth={1.8} />
                </span>

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 border-t border-white/[0.06] pt-5">
          <p className="font-['Google_Sans',Arial,sans-serif] text-xs text-white/30">
            Dokunarak seç veya masaüstünde sağ tarafa sürükle.
          </p>
        </div>
      </div>

      <div
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className={`relative rounded-[28px] border p-5 transition-all duration-500 sm:p-7 ${
          draggedItem
            ? "border-[#4285F4]/35 bg-[#4285F4]/[0.045]"
            : "border-white/[0.08] bg-white/[0.025]"
        }`}
      >

        <div className="min-h-[340px] rounded-2xl border border-dashed border-white/[0.08] bg-black/10 p-4">
          {selected.length === 0 && movingItems.length === 0 ? (
            <div className="flex min-h-[308px] items-center justify-center text-center">
                <div className="flex flex-col items-center">
                    <Sparkles
                    className="mb-5 text-white/20"
                    size={32}
                    strokeWidth={1.5}
                    />

                    <p className="font-['Google_Sans',Arial,sans-serif] text-sm text-white/30">
                    Beklentilerini buraya bırak.
                    </p>
                </div>
            </div>
          ) : (
            <div className="flex flex-wrap content-start gap-3">
              {selected.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={checking}
                    onClick={() => removeItem(item)}
                    className={`flex items-center gap-2.5 rounded-full border px-4 py-3 font-['Google_Sans',Arial,sans-serif] text-sm text-white/85 transition-all duration-300 hover:bg-white/[0.06] ${item.border} ${item.bg}`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg} ${item.color}`}
                    >
                      <Icon size={14} strokeWidth={1.8} />
                    </span>

                    <span>{item.label}</span>
                  </button>
                );
              })}

              {movingItems.map((item) => {
                const Icon = item.icon;
                const arrived = arrivedItems.some(
                  (arrivedItem) => arrivedItem.id === item.id
                );

                return (
                  <div
                    key={`moving-${item.id}`}
                    className={`flex items-center gap-2.5 rounded-full border px-4 py-3 font-['Google_Sans',Arial,sans-serif] text-sm text-white/85 transition-all duration-[1150ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${item.border} ${item.bg} ${
                      arrived
                        ? "translate-x-0 scale-100 opacity-100"
                        : "-translate-x-16 scale-90 opacity-0"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg} ${item.color}`}
                    >
                      <Icon size={14} strokeWidth={1.8} />
                    </span>

                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleCheck}
          disabled={selected.length === 0 || checking}
          className={`mt-5 flex w-full items-center justify-center gap-3 rounded-full border px-6 py-4 font-['Google_Sans',Arial,sans-serif] text-base font-medium transition-all duration-300 ${
            selected.length === 0 || checking
              ? "cursor-not-allowed border-white/[0.06] bg-white/[0.025] text-white/20"
              : "border-white bg-white text-[#0a0d14] hover:bg-white/90"
          }`}
        >
          {checking ? "Kontrol ediliyor..." : "Kontrol Et"}

          {!checking && selected.length > 0 && (
            <ArrowRight size={18} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
}