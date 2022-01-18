import classes from "./Footer.module.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { DUMMY_SOCIALS } from "../../config/config";
import { DUMMY_PROJECTS_TITLES } from "../../config/config";
import { useInView } from "react-intersection-observer";
// Material UI icon imports
import EastIcon from "@mui/icons-material/East";
const Footer = () => {
  const navigate = useNavigate();
  const scrollToTopHandler = () => {
    navigate("/", { replace: false });
  };

  const socalLinksContent = DUMMY_SOCIALS.map((social) => {
    return (
      <a key={social.id} href={social.link} target="_blank">
        {social.name}
      </a>
    );
  });

  const projectsContent = DUMMY_PROJECTS_TITLES.map((project) => {
    return (
      <NavLink key={project.id} to={project.path}>
        {project.name}
      </NavLink>
    );
  });

  return (
    <div className={classes.footer}>
      <div className={classes.footerTopContainer}>
        <p>NEED A JUNIOR FRONTEND DEVELOPER?</p>
        <h1>
          <NavLink to="/contact-me">LET'S WORK TOGETHER</NavLink>
        </h1>
      </div>

      <div className={classes.footerBottomContainer}>
        <div className={classes["footer__contact--information"]}>
          <div className={classes["footer__titles--blocks"]}>
            <h3>
              Contact <br /> Information
            </h3>
          </div>
          <div className={classes["footer__actual--content"]}>
            <p>
              Feel free to reach out to me any time. I prefer to talk over
              email, especially since we may be a few time zones away.
            </p>
            <h4>
              <span>Phone:</span>{" "}
              <a href="tel:+995 551 907 657">+995 551 907 657</a>
            </h4>
            <h4>
              <span>Email:</span>{" "}
              <a href="mailto:thegogashvili@gmail.com">
                thegogashvili@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className={classes["footer__latest--projects"]}>
          <div className={classes["footer__titles--blocks"]}>
            <h3>
              Latest <br /> Projects
            </h3>
          </div>
          <div className={classes["latest__projects--actualContent"]}>
            {projectsContent}
          </div>
        </div>
        <div className={classes["footer__social--links"]}>
          <div className={classes["footer__titles--blocks"]}>
            <h3>
              Social <br /> Links
            </h3>
          </div>
          <div className={classes["social__links--actualContent"]}>
            {socalLinksContent}
          </div>
        </div>
        <div onClick={scrollToTopHandler} className={classes.logo}>
          {/* <img src={myLogo} alt="Logo" /> */}
          <div className={classes.logoImage}>G</div>
          <div className={`${classes["logo__name"]}`}>
            <h2>© 2021 — 2020 Giga Gogashvili.</h2>
            <p>Made with in Georgia, Tbilisi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
