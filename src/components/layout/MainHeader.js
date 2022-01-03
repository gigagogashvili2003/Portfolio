import classes from "./MainHeader.module.css";
import myImage from "../../assets/my-image.JPG";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  const changeNavigationHandler = (event) => {
    const targetTextContent = event.target.textContent;
    if (targetTextContent === "Read About Me") {
      navigate("/about-me", { replace: false });
    } else {
      navigate("/projects", { replace: false });
    }
  };
  return (
    <section className={classes["main__header"]}>
      <div className={classes["main__header--wrapper"]}>
        <div className={classes["main__header--titles"]}>
          <h4>Giga Gogashvili</h4>
          <h1>Junior Frontend Developer</h1>
          <p>
            I’m 18 years old Self-Taught, Creative, Flexible, and Very motivated
            person. Currently I have not any work experience
          </p>
          <h5>
            <span
              onClick={changeNavigationHandler}
              className={classes.viewProjects}
            >
              View Projects
            </span>
            <span className={classes.or}>or</span>
            <span
              onClick={changeNavigationHandler}
              className={classes.readAboutMe}
            >
              Read About Me
            </span>
          </h5>
        </div>
        <div className={classes["main__header--image"]}>
          <img src={myImage} alt="My Image" />
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
