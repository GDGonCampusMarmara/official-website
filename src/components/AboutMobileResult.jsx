export default function AboutMobileResult() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] px-6 py-10 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#4285F4]/10 blur-[70px]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34A853]/10 blur-[70px]" />
        <div className="absolute right-[20%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#EA4335]/10 blur-[70px]" />
      </div>

      <div className="relative">
        <h3 className="font-['Google_Sans',Arial,sans-serif] text-2xl font-semibold tracking-[-0.03em] text-white">
          Geleceğin teknolojilerini birlikte keşfediyoruz.
        </h3>

        <p className="mx-auto mt-4 max-w-xl font-['Google_Sans',Arial,sans-serif] text-sm leading-relaxed text-white/45">
            Teknolojiyi birlikte öğreniyor, fikirlerimizi gerçeğe dönüştürüyor ve
            geleceği şekillendiren bir topluluk olarak birlikte gelişiyoruz.
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