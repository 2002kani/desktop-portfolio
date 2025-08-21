import { Circle, Clock, FileText, Wifi } from "lucide-react";
import SidebarItem from "./SidebarItem";

// TODO: Props wie dem screenshot hinbekommen (guck handy)

interface SidebarItemInterface {
  icon: React.ReactNode;
  label: string;
}

interface IFolderSidebarProps {
  title: string;
  items: SidebarItemInterface[];
}

function FolderSidebar({ title, items }: IFolderSidebarProps) {
  return (
    <div className="w-[13%] bg-purple-200/80 p-2 flex flex-col text-sm text-gray-800 rounded-l-lg">
      <div className="flex gap-1.5 pl-3 pt-3">
        <Circle fill="#FF605C" size={12} color="#FF605C" />
        <Circle fill="#FFBD44" size={12} color="#FFBD44" />
        <Circle fill="#00CA4E" size={12} color="#00CA4E" />
      </div>

      <div className="mb-1 mt-6">
        <p className="pl-2 pb-1 text-xs text-gray-500 font-semibold">{title}</p>

        <ul className="space-y-1">
          {/* TODO: entfernen für später */}
          <SidebarItem icon={<Wifi size={15} />} label="AirDrop" />
          <SidebarItem icon={<Clock size={15} />} label="Zuletzt" />
          <SidebarItem icon={<FileText size={15} />} label="Dokuemnte" />
          <SidebarItem icon={<Clock size={15} />} label="Zuletzt" />
        </ul>
      </div>
    </div>
  );
}

export default FolderSidebar;
