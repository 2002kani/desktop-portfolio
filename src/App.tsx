import { useState } from "react";
import { wallpaper } from "./assets";
import Dock from "./components/Dock";
import Folder from "./components/Folder";
import MenuBar from "./components/MenuBar";
import PageLayout from "./components/PageLayout";

function App() {
  const [isPageLayoutOpen, setIsPageLayoutOpen] = useState(false);

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
          onClick={() => setIsPageLayoutOpen(true)}
        />
        <Folder
          foldername="Über mich"
          onClick={() => setIsPageLayoutOpen(true)}
        />
        <Folder
          foldername="Lebenslauf"
          onClick={() => setIsPageLayoutOpen(true)}
        />
      </div>

      {isPageLayoutOpen && (
        <PageLayout onClose={() => setIsPageLayoutOpen(false)} />
      )}

      <div>
        <Dock />
      </div>
    </div>
  );
}

export default App;
