import { wallpaper } from "./assets";
import Dock from "./components/Dock";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div>
        <MenuBar />
      </div>

      <div>
        <Dock />
      </div>
    </div>
  );
}

export default App;
