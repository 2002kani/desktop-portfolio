import FolderSidebar from "./FolderSidebar";
import FolderMenuBar from "./FolderMenuBar";
import FolderDetails from "./FolderDetails";

function PageLayout() {
  return (
    <div className="flex justify-center items-center pt-[10vh]">
      <div className="flex w-[60%] h-[75vh]">
        <FolderSidebar />
        <div className="flex flex-col flex-1">
          <FolderMenuBar title="Titel" />
          <FolderDetails />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
