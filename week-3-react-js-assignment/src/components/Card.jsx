const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded shadow p-4 ${className}`}>
    {children}
  </div>
);

export default Card;