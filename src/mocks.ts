import { IProjectCard, Tabs } from "./types";
import icon from "./assets/project.png";

const SMALL_BUSINESS: IProjectCard[] = [
  {
    icon,
    id: "1",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "2",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "3",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "4",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "5",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "6",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
];

const MEDIUM_BUSINESS: IProjectCard[] = [
  {
    icon,
    id: "1",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "2",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "3",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "4",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
];

const ENTERPRISE: IProjectCard[] = [
  {
    icon,
    id: "1",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "2",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "3",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "4",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
  {
    icon,
    id: "5",
    title: "Sapling",
    description: "HR Management",
    checked: false,
  },
];

const initialContextValue = {
  projects: SMALL_BUSINESS,
  currentTab: Tabs.small_business,
  SMALL_BUSINESS,
  MEDIUM_BUSINESS,
  ENTERPRISE,
};

export { SMALL_BUSINESS, MEDIUM_BUSINESS, ENTERPRISE, initialContextValue };
