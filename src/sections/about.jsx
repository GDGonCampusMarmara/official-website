import { expectations } from "../constants/aboutExpectations";
import { useAboutGame } from "../hooks/useAboutGame";
import AboutExpectations from "../components/AboutExpectations";
import AboutResult from "../components/AboutResult";

export default function About() {
  const game = useAboutGame();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0d14] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-[#4285F4]/[0.025] blur-[100px]" />
        <div className="absolute right-[10%] top-[40%] h-56 w-56 rounded-full bg-[#EA4335]/[0.02] blur-[110px]" />
        <div className="absolute bottom-[10%] left-[45%] h-48 w-48 rounded-full bg-[#34A853]/[0.02] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">

          <h2 className="font-['Google_Sans',Arial,sans-serif] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Geleceğin teknolojilerini{" "}
            <span className="text-white">birlikte keşfediyoruz.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-['Google_Sans',Arial,sans-serif] text-lg leading-relaxed text-white/60 sm:text-xl">
            Teknolojiyi birlikte öğreniyor, fikirlerimizi gerçeğe dönüştürüyor ve
            geleceği şekillendiren bir topluluk olarak birlikte gelişiyoruz.
          </p>
        </div>

        <AboutExpectations
          selected={game.selected}
          draggedItem={game.draggedItem}
          checking={game.checking}
          movingItems={game.movingItems}
          arrivedItems={game.arrivedItems}
          availableItems={game.availableItems}
          addItem={game.addItem}
          removeItem={game.removeItem}
          handleDragStart={game.handleDragStart}
          handleDragEnd={game.handleDragEnd}
          handleDrop={game.handleDrop}
          handleCheck={game.handleCheck}
        />

        <AboutResult checked={game.checked} />
      </div>
    </section>
  );
}