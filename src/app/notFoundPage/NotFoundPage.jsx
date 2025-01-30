import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-1000">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-1000">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-300 transition-colors duration-1000">
          Oops! Página no encontrada.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-1000">
          La página que estás buscando no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-1000"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
