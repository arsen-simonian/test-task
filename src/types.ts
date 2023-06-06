import { Dispatch } from "react";

export interface IProjectCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  checked: boolean;
}

export interface IAppContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export interface IAction {
  type: ActionType;
  payload: Partial<IState>;
}

export interface IState {
  currentTab: Tabs;
  projects?: IProjectCard[];
  id?: string;
  SMALL_BUSINESS: IProjectCard[];
  MEDIUM_BUSINESS: IProjectCard[];
  ENTERPRISE: IProjectCard[];
}

export enum Tabs {
  small_business = "SMALL_BUSINESS",
  medium_business = "MEDIUM_BUSINESS",
  enterprise = "ENTERPRISE",
}

export enum TabTitles {
  small_business = "Small Business",
  medium_business = "Medium Business",
  enterprise = "Enterprise",
}

export enum ActionType {
  SET_TAB = 1,
  SET_ACTIVE_PROJECTS,
}
