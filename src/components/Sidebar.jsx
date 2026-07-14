"use client";

import {
  Menu,
  Scan,
  Workflow,
  GitBranch,
  UserRound,
  FileText,
  ContactRound,
  UsersRound,
  Network,
  Settings,
  ClipboardList,
  SquareCheckBig,
  Database,
  ScanLine,
  FileUp,
  Bell,
  MessageCircle,
  History,
} from "lucide-react";

const configurationItems  = [
  { name: "Workflow Type", icon: Scan },
  { name: "Workflow", icon: Workflow },
  { name: "Workflow Step", icon: Scan },
  { name: "Workflow Transition", icon: GitBranch },
  { name: "Task Permission", icon: UserRound },
  { name: "Document Configuration", icon: FileText },
  { name: "Assignment Rule", icon: ContactRound },
  { name: "Hierarchy Node", icon: UsersRound },
  { name: "User Hierarchy Mapping", icon: Network },
  { name: "Workflow Settings", icon: Settings },
];

const runtimeItems = [
  { name: "File Instance", icon: ClipboardList },
  { name: "Task Instance", icon: SquareCheckBig },
  { name: "File Pool", icon: Database },
  { name: "Movement History", icon: ScanLine },
  { name: "Uploaded Document", icon: FileUp },
  { name: "Notification", icon: Bell },
  { name: "Comment", icon: MessageCircle },
  { name: "Audit Log", icon: History },
];
export default function Sidebar({ isOpen, onToggle}) {
  const renderMenuItem = (item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.name}
        type="button"
        className="
          flex h-[56px] w-full items-center gap-[17px]
          rounded-[9px] px-[17px]
          text-left text-[#344261]
          transition-colors duration-150
          hover:bg-[#F6F8FC]
        "
      >
        <span
          className="
            flex h-[29px] w-[29px] shrink-0
            items-center justify-center
            rounded-[6px] text-[#405170]
          "
        >
          <Icon size={22} strokeWidth={1.8} />
        </span>

        <span className="whitespace-nowrap text-[16px] font-medium leading-[22px]">
          {item.name}
        </span>
      </button>
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
              ? "w-[340px] min-w-[340px] translate-x-0 opacity-100"
              : "w-0 min-w-0 -translate-x-full opacity-0"
          }
        `}
        >
      <header
  className="
    flex h-[132px] items-center justify-between
    border-b border-[#EDF0F5]
    px-[32px]
  "
>
  <div className="flex items-center gap-4">

    <svg
      width="48"
      height="56"
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
      <h1 className="text-[25px] font-extrabold text-[#101318]">
        FLOWCORE
      </h1>

      <p className="text-[16px] text-[#344261]">
        Workflow Engine
      </p>
    </div>

  </div>

  <button
    type="button"
    onClick={onToggle}
    className="
      flex h-10 w-10
      items-center justify-center
      rounded-lg
      hover:bg-gray-100
    "
  >
    <Menu size={24}/>
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

  <nav className="flex flex-col gap-[3px]">
    {configurationItems.map(renderMenuItem)}
  </nav>

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

  <nav className="flex flex-col gap-[3px]">
    {runtimeItems.map(renderMenuItem)}
  </nav>
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
    <Settings size={24} strokeWidth={1.9} />
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
          <Menu size={26} strokeWidth={2} />
        </button>
      )}
    </>
  );
}