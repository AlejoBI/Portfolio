import { useTranslation } from "react-i18next";

const Roles = () => {
  const { t } = useTranslation();
  const rolesList = t("roles.list", { returnObjects: true });

  return (
    <div className="space-y-3 mt-4">
      {rolesList.map((role, index) => (
        <div
          key={index}
          className="group flex items-center gap-3 p-3 bg-gray-100/50 dark:bg-gray-700/30 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg border border-gray-300/30 dark:border-gray-600/30 hover:border-pink-400/50 dark:hover:border-pink-500/50 transition-all duration-300"
        >
          <div className="flex-shrink-0 w-2 h-2 bg-gradient-tech rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
            {role}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Roles;
