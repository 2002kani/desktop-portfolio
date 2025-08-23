import { useRef, useState } from "react";
import { folderIcon } from "../assets";
import Draggable from "react-draggable";

interface IFolderProps {
  foldername: string;
  onClick: () => void;
}

function Folder({ foldername, onClick }: IFolderProps) {
  const nodeRef = useRef(null);
  const [dragged, setDragged] = useState(false);

  const handleDrag = () => {
    setDragged(true);
  };

  const handleStop = () => {
    setDragged(false);
  };

  return (
    <div className="mb-4">
      <Draggable
        onStop={handleStop}
        onDrag={handleDrag}
        nodeRef={nodeRef}
        handle=".drag-handle"
      >
        <div ref={nodeRef} className="drag-handle flex items-center flex-col">
          {!dragged ? (
            <img
              src={folderIcon}
              alt="Ordner"
              height={70}
              width={70}
              className="cursor-pointer transition duration-100 ease-in-out hover:brightness-90 active:brightness-70"
              onClick={onClick}
            />
          ) : (
            <img
              style={{ pointerEvents: "none" }}
              src={folderIcon}
              alt="Ordner"
              height={70}
              width={70}
              className="cursor-pointer transition duration-100 ease-in-out hover:brightness-90 active:brightness-70"
              onClick={onClick}
            />
          )}
          <p className=" text-white font-medium text-sm">{foldername}</p>
        </div>
      </Draggable>
    </div>
  );
}

export default Folder;
