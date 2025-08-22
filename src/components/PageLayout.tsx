import { useEffect, useRef, useState } from "react";

import Draggable from "react-draggable";

import FolderSidebar from "./FolderSidebar";
import FolderMenuBar from "./FolderMenuBar";
import FolderDetails from "./FolderDetails";

function PageLayout() {
  const nodeRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className="absolute inset-0">
      <Draggable
        defaultPosition={{
          x: window.innerWidth / 2 - (window.innerWidth * 0.6) / 2,
          y: window.innerHeight / 2 - (window.innerHeight * 0.8) / 2,
        }}
        bounds="parent"
        nodeRef={nodeRef}
        handle=".drag-handle"
      >
        <div ref={nodeRef} className="drag-handle flex w-[60%] h-[75vh]">
          <FolderSidebar />
          <div className="flex flex-col flex-1">
            <FolderMenuBar title="Titel" />
            <FolderDetails />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default PageLayout;
