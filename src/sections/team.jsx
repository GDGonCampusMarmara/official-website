import TeamCard from "../components/teamCard";

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
          className="text-base font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#4285f4" }}
        >
          Ekibimiz
        </p>
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Google Sans', sans-serif" }}
        >
          Bizi{" "}
          <span
            style={{
              color: "#000000",
            }}
          >
            Tanıyın
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
