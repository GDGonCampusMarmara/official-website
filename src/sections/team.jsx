import TeamCard from "../components/teamCard";
import { members } from "../constants/teamData";

const Team = () => {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="min-h-screen w-full py-16 px-6 bg-gray-50 font-['Google_Sans']"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
      />

      <header className="text-center mb-12">
        <p className="text-base font-semibold tracking-widest uppercase mb-2 text-blue-400">
          Ekibimiz
        </p>
        <h2
          id="team-heading"
          className="text-6xl font-bold text-gray-900 font-['Google_Sans']"
        >
          Bizi <span className="text-black">Tanıyın</span>
        </h2>
        <div className="flex justify-center gap-1 mt-3" aria-hidden="true">
          <div className="w-7 h-1 rounded-full bg-blue-500" />
          <div className="w-7 h-1 rounded-full bg-green-500" />
          <div className="w-7 h-1 rounded-full bg-yellow-500" />
          <div className="w-7 h-1 rounded-full bg-red-500" />
        </div>
        <p className="sr-only">
          Meet our core team leading the GDG Marmara community.
        </p>
      </header>

      <div
        className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-16"
        role="list"
        aria-label="Team Members"
      >
        {members.map((member) => (
          <div key={member.id} role="listitem" className="flex justify-center">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
