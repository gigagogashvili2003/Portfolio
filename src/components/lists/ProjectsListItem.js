import { Link, Routes, Route, useParams } from "react-router-dom";
import classes from "./ProjectsListItem.module.css";

const ProjectsListItem = ({ year, name, imageUrl, path }) => {
  return (
    <>
      <Link to={path} className={classes.projectItem}>
        <div
          className={classes.projectImage}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className={classes.projectItemTitles}>
            <p>{year}</p>
            <h2>{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectsListItem;
