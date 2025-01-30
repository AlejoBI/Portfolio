const Footer = () => {
  return (
    <footer className="text-gray-700 dark:bg-gray-900 dark:text-gray-400 py-6 transition-colors duration-1000">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">
          Built with{" "}
          <span className="text-blue-500 font-semibold dark:text-blue-400 transition-colors duration-1000"> 
            React
          </span>{" "}
          and{" "}
          <span className="text-blue-500 font-semibold dark:text-blue-400 transition-colors duration-1000">
            Tailwind CSS
          </span>
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Alejandro Bravo Isajar. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/AlejoBI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-1000"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-bravo-isajar-061b682b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-1000"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alejandrobravoisajar1@gmail.com"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-1000"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
