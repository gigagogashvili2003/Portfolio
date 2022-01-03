import classes from "./ListItem.module.css";
import { useLocation } from "react-router-dom";

const ListItem = (props) => {
  const levelContent = `${props.level ? `(${props.level})` : ""}`;

  const location = useLocation();
  return (
    <div className={props.className}>
      <div>
        <h2>{`${props.name} ${levelContent}`}</h2>
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <p>{props.paragraph}</p>
      <h3>Experience: {props.experience}</h3>
    </div>
  );
};

export default ListItem;
