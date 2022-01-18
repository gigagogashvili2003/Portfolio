import { useInView } from "react-intersection-observer";
import LazyImages from "../UI/LazyImages";
import classes from "./TechSkillsListItem.module.css";
const TechSkillsListItem = (props) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const levelContent = `${props.level ? `(${props.level})` : ""}`;

  return (
    <div
      ref={ref}
      className={`card ${classes.listItem} ${inView ? classes.inView : ""}`}
      style={{ width: "25rem", backgroundColor: props.backgroundColor }}
    >
      <LazyImages
        className="card-img-top"
        src={props.imageUrl}
        alt={props.name}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.name} {levelContent}
        </h5>
        <p className="card-text">{props.experience}</p>
      </div>
    </div>
  );
};

export default TechSkillsListItem;
