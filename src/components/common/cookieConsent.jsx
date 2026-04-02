import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "./button";
import Icon from "./icon";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = Cookies.get("gdg_marmara_cookie_consent");
      if (!consent) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    Cookies.set("gdg_marmara_cookie_consent", "true", { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] flex justify-center">
      <div className="max-w-4xl w-full bg-[#11141d]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 animate-in fade-in slide-in-from-bottom-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/20">
            <Icon
              name="Cookie"
              className="text-blue-500"
              size={30}
              strokeWidth={1.5}
            />
          </div>

          <div className="space-y-1">
            <h4 className="text-white font-bold text-lg tracking-tight">
              Çerez Tercihleri
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.
              Devam ederek
              <span className="text-blue-400 font-medium cursor-pointer hover:underline ml-1">
                Kullanım Koşullarımızı
              </span>{" "}
              kabul etmiş olursunuz.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest px-4 transition-colors"
          >
            Reddet
          </button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="!py-3 !px-8 whitespace-nowrap shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
