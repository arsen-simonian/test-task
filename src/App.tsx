import { ProjectGroup, UserCard, TabContainer } from "./components";
import { AppContextProvider } from "./context";

export const App = () => (
  <AppContextProvider>
    <TabContainer />
    <ProjectGroup>
      <UserCard />
    </ProjectGroup>
  </AppContextProvider>
);