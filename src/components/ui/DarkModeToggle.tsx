import { memo } from "react";

interface DarkModeToggleProps {
  readonly dark: boolean;
  readonly toggle: () => void;
}

const DarkModeToggle = ({ dark, toggle }: DarkModeToggleProps) => (
  <button
    onClick={toggle}
    className="group fixed bottom-4 right-4 z-50 p-4 bg-gray-800 dark:bg-gradient-tech hover:shadow-2xl rounded-2xl shadow-xl transition-all duration-300 hover:scale-110"
    aria-label="Toggle Dark Mode"
  >
    <div className="relative w-6 h-6">
      {dark ? (
        <svg
          className="w-6 h-6 text-white transition-all duration-300 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-yellow-400 transition-all duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </div>
  </button>
);

export default memo(DarkModeToggle);
