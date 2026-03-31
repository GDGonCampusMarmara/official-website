import { useNavigate } from "react-router-dom";

export default function RegistrationClosed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col items-center justify-center text-center px-8 font-sans">
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
        <span className="text-[#f9ab00] text-2xl">!</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#f8f6f1] mb-4">
        Başvurular Henüz Açılmadı
      </h1>
      <p className="text-[#f8f6f1]/40 max-w-[450px] mb-10 leading-relaxed">
        Bu etkinlik için katılım formları henüz aktif edilmemiştir. Gelişmeleri
        sosyal medya hesaplarımızdan takip edebilirsiniz.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[#f8f6f1] hover:bg-white/10 transition-all cursor-pointer"
      >
        Ana Sayfaya Dön
      </button>
    </div>
  );
}
