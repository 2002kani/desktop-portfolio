import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface IFolderMenuBar {
  title: string;
}

function FolderMenuBar({ title }: IFolderMenuBar) {
  return (
    <div className="flex items-center justify-between bg-gray-100 border-b border-gray-300 px-3 py-1 text-sm text-gray-700 rounded-tr-lg">
      <div className="flex items-center gap-2 p-3">
        <button className="p-1 rounded hover:bg-gray-200">
          <ChevronLeft size={22} color="gray" />
        </button>
        <button className="p-1 rounded hover:bg-gray-200">
          <ChevronRight size={22} color="gray" />
        </button>
        <span className="ml-2 font-semibold text-lg">{title}</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-1 rounded hover:bg-gray-200">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}

export default FolderMenuBar;
