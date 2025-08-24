import type React from "react";

interface ISidebarItemProps {
  icon: React.ReactNode;
  label: string;
  key: number;
}

function SidebarItem({ icon, label, key }: ISidebarItemProps) {
  return (
    <li
      className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer"
      key={key}
    >
      <span className="text-blue-600">{icon}</span>
      <p className="truncate font-medium text-gray-800 opacity-90">{label}</p>
    </li>
  );
}

export default SidebarItem;
