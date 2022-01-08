import classes from "./TechSkillsList.module.css";
const TechSkillsList = ({ children }) => {
  return <div className={classes.techSkillsList}>{children}</div>;
};

export default TechSkillsList;
