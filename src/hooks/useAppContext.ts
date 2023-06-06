import { useReducer } from "react";
import { ActionType, IAction, IState } from "../types";
import { initialContextValue } from "../mocks";

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionType.SET_TAB:
      return {
        ...state,
        currentTab: action.payload.currentTab,
      };
    case ActionType.SET_ACTIVE_PROJECTS:
      return {
        ...state,
        [state.currentTab]: state[state.currentTab].map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                checked: !el.checked,
              }
            : el
        ),
      };

    default:
      return state;
  }
}

export const useAppContext = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, dispatch] = useReducer<any>(reducer, initialContextValue);

  return {
    state: state as IState,
    dispatch,
  };
};
