import PageContainer from "../components/Components/PageContainer/PageContainer";
import Projects from "../components/Components/Projects/Projects";
import Stacks from "../components/Components/TechStacks/Stacks";

const Project = () => {
  return (
    <PageContainer
      children={
        <>
          <div className="projects">
            <h1>Projects</h1>
            <section className="container">
              <Projects />
            </section>
          </div>
          <div className="tech-stack">
            <h1>Tech Stack</h1>
            <section className="tech-stack-section">
              <Stacks />
            </section>
          </div>
        </>
      }
    ></PageContainer>
  );
};

export default Project;
