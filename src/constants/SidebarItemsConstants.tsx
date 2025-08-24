import type { SidebarItemInterface } from "@/components/FolderSidebar";
import {
  ClipboardClock,
  Package,
  ScrollText,
  TvMinimalPlay,
  FileSpreadsheet,
  BookMarked,
  BriefcaseBusiness,
  HatGlasses,
  CodeXml,
} from "lucide-react";

export const projectItems: SidebarItemInterface[] = [
  {
    icon: <ClipboardClock size={16} />,
    label: "Planen - AI Task Manager",
  },
  {
    icon: <Package size={16} />,
    label: "Projectify",
  },
  {
    icon: <ScrollText size={16} />,
    label: "Anime Watchlist",
  },
  {
    icon: <TvMinimalPlay size={16} />,
    label: "Netflix Clone",
  },
  {
    icon: <FileSpreadsheet size={16} />,
    label: "Coding Cheatsheet",
  },
  {
    icon: <BookMarked size={16} />,
    label: "Code snippet Manager",
  },
];

export const aboutMeItems: SidebarItemInterface[] = [
  {
    icon: <CodeXml size={16} />,
    label: "Skills",
  },
  {
    icon: <BriefcaseBusiness size={16} />,
    label: "Ausbildung",
  },
  {
    icon: <HatGlasses size={16} />,
    label: "Interessen",
  },
];
