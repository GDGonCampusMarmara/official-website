import PropTypes from "prop-types";

const FocusCard = ({ icon, title, description, borderColorClass }) => {
  return (
    <div
      className={`p-8 bg-white/5 border-t-4 ${borderColorClass} rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 group`}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

FocusCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  borderColorClass: PropTypes.string.isRequired,
};

export default FocusCard;
