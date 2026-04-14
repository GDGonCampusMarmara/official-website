import TeamCard from "../components/teamCard";
import { members } from "../constants/teamData";

const Team = () => {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="min-h-screen w-full py-16 md:py-24 px-6 bg-gray-50"
    >
      <header className="text-center mb-16">
        <h2
          id="team-heading"
          className="text-3xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          <span className="block text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3 text-blue-500">
            Ekibimiz
          </span>
          Bizi <span className="text-gray-700">Tanıyın</span>
        </h2>

        <div className="flex justify-center gap-1.5 mt-4" aria-hidden="true">
          <div className="w-6 h-1 rounded-full bg-blue-500" />
          <div className="w-6 h-1 rounded-full bg-green-500" />
          <div className="w-6 h-1 rounded-full bg-yellow-500" />
          <div className="w-6 h-1 rounded-full bg-red-500" />
        </div>
      </header>

      <div
        className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 lg:gap-16 justify-items-center"
        role="list"
        aria-label="Team Members"
      >
        {members.map((member) => (
          <div
            key={member.id}
            role="listitem"
            className="w-full flex justify-center"
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
