import { useState } from "react";

import SideBar from "./components/SideBar.jsx";
import NoProjects from "./components/NoProjects.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [],
      };
    });
  }

  // content 조건부 렌더링
  let content = <NoProjects onStartAddProject={handleStartAddProject} />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
