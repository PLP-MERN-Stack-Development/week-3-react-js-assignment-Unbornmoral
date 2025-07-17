import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="font-bold text-lg text-blue-600 dark:text-blue-300">Home</Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-200">Tasks</Link>
        <Link to="/api" className="text-gray-700 dark:text-gray-200">API Data</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;