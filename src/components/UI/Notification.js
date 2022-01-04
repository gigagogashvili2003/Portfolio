import classes from "./Notification.module.css";

const Notification = (props) => {
  return <div className={classes.Notification}>{props.notificationTitle}</div>;
};

export default Notification;
