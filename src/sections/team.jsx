import { useState } from "react";

// ─── Team ───────────────────────────────────────────

const MEMBERS = [
  {
    id: 1,
    name: "İsim Soyisim",
    title: "Frontend Developer",
    email: "isim@sirket.com",
    linkedin: "#",
    photo: null,
  },
  {
    id: 2,
    name: "İsim Soyisim",
    title: "UI/UX Designer",
    email: "isim@sirket.com",
    linkedin: "#",
    photo: null,
  },
  {
    id: 3,
    name: "İsim Soyisim",
    title: "Backend Developer",
    email: "isim@sirket.com",
    linkedin: "#",
    photo: null,
  },
    {
    id: 4,
    name: "İsim Soyisim",
    title: "Backend Developer",
    email: "isim@sirket.com",
    linkedin: "#",
    photo: null,
  },
      {
    id: 5,
    name: "İsim Soyisim",
    title: "Backend Developer",
    email: "isim@sirket.com",
    linkedin: "#",
    photo: null,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#f9ab00", "#34A853"];

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
    color: "#0A66C2",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
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

function TeamCard({ member }) {
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
          style={{ fontFamily: "'DM Mono', monospace" }}
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
            style={{ background: s.color + "15", color: s.color }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              {s.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      className="min-h-screen w-full py-16 px-6"
      style={{ backgroundColor: "#f8f9fa", fontFamily: "'Google Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
      `}</style>

      {/* h1 */}
      <div className="text-center mb-12">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#4285F4" }}
        >
          Ekibimiz
        </p>
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Harika{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #EA4335, #f9ab00, #34A853, #4285F4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            İnsanlar
          </span>
        </h2>
        <div className="flex justify-center gap-1 mt-3">
          {GOOGLE_COLORS.map((c, i) => (
            <div key={i} className="w-7 h-1 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* cards */}
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-16">
        {MEMBERS.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
