import type React from "react";

interface ISidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

function SidebarItem({ icon, label }: ISidebarItemProps) {
  return (
    <li className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer">
      <span className="text-blue-600">{icon}</span>
      <p className="truncate">{label}</p>
    </li>
  );
}

export default SidebarItem;
