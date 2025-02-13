import { useTranslation } from "react-i18next";

const Roles = () => {
  const { t } = useTranslation();
  const rolesList = t("roles.list", { returnObjects: true });

  return (
    <div>
      <ul className="mt-4 space-y-2 list-disc list-inside">
        {rolesList.map((role, index) => (
          <li
            key={index}
            className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000"
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
