export function calcPos(i, currentIdx, total) {
  let d = i - currentIdx;
  if (d > Math.floor(total / 2))  d -= total;
  if (d < -Math.floor(total / 2)) d += total;
  const clamped = Math.max(-3, Math.min(3, d));
  return String(Math.abs(d) > 3 ? (d > 0 ? 3 : -3) : clamped);
}