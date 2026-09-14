import PropTypes from "prop-types";

const FocusCard = ({ icon, title, description, accentColorClass, index }) => {
  return (
    <div className="group flex gap-5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
      <div
        className={`w-px shrink-0 ${accentColorClass}`}
        aria-hidden="true"
      ></div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gray-600" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

FocusCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accentColorClass: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FocusCard;