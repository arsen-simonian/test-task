
import { useContext, ReactNode, memo } from "react";
import { ProjectCard } from ".";
import { IState } from "../types";
import { AppContext } from "../context";

const ProjectGroupSection = memo(({ projects }: Partial<IState>) => (
    <div className="flex flex-col gap-3">
        {projects?.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
));

export const ProjectGroup = ({ children }: { children: ReactNode }) => {
    const { state } = useContext(AppContext);

    return (
        <div className="flex justify-center items-center gap-32 project-group-wrapper lg:flex-col lg:gap-3 lg:justify-normal">
            <div className="lg:flex lg:order-2">
                <ProjectGroupSection
                    projects={state[state.currentTab]?.slice(0, Math.ceil(state[state.currentTab]?.length / 2))}
                />
            </div>
            <div className="lg:flex lg:order-1">
                {children}
            </div>
            <div className="lg:flex lg:order-3">
                <ProjectGroupSection
                    projects={state[state.currentTab]?.slice(Math.ceil(state[state.currentTab]?.length / 2))}
                />
            </div>
        </div>
    );
};