const sponsorCard = ({ logoPath, id }) => (
  <div className="w-full h-36 flex items-center justify-center bg-[#f8f9fa] border border-white/20 rounded-[2rem] p-6 transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group relative overflow-hidden">
    <img
      src={logoPath}
      alt={`Sponsor ${id}`}
      className="max-h-24 w-full object-contain transition-transform duration-500 !scale-125"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </div>
);

export default sponsorCard;
