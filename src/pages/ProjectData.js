import { useParams } from "react-router-dom";
import classes from "./ProjectData.module.css";
import { DUMMY_PROJECT_DATAS } from "../config/config";
import LazyImages from "../components/UI/LazyImages";

const ProjectData = (props) => {
  const { projectName } = useParams();

  const data = DUMMY_PROJECT_DATAS.find((data) => data.path === projectName);
  let imagesContent;
  if (data.images.length > 0) {
    imagesContent = data.images.map((image) => (
      <LazyImages
        key={Math.random()}
        className={`${classes.projectDataImagesContainerImg}`}
        src={image}
      />
    ));
  } else {
    imagesContent = <p className={classes.imageNotFound}>Images Not Found!</p>;
  }

  const projectDataContent = (
    <div className={classes.projectDataContainer}>
      <div className={classes.projectDataContainerTop}>
        <div className={classes.projectDataContainerLeft}>
          <p>{data.name ? data.name : ""}</p>
          <h2>{data.title ? data.title : ""}</h2>
        </div>
        <div className={classes.projectDataContainerRight}>
          <p>{data.description ? data.description : ""}</p>
          <p>
            Date Created: {data.creationDate ? data.creationDate : "Unknow"}
          </p>
          <p>
            Link:
            <a href={data.websiteLink ? data.websiteLink : ""} target="_blank">
              {data.websiteLink ? data.websiteLink : "Project Isn't Done Yet."}
            </a>
          </p>
        </div>
      </div>
      <div className={classes.projectDataImagesContainer}>{imagesContent}</div>
    </div>
  );

  return <>{projectDataContent}</>;
};

export default ProjectData;
