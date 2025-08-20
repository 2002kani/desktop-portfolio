function FolderSidebar() {
  return (
    <aside className="w-60 bg-gray-100 border-r border-gray-300 h-full flex flex-col">
      <div className="p-3 text-xs font-semibold text-gray-500 uppercase">
        Favoriten
      </div>
      <nav className="flex flex-col space-y-1">
        <a className="px-3 py-1 flex items-center gap-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <span>📁</span> Dokumente
        </a>
        <a className="px-3 py-1 flex items-center gap-2 hover:bg-gray-200 rounded-md cursor-pointer">
          <span>⭐</span> Favoriten
        </a>
      </nav>

      <div className="mt-4 p-3 text-xs font-semibold text-gray-500 uppercase">
        Geräte
      </div>
      <nav className="flex flex-col space-y-1">
        <a className="px-3 py-1 flex items-center gap-2 hover:bg-gray-200 rounded-md cursor-pointer">
          💻 MacBook
        </a>
      </nav>
    </aside>
  );
}

export default FolderSidebar;
