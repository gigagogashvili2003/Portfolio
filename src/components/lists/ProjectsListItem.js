import { useNavigate } from "react-router-dom";
import LazyImages from "../UI/LazyImages";
import classes from "./ProjectsListItem.module.css";

const ProjectsListItem = ({ year, name, imageUrl, path }) => {
  const navigate = useNavigate();

  const navigateToProject = () => {
    navigate(path, { replace: false });
  };

  return (
    <>
      <div onClick={navigateToProject} className={classes.projectItem}>
        <div className={classes.projectItemTitles}>
          <p>{year}</p>
          <h2>{name}</h2>
        </div>
        <LazyImages
          className={classes.projectImage}
          width={"100%"}
          src={imageUrl}
        />
      </div>
    </>
  );
};

export default ProjectsListItem;
