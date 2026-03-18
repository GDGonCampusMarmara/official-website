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
      className="min-h-screen w-full py-16 px-6 bg-[#f8f9fa] font-['Google_Sans']"
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" />

      {/* h1 */}
      <div className="text-center mb-12">
        <p
          className="text-base font-semibold tracking-widest uppercase mb-2 text-[#4285F4]"
        >
          Ekibimiz
        </p>
        <h2
          className="text-4xl font-bold text-gray-900 font-['Google_Sans']"
        >
          Bizi{" "}
          <span className="text-black">
            Tanıyın
          </span>
        </h2>
        <div className="flex justify-center gap-1 mt-3">
        <div className="w-7 h-1 rounded-full bg-[#4285F4]" />
        <div className="w-7 h-1 rounded-full bg-[#EA4335]" />
        <div className="w-7 h-1 rounded-full bg-[#f9ab00]" />
        <div className="w-7 h-1 rounded-full bg-[#34A853]" />
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
