import { useState } from "react";
import { wallpaper } from "./assets";
import Dock from "./components/Dock";
import Folder from "./components/Folder";
import MenuBar from "./components/MenuBar";
import PageLayout from "./components/PageLayout";

function App() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div>
        <MenuBar />
      </div>

      <div className="absolute top-15 left-8">
        <Folder
          foldername="Projekte"
          onClick={() => setActiveFolder("Projekte")}
        />
        <Folder
          foldername="Über mich"
          onClick={() => setActiveFolder("Über mich")}
        />
        <Folder
          foldername="Sonstiges"
          onClick={() => setActiveFolder("Sonstiges")}
        />
      </div>

      {activeFolder && (
        <PageLayout
          activeFolder={activeFolder}
          onClose={() => setActiveFolder(null)}
        />
      )}

      <div>
        <Dock />
      </div>
    </div>
  );
}

export default App;
