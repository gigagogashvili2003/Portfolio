import classes from "./ProjectsList.module.css";
const ProjectsList = ({ children }) => {
  return <div className={classes.projectsList}>{children}</div>;
};

export default ProjectsList;
