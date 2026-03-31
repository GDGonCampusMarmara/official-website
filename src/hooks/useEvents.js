import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { EVENTS } from "../constants/eventsData";

export function useEvents() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(2);
  const touchStartX = useRef(0);
  const isAnimRef = useRef(false);

  const visibleEvents = useMemo(() => {
    return activeFilter === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.focus === activeFilter);
  }, [activeFilter]);

  const safeIdx = Math.min(currentIdx, Math.max(0, visibleEvents.length - 1));

  const navigate = useCallback((dir) => {
    if (isAnimRef.current || visibleEvents.length <= 1) return;
    isAnimRef.current = true;
    setCurrentIdx((prev) => (prev + dir + visibleEvents.length) % visibleEvents.length);
    setTimeout(() => {
      isAnimRef.current = false;
    }, 750);
  }, [visibleEvents.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  const handleFilter = (val) => {
    setActiveFilter(val);
    setCurrentIdx(0);
  };

  return {
    activeFilter,
    visibleEvents,
    safeIdx,
    navigate,
    handleFilter,
    touchStartX
  };
}