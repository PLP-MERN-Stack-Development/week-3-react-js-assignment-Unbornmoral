const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({ children, variant = "primary", ...props }) => (
  <button
    className={`px-4 py-2 rounded transition ${variants[variant]} disabled:opacity-50`}
    {...props}
  >
    {children}
  </button>
);

export default Button;