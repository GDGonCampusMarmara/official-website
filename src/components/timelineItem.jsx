import { useNavigate } from "react-router-dom";
import { FOCUS_CLASSES } from "../constants/eventsData";

export default function TimelineItem({ ev }) {
  const navigate = useNavigate();
  const fc = ev.past
    ? FOCUS_CLASSES["past"]
    : FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES["All"];

  const handleClick = () => {
    if (ev.past) return;
    if (!ev.formLink || ev.formLink === "#") {
      navigate("/basvuru-kapali");
    } else {
      window.open(ev.formLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={[
        "transition-colors duration-200 p-[1.1rem_1.3rem] bg-white/[2%] flex flex-col justify-between h-full w-full",
        ev.past
          ? "cursor-default opacity-60"
          : "cursor-pointer hover:bg-[#f9ab00]/[5%]",
      ].join(" ")}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-3">
        <div className={`text-[12px] tracking-[.06em] font-medium ${fc.text}`}>
          {ev.date} {ev.past && "(Geçmiş)"}
        </div>

        <div>
          <div
            className={[
              "text-[14px] font-normal flex items-center leading-snug",
              ev.past ? "text-[#f8f6f1]/45" : "text-[#f8f6f1]",
            ].join(" ")}
          >
            {ev.attending && (
              <span
                className={`inline-block w-[6px] h-[6px] rounded-full flex-shrink-0 mr-[6px] ${ev.past ? "bg-gray-600" : "bg-[#34a853]"}`}
              />
            )}
            {ev.title}
          </div>
          <div className="text-[12px] text-[#f8f6f1]/45 mt-1">
            {ev.location}
          </div>
        </div>
      </div>

      <div className="mt-4 flex">
        <div
          className={[
            "text-[11px] py-[4px] px-[10px] rounded-full tracking-[.04em] whitespace-nowrap border",
            ev.past
              ? "border-white/10 text-white/30 bg-white/5"
              : `${fc.bg} ${fc.text} border-transparent`,
          ].join(" ")}
        >
          {ev.focus.split(" ")[0]}
        </div>
      </div>
    </div>
  );
}
