import { focusAreas } from "../constants/aboutData";
import FocusCard from "../components/focusCard";
import Icon from "../components/common/icon";

const FocusAreas = () => {
  return (
    <section
      id="focus-areas"
      aria-labelledby="focus-areas-heading"
      className="w-full py-16 md:py-24 bg-[#0a0d14]"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2
          id="focus-areas-heading"
          className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4"
        >
          Ne Yapıyoruz
        </h2>

        <div
          className="grid sm:grid-cols-2 gap-x-8 gap-y-2"
          role="region"
          aria-label="Faaliyet alanlarımız"
        >
          {focusAreas.map((area, index) => (
            <FocusCard
              key={area.title}
              index={index}
              icon={<Icon name={area.icon} size={22} aria-hidden="true" />}
              title={area.title}
              description={area.description}
              accentColorClass={area.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;