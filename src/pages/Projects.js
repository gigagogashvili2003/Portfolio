import classes from "./Projects.module.css";
import { DUMMY_PROJECTS } from "../config/config";
import ProjectsList from "../components/lists/ProjectsList";
import ProjectsListItem from "../components/lists/ProjectsListItem";

const Projects = () => {
  const projectsContent = DUMMY_PROJECTS.map((project) => (
    <ProjectsListItem
      path={project.path}
      key={project.id}
      year={project.year}
      name={project.name}
      imageUrl={project.imageUrl}
    />
  ));

  return (
    <div className={classes.projectsContainer}>
      <h1 className={classes.projectsMainTitle}>Some of my projects</h1>
      <ProjectsList>{projectsContent}</ProjectsList>
    </div>
  );
};

export default Projects;
