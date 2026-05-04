import { useState, useRef, useEffect, useCallback } from "react";
import TeamCard from "../components/teamCard";
import { members } from "../constants/teamData";

const DRAG_THRESHOLD = 40;

const MobileCarousel = () => {
  const slides = [members[members.length - 1], ...members, members[0]];
  const total = slides.length;
  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);
  const trackRef = useRef(null);

  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      setAnimated(false);
      setIndex(members.length);
    } else if (index === total - 1) {
      setAnimated(false);
      setIndex(1);
    }
  }, [index, total]);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      isDragging.current = true;
      e.preventDefault();
    }
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (isDragging.current && Math.abs(dx) > DRAG_THRESHOLD) {
      dx < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  const realIndex = (index - 1 + members.length) % members.length;

  return (
    <div className="relative w-full select-none">
      <div style={{ overflowX: "clip" }} className="px-4">
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animated
              ? "transform 380ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((member, i) => (
            <div
              key={`${member.id}-${i}`}
              className="min-w-full px-2 py-4 flex justify-center"
              aria-hidden={i !== index}
            >
              {Math.abs(i - index) <= 1 && <TeamCard member={member} />}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(249,250,251,0.9), transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className="flex justify-center gap-2 mt-6"
        role="tablist"
        aria-label="Ekip üyeleri"
      >
        {members.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === realIndex}
            onClick={() => {
              setAnimated(true);
              setIndex(i + 1);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === realIndex
                ? "w-6 h-2.5 bg-blue-500"
                : "w-2.5 h-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>

      <p
        className="text-center text-xs text-gray-400 mt-3 animate-pulse"
        aria-hidden="true"
      >
        ← Kaydırarak diğer üyeleri gör →
      </p>
    </div>
  );
};

const Team = () => {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="min-h-screen w-full py-16 md:py-24 px-6 bg-gray-50"
    >
      <header className="text-center mb-16">
        <h2
          id="team-heading"
          className="text-3xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          <span className="block text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3 text-blue-500">
            Ekibimiz
          </span>
          Bizi <span className="text-gray-700">Tanıyın</span>
        </h2>

        <div className="flex justify-center gap-1.5 mt-4" aria-hidden="true">
          <div className="w-6 h-1 rounded-full bg-blue-500" />
          <div className="w-6 h-1 rounded-full bg-green-500" />
          <div className="w-6 h-1 rounded-full bg-yellow-500" />
          <div className="w-6 h-1 rounded-full bg-red-500" />
        </div>
      </header>

      <div className="md:hidden">
        <MobileCarousel />
      </div>

      <div
        className="hidden md:grid max-w-screen-xl mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 lg:gap-16 justify-items-center"
        role="list"
        aria-label="Team Members"
      >
        {members.map((member) => (
          <div
            key={member.id}
            role="listitem"
            className="w-full flex justify-center"
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
