import { folderIcon } from "../assets";

interface IFolderProps {
  foldername: string;
  onClick: () => void;
}

function Folder({ foldername, onClick }: IFolderProps) {
  return (
    <div className="flex items-center flex-col mb-4">
      <img
        src={folderIcon}
        alt="Ordner"
        height={70}
        width={70}
        className="cursor-pointer"
        onClick={onClick}
      />
      <p className="text-white font-medium text-sm">{foldername}</p>
    </div>
  );
}

export default Folder;
