import { ChangeEventHandler, useContext, useCallback, useMemo } from "react";
import { ActionType, IProjectCard, } from "../types";
import { AppContext } from "../context";

interface IProps {
    project: IProjectCard;
}

export const ProjectCard = ({ project }: IProps) => {
    const { state, dispatch } = useContext(AppContext);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(() => {
        if (state?.currentTab) {
            dispatch({
                type: ActionType.SET_ACTIVE_PROJECTS,
                payload: {
                    id: project.id,
                }
            });
        }
    }, [state.currentTab, dispatch, project.id]);

    const isChecked = useMemo(() => state[state.currentTab].find(el => el.id === project.id)?.checked, [project.id, state]);

    return (
        <div className="flex flex-row justify-between project-card-wrapper" style={{ border: isChecked ? "2px solid #9D71FD" : "1px solid #E8E6EC" }}>
            <div className="flex flex-row items-center gap-x-3">
                <img
                    className="rounded-lg"
                    src={project.icon}
                    width={68}
                    height={68}
                />
                <div className="flex flex-col">
                    <strong className="text-violetDark">{project.title}</strong>
                    <span className="text-violetLight text-xs">{project.description}</span>
                </div>
            </div>
            <div className=" flex items-center justify-center" >
                <div
                    className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-50 ease-in rounded-2xl border-solid border-2 ${isChecked ? "border-violet bg-secondaryWhite" : "bg-white border-secondaryWhite"}`}
                >
                    <input
                        checked={isChecked}
                        onChange={onChange}
                        type="checkbox"
                        name={project.id}
                        id={project.id}
                        className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white appearance-none cursor-pointer"
                        style={{
                            border: `4px solid ${isChecked ? "#9D71FD" : "white"}`,
                            background: isChecked ? "white" : "#A39CB5"
                        }}
                    />
                    <label htmlFor={project.id} className="toggle-label block overflow-hidden h-4 rounded-full bg-white-300 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}