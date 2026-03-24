const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0d14] text-white px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-700 shadow-[0_0_10px_#3b82f6]"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-red-500 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_#ef4444]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <div className="relative">
          <h1 className="text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-white opacity-5 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl animate-bounce">👾</span>
          </div>
        </div>

        <div className="max-w-md space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-green-500 bg-clip-text text-transparent">
            Bir Problemimiz Var!
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Böyle bir sayfa bulunmamakta. Sanırım kayboldun !
          </p>
        </div>

        <a
          href="/"
          className="group relative px-10 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-2xl shadow-white/10"
        >
          <span className="relative z-10">Anasayfaya Dön</span>
          <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Gerçekten bir hata olduğunu mu düşünüyorsun?
            <a
              href="https://github.com/GDGonCampusMarmara/official-website/issues"
              className="text-blue-400 hover:underline ml-1"
            >
              Bize bildir →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
