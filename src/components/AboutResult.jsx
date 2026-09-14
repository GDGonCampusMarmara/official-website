import { Check } from "lucide-react";

export default function AboutResult({ checked }) {
  if (!checked) return null;

  return (
    <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] px-6 py-10 text-center sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#4285F4]/10 blur-[70px]" />

        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34A853]/10 blur-[70px]" />

        <div className="absolute right-[20%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#EA4335]/10 blur-[70px]" />
      </div>

      <div className="relative">
        <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
          <Check
            size={19}
            strokeWidth={2}
            className="text-white/75"
          />
        </div>

        <h3 className="font-['Google_Sans',Arial,sans-serif] text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
          Aradıklarının birçoğu burada.
        </h3>

        <p className="mx-auto mt-4 max-w-xl font-['Google_Sans',Arial,sans-serif] text-sm leading-relaxed text-white/45 sm:text-base">
          Seçtiklerin sadece başlangıç. Birlikte öğrenebileceğimiz,
          üretebileceğimiz ve keşfedebileceğimiz çok daha fazlası var.
        </p>

        <a
            href="#events"
            className="mt-7 inline-flex font-['Google_Sans',Arial,sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-65"
            >
            Etkinliklerimizi keşfet
        </a>
      </div>
    </div>
  );
}