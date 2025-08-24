import { useRef } from "react";

import Draggable from "react-draggable";

import FolderSidebar from "./FolderSidebar";
import FolderMenuBar from "./FolderMenuBar";
import FolderDetails from "./FolderDetails";

import { projectItems, aboutMeItems } from "@/constants/SidebarItemsConstants";

interface IPageLayoutProps {
  activeFolder: string;
  onClose: () => void;
}

function PageLayout({ activeFolder, onClose }: IPageLayoutProps) {
  const nodeRef = useRef(null);

  const getFolderItems = (folder) => {
    if (!folder) return;

    if (folder === "Projekte") {
      return projectItems;
    } else if (folder === "Über mich") {
      return aboutMeItems;
    }
  };

  return (
    <div className="absolute inset-0">
      <Draggable
        defaultPosition={{
          x: window.innerWidth / 2 - (window.innerWidth * 0.65) / 2,
          y: window.innerHeight / 2 - (window.innerHeight * 0.85) / 2,
        }}
        bounds="parent"
        nodeRef={nodeRef}
        handle=".drag-handle"
      >
        <div ref={nodeRef} className="drag-handle flex w-[65%] h-[80vh]">
          <FolderSidebar
            items={getFolderItems(activeFolder)}
            title={activeFolder}
            onClose={onClose}
          />
          <div className="flex flex-col flex-1">
            <FolderMenuBar title={activeFolder} />
            <FolderDetails />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default PageLayout;
