const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 text-center py-4 mt-8 shadow-inner">
    <div className="text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </div>
    <div className="mt-2">
      <a href="https://github.com/" className="text-blue-500 hover:underline">GitHub</a>
    </div>
  </footer>
);

export default Footer;