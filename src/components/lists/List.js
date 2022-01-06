import classes from "./List.module.css";
import { useInView } from "react-intersection-observer";

const List = (props) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${classes.list} ${inView ? classes.inView : ""}`}
    >
      {props.children}
    </div>
  );
};

export default List;
