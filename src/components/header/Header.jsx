import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/dev.png";

const Header = () => {
  const location = useLocation();
  const navigation = [{ name: "Home", href: "/" }];

  return (
    <header className="text-gray-700 dark:bg-gray-900 dark:text-gray-400 pt-4 pb-20 transition-colors duration-1000">
      <div className="container mx-auto flex items-center justify-between p-5">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-300 flex items-center transition-colors duration-1000"
          >
            <img src={logo} alt="Dev Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-2">My Portfolio</span>
          </Link>
        </div>
        <nav className="flex space-x-6">
          {navigation.map(
            (item) =>
              location.pathname !== item.href && (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-1000"
                >
                  {item.name}
                </Link>
              )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
