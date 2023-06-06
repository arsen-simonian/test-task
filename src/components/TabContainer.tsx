import { useContext, MouseEvent } from "react"
import { ActionType, TabTitles, Tabs } from "../types"
import { AppContext } from "../context";

export const TabContainer = () => {
    const { state: {
        currentTab
    }, dispatch } = useContext(AppContext);

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch({
            type: ActionType.SET_TAB,
            payload: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                currentTab: e.target.name as Tabs
            },
        });
    };

    const generateClassNameForTab = (tab: Tabs) => {
        const activeStyles = "text-white bg-violet lg:text-violet lg:bg-transparent lg:border-b-2 lg:border-b-violet lg:border-violet-500 lg:rounded-none";
        const inactiveStyles = "text-purple opacity-80 bg-white border border-gray-300 lg:border-none lg:opacity-60 border-secondaryWhite";
        const defaultStyles = "font-bold py-2 px-4 rounded-full transition duration-50 ease-in";

        switch (tab) {
            case Tabs.small_business:
                return `${defaultStyles} ${currentTab === Tabs.small_business || !currentTab ? activeStyles : inactiveStyles} `;
            case Tabs.medium_business:
                return `${defaultStyles} ${currentTab === Tabs.medium_business ? activeStyles : inactiveStyles}`;
            case Tabs.enterprise:
                return `${defaultStyles} ${currentTab === Tabs.enterprise ? activeStyles : inactiveStyles}`;

            default:
                return "";
        }
    }

    return (
        <div className="flex justify-center gap-3">
            <button
                name={Tabs.small_business}
                className={generateClassNameForTab(Tabs.small_business)}
                onClick={handleButtonClick}
            >
                {TabTitles.small_business}
            </button>
            <button
                name={Tabs.medium_business}
                className={generateClassNameForTab(Tabs.medium_business)}
                onClick={handleButtonClick}
            >
                {TabTitles.medium_business}
            </button>
            <button
                name={Tabs.enterprise}
                className={generateClassNameForTab(Tabs.enterprise)}
                onClick={handleButtonClick}
            >
                {TabTitles.enterprise}
            </button>
        </div>
    );
};