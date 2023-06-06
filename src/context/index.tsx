import { createContext, ReactNode, Dispatch, memo } from "react";
import { IAppContext, IAction } from "../types";
import { useAppContext } from "../hooks/useAppContext";
import {
    initialContextValue,
} from "../mocks";

export const AppContext = createContext<IAppContext>({
    state: initialContextValue,
    dispatch: {} as Dispatch<IAction>,
});

export const AppContextProvider = memo(
    ({ children }: { children: ReactNode }) => {
        const { dispatch, state } = useAppContext();

        return (
            <AppContext.Provider value={{
                dispatch,
                state: state?.currentTab ? state : initialContextValue,
            }}>
                <div className="flex flex-col justify-center items-center h-screen gap-20">
                    {children}
                </div>
            </AppContext.Provider>
        );
    }
);