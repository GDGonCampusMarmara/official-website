import { useState } from "react";

const googleConicGradient = `conic-gradient(
  #EA4335 0deg 90deg,
  #f9ab00 90deg 180deg,
  #34A853 180deg 270deg,
  #4285F4 270deg 360deg
)`;

const googleBoxShadow = `
  -7px -7px 0px 2px #EA4335,
   7px -7px 0px 2px #4285F4,
  -7px  7px 0px 2px #f9ab00,
   7px  7px 0px 6px #34A853,
   0px  0px 24px 4px rgba(66,133,244,0.12)
`;

const SOCIALS = [
  {
    key: "linkedin",
    icon: "/linkedin.svg",
  },
];

function GoogleAvatar({ photo, name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="rounded-full p-[3px]"
      style={{ background: googleConicGradient, width: 76, height: 76 }}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-xl font-bold select-none"
            style={{ background: googleConicGradient }}
          >
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl px-6 py-7 flex flex-col items-center gap-3"
      style={{
        width: 230,
        transition:
          "box-shadow 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: hovered
          ? googleBoxShadow
          : "0 2px 12px 0 rgba(60,64,67,0.09), 0 1px 3px 0 rgba(60,64,67,0.06)",
        transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* pho. */}
      <GoogleAvatar photo={member.photo} name={member.name} />

      {/* name */}
      <div className="text-center">
        <h3
          className="text-gray-900 font-bold text-base leading-snug"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          {member.name}
        </h3>
        <span
          className="inline-block mt-1 text-white text-xs font-semibold px-3 py-0.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, #4285F4, #34A853)",
            letterSpacing: "0.03em",
            fontFamily: "'Google Sans', sans-serif",
          }}
        >
          {member.title}
        </span>
      </div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* mail */}
      <div className="flex items-center gap-2 w-full group/email">
        <svg
          className="w-3.5 h-3.5 text-gray-400 group-hover/email:text-blue-500 transition-colors flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span
          className="text-xs text-gray-400 border-b border-dotted border-gray-200 pb-px w-full group-hover/email:border-blue-300 transition-colors"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          {member.email}
        </span>
      </div>

      {/* social media */}
      <div className="flex gap-2 mt-1">
        {SOCIALS.map((s) => (
          <a
            key={s.key}
            href={member[s.key] || "#"}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
            style={{ background: "#0A66C215" }}>
            <img src={s.icon} className="w-3.5 h-3.5" alt="linkedin" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
