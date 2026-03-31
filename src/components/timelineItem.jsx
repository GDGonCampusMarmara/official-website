import { useNavigate } from "react-router-dom";
import { FOCUS_CLASSES } from "../constants/eventsData";

export default function TimelineItem({ ev }) {
  const navigate = useNavigate();
  const fc = FOCUS_CLASSES[ev.focus] || FOCUS_CLASSES["Affiliate Marketing"];

  const handleClick = () => {
    if (!ev.formLink || ev.formLink === "#") {
      navigate("/basvuru-kapali");
    } else {
      window.open(ev.formLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="cursor-pointer transition-colors duration-200 hover:bg-[#f9ab00]/[5%] p-[1.1rem_1.3rem] bg-white/[2%] flex flex-col justify-between h-full w-full"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-3">
        <div className={`text-[12px] tracking-[.06em] font-medium ${fc.text}`}>
          {ev.date}
        </div>

        <div>
          <div className="text-[14px] font-normal text-[#f8f6f1] flex items-center leading-snug">
            {ev.attending && (
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#34a853] flex-shrink-0 mr-[6px]" />
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
          className={`text-[11px] py-[4px] px-[10px] rounded-full tracking-[.04em] whitespace-nowrap border ${fc.bgFaint} ${fc.text} ${fc.borderFaint}`}
        >
          {ev.focus.split(" ")[0]}
        </div>
      </div>
    </div>
  );
}
