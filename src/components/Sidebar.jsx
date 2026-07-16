"use client";
import {useState} from "react";
  import {
    RiMenuLine,
  RiGitMergeLine,
  RiNodeTree,
  RiGitBranchLine,
  RiCornerDownRightLine,
  RiUserSettingsLine,
  RiFileShieldLine,
  RiUserSharedLine,
  RiSettings4Line,
  RiFileSettingsLine,
  RiFileList3Line,
  RiFileUploadLine,
  RiNotification4Line,
  RiDatabase2Line,
  RiChat3Line,
  RiCheckboxMultipleLine,
  RiShieldCheckLine,
  RiHistoryLine,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "@remixicon/react";

const workflowItems  = [
  { name: "Workflow Type", icon: RiGitMergeLine },
  { name: "Workflow", icon: RiNodeTree },
  { name: "Workflow Step", icon: RiGitBranchLine },
  { name: "Workflow Transition", icon: RiCornerDownRightLine },
];
const permissionItems = [
  { name: "Task Permission", icon: RiUserSettingsLine },
  { name: "Assignment Rule", icon: RiFileShieldLine },
];
const hierarchyItems = [
  { name: "Hierarchy Node", icon: RiNodeTree },
  { name: "User Hierarchy Mapping", icon: RiUserSharedLine },
  { name: "Workflow Settings", icon: RiSettings4Line },
];
const documentItems = [
  { name: "Document Configuration", icon: RiFileSettingsLine },
];

const fileItems = [
  { name: "File Instance", icon: RiFileList3Line },
  { name: "File Pool", icon: RiDatabase2Line },
  { name: "Uploaded Document", icon: RiFileUploadLine },
];
const communicationItems = [
  { name: "Notification", icon: RiNotification4Line },
  { name: "Comment", icon: RiChat3Line },
];
const taskItems = [
  { name: "Task Instance", icon: RiCheckboxMultipleLine },
];
const trackingItems = [
  { name: "Audit Log", icon: RiShieldCheckLine },
   { name: "Movement History", icon: RiHistoryLine },
];
export default function Sidebar({ isOpen, onToggle}) {
  const [workflowOpen, setWorkflowOpen] = useState(false);
const [permissionOpen, setPermissionOpen] = useState(false);
const [hierarchyOpen, setHierarchyOpen] = useState(false);
const [documentOpen, setDocumentOpen] = useState(false);

const [filesOpen, setFilesOpen] = useState(false);
const [tasksOpen, setTasksOpen] = useState(false);
const [trackingOpen, setTrackingOpen] = useState(false);
const [communicationOpen, setCommunicationOpen] = useState(false);

  const renderMenuItem = (item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        type="button"
        className="
          flex h-[44px] w-full items-center gap-[10px]
          rounded-[8px] px-[10px]
          text-left text-[#344261]
          transition-colors duration-150
          hover:bg-[#F6F8FC]
        "
      >
        <span
          className="
            flex h-[20px] w-[20px] shrink-0
            items-center justify-center
            rounded-[6px] text-[#405170]
          "
        >
          <Icon size={17} />
        </span>

        <span className="whitespace-nowrap text-[14px] font-medium leading-[22px]">
          {item.name}
        </span>
      </button>
    );
  };
  const renderDropdown = (title, open, setOpen, items) => {
  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex h-[50px] w-full items-center justify-between
          rounded-[9px] px-[17px]
          text-left text-[#344261]
          transition-colors duration-150
          hover:bg-[#F6F8FC]
        "
      >
        <span className="text-[16px] font-semibold">
          {title}
        </span>

        {open ? (
          <RiArrowDownSLine size={18} />
        ) : (
          <RiArrowRightSLine size={18} />
        )}
      </button>

      {open && (
        <div className="ml-[8px] border-l border-[#E5E9F1] pl-[4px]">
          {items.map(renderMenuItem)}
        </div>
      )}
    </div>
  );
};
  return (
    <>
      <aside
        className={`
          flex h-screen flex-col overflow-hidden
          border-r border-[#E5E9F1] bg-white
          font-sans text-[#273657]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "w-[245px] min-w-[245px] translate-x-0 opacity-100"
              : "w-0 min-w-0 -translate-x-full opacity-0"
          }
        `}
        >
      <header
  className="
    flex h-[84px] items-center justify-between
    border-b border-[#EDF0F5]
    px-[14px]
  "
>
  <div className="flex items-center gap-2">

    <svg
      width="36"
      height="42"
      viewBox="0 0 48 56"
      fill="none"
    >
      <path
        d="M24 2L45 12.5L24 23L3 12.5L24 2Z"
        fill="#356AF3"
      />

      <path
        d="M24 8L34 13L24 18L14 13L24 8Z"
        fill="white"
      />

      <path
        d="M3 20L24 30.5L45 20V27L24 37.5L3 27V20Z"
        fill="#356AF3"
      />

      <path
        d="M3 33L24 43.5L45 33V40L24 50.5L3 40V33Z"
        fill="#356AF3"
      />
    </svg>

    <div>
      <h1 className="text-[18px] font-extrabold text-[#101318]">
        FLOWCORE
      </h1>

      <p className="text-[12px] text-[#344261]">
        Workflow Engine
      </p>
    </div>

  </div>

  <button
    type="button"
    onClick={onToggle}
    className="
      flex h-8 w-8
      items-center justify-center
      rounded-lg
      hover:bg-gray-100
    "
  >
    <RiMenuLine size={18}/>
  </button>

</header>
<div
  className="
    min-h-0 flex-1
    overflow-y-auto overflow-x-hidden
    px-[27px] pb-[30px] pt-[31px]
  "
>
  <p
    className="
      mb-[19px] ml-[15px]
      text-[14px] font-bold uppercase
      leading-[20px] tracking-[0.2px]
      text-[#3C4D74]
    "
  >
    Configuration Masters
  </p>
<div className="flex flex-col gap-[3px]">
  {renderDropdown(
    "Workflow",
    workflowOpen,
    setWorkflowOpen,
    workflowItems
  )}

  {renderDropdown(
    "Permissions",
    permissionOpen,
    setPermissionOpen,
    permissionItems
  )}

  {renderDropdown(
    "Documents",
    documentOpen,
    setDocumentOpen,
    documentItems
  )}

  {renderDropdown(
    "Hierarchy",
    hierarchyOpen,
    setHierarchyOpen,
    hierarchyItems
  )}
</div>
  <p
    className="
      mb-[19px] ml-[15px] mt-[39px]
      text-[14px] font-bold uppercase
      leading-[20px] tracking-[0.2px]
      text-[#3C4D74]
    "
  >
    Runtime
  </p>
<div className="flex flex-col gap-[3px]">
  {renderDropdown(
    "Files",
    filesOpen,
    setFilesOpen,
    fileItems
  )}

  {renderDropdown(
    "Tasks",
    tasksOpen,
    setTasksOpen,
    taskItems
  )}

  {renderDropdown(
    "Tracking",
    trackingOpen,
    setTrackingOpen,
    trackingItems
  )}

  {renderDropdown(
    "Communication",
    communicationOpen,
    setCommunicationOpen,
    communicationItems
  )}
</div>
  
</div>
<div
  className="
    shrink-0
    bg-white
    px-[27px]
    pb-[34px]
    pt-[18px]
  "
>
  <button
    type="button"
    className="
      flex h-[66px] w-full
      items-center gap-[18px]
      rounded-[10px]
      border border-[#E1E5ED]
      bg-white
      px-[23px]
      text-left
      text-[16px]
      font-semibold
      text-[#2D3A58]
      shadow-sm
      hover:bg-[#F7F8FC]
      transition
    "
  >
    <RiSettings4Line size={20} />
    <span>Settings</span>
  </button>
</div>

</aside>
{!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          aria-label="Open sidebar"
          className="
            fixed left-[20px] top-[30px] z-[100]
            flex h-[46px] w-[46px]
            items-center justify-center
            rounded-[9px]
            border border-[#E1E5ED]
            bg-white text-[#344261]
            shadow-[0_2px_8px_rgba(0,0,0,0.08)]
            transition-colors
            hover:bg-[#F3F5F9]
          "
        >
          <RiMenuLine size={18}  />
        </button>
      )}
    </>
  );
}