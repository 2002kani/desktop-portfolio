import { wifiIcon, bluetoothIcon, batteryIcon } from "../assets";
import { currentDate } from "../utils/currentDate";
import { dateTime } from "../utils/dateTime";

function MenuBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-7.5 flex items-center justify-between px-4 bg-white/2 backdrop-blur-xl backdrop-saturate-120 z-50 text-white text-sm">
      <div className="flex items-center gap-5">
        <p className="text-lg cursor-pointer"></p>
        <p className="cursor-pointer">Projekte</p>
        <p className="cursor-pointer">Über mich</p>
        <p className="cursor-pointer">Lebenslauf</p>
      </div>

      <div className="flex items-center gap-3.5">
        <img src={bluetoothIcon} alt="bluetooth-icon" height={18} width={18} />
        <img
          src={batteryIcon}
          alt="battery-icon"
          height={28}
          width={28}
          className="pt-0.5"
        />
        <img src={wifiIcon} alt="wifi-icon" height={26} width={26} />
        {currentDate()}
        <span>{dateTime()}</span>
      </div>
    </div>
  );
}

export default MenuBar;
