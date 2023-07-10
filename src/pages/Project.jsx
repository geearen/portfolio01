import PageContainer from "../components/Components/PageContainer/PageContainer";
import Projects from "../components/Components/Projects/Projects";
import Stacks from "../components/Components/TechStacks/Stacks";

const Project = () => {
  return (
    <PageContainer
      children={
        <div className="project-container">
          <div className="projects">
            <h1>Projects</h1>
            <Projects />
          </div>
          <div className="tech-stack">
            <h1>Tech Stack</h1>
            <Stacks />
          </div>
        </div>
      }
    ></PageContainer>
  );
};

export default Project;
