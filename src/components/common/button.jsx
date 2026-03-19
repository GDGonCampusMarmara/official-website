import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20",
    secondary: "bg-white hover:bg-gray-100 text-black",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-7 py-3 text-sm shadow-lg",
    md: "px-8 py-4 text-lg shadow-xl shadow-blue-600/20",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md"]),
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
