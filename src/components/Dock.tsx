import {
  terminalIcon,
  vscodeIconRed,
  finderIcon,
  eclipseIcon,
  notesIcon,
  safariIcon,
  launchpadIcon,
  settingsIcon,
  binIcon,
} from "../assets";
import { Separator } from "./ui/separator";

const DockItems = [
  {
    src: finderIcon,
    alt: "Finder",
  },
  {
    src: launchpadIcon,
    alt: "Launchpad",
  },
  {
    src: terminalIcon,
    alt: "Terminal",
  },
  {
    src: safariIcon,
    alt: "Safari",
  },
  {
    src: vscodeIconRed,
    alt: "VS Code",
  },
  {
    src: eclipseIcon,
    alt: "Eclipse",
  },
  {
    src: notesIcon,
    alt: "Notizen",
  },
  {
    src: settingsIcon,
    alt: "Einstellung",
  },
];

function Dock() {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1 p-1 bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10">
      {DockItems.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt={item.alt}
          className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
        />
      ))}
      <Separator orientation="vertical" className="!h-12 mx-2 bg-neutral-600" />
      <img
        src={binIcon}
        alt="Papierkorb"
        className="w-13 h-13 hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  );
}

export default Dock;
