import { useInView } from "react-intersection-observer";
import classes from "./TechSkillsList.module.css";
const TechSkillsList = (props) => {
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
      style={{ width: "18rem", backgroundColor: props.backgroundColor }}
    >
      <img className="card-img-top" src={props.imageUrl} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">
          {props.name} {levelContent}
        </h5>
        <p className="card-text">{props.experience}</p>
      </div>
    </div>
  );
};

export default TechSkillsList;

// <div className={props.className}>
//   <div>
//     <h2>{`${props.name} ${levelContent}`}</h2>
//     <img src={props.imageUrl} alt={props.name} />
//   </div>
//   <p>{props.paragraph}</p>
//   <h3>Experience: {props.experience}</h3>
// </div>