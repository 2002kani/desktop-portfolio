import {
  terminalIcon,
  vscodeIconRed,
  finderIcon,
  eclipseIcon,
  notesIcon,
  safariIcon,
  launchpadIcon,
  settingsIcon,
} from "../assets";

function Dock() {
  return (
    <div
      className="fixed bottom-2 left-1/2 transform -translate-x-1/2
                flex items-center gap-1 p-1 bg-white/40 backdrop-blur-lg
                rounded-2xl shadow-lg border border-white/10"
    >
      <img
        src={finderIcon}
        alt="Finder"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={launchpadIcon}
        alt="Launchpad"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={terminalIcon}
        alt="Terminal"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={safariIcon}
        alt="Safari"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={vscodeIconRed}
        alt="VS Code"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={eclipseIcon}
        alt="Eclipse"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={notesIcon}
        alt="Notizen"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
      <img
        src={settingsIcon}
        alt="Einstellungen"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  );
}

export default Dock;
