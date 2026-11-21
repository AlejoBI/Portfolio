import { memo } from "react";
import { tData } from "../../utils/tData";
import rolesData from "../../data/roles.json";

const Roles = () => {
  const rolesList = rolesData as Record<string, string>[];

  return (
    <div className="space-y-3 mt-4">
      {rolesList.map((role, index) => (
        <div
          key={index}
          className="group flex items-center gap-3 p-3 bg-slate-100/70 dark:bg-slate-800/40 hover:bg-cyan-400/10 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-400/50 transition-[background-color,border-color] duration-300"
        >
          <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
            {tData(role)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(Roles);
