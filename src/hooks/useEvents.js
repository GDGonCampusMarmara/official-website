import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { EVENTS } from "../constants/eventsData";

export function useEvents() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const touchStartX = useRef(0);
  const isAnimRef = useRef(false);

  const visibleEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return [...EVENTS]
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      .map((ev) => ({
        ...ev,
        past: new Date(ev.timestamp) < today,
      }))
      .filter((e) => (activeFilter === "all" ? true : e.focus === activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    if (visibleEvents.length > 0) {
      const firstUpcomingIdx = visibleEvents.findIndex((ev) => !ev.past);
      if (firstUpcomingIdx !== -1) {
        setCurrentIdx(firstUpcomingIdx);
      }
    }
  }, [visibleEvents, activeFilter]);

  const safeIdx = Math.min(currentIdx, Math.max(0, visibleEvents.length - 1));

  const navigate = useCallback(
    (dir) => {
      if (isAnimRef.current || visibleEvents.length <= 1) return;
      isAnimRef.current = true;
      setCurrentIdx((prev) => (prev + dir + visibleEvents.length) % visibleEvents.length);
      setTimeout(() => {
        isAnimRef.current = false;
      }, 750);
    },
    [visibleEvents.length]
  );

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
  };

  return {
    activeFilter,
    visibleEvents,
    safeIdx,
    navigate,
    handleFilter,
    touchStartX,
  };
}