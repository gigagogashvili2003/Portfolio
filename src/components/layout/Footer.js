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

  const socialLinksContent = DUMMY_SOCIALS.map((socialLink) => (
    <li key={socialLink.id}>
      <a href={socialLink.link} target="_blank">
        {socialLink.name}
      </a>
    </li>
  ));
  const ProjectsContent = DUMMY_PROJECTS_TITLES.map((projectTitle) => (
    <li key={projectTitle.id}>
      <Link to={projectTitle.path}>{projectTitle.name}</Link>
    </li>
  ));
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <footer
      ref={ref}
      className={`${classes.footer} ${inView ? classes.inView : ""}`}
    >
      <div className={classes["footer__top--titles"]}>
        <p>NEED A JUNIOUR FRONT END DEVELOPER ?</p>
        <h1>
          <NavLink style={{ opacity: 1 }} to="/contact-me">
            Let's work together
            <span>
              <EastIcon style={{ fontSize: "50px" }} />
            </span>
          </NavLink>
        </h1>
      </div>
      <div className={classes["footer__bottom--container"]}>
        <div className={classes["footer__bottomTop--container"]}>
          <div className={classes.contactInformationTitles}>
            <h3>
              Contact <br /> Infromation
            </h3>

            <p>
              Feel free to reach out to me any time. I prefer to talk over
              <br />
              email, especially since we may be a few time zones away.
            </p>
            <h4>
              E:
              <span>
                <a href="mailto:businessgogashvili@gmail.com">
                  businessgogashvili@gmail.com
                </a>
              </span>
            </h4>
            <h4>
              P:
              <span>
                <a href="tel:551-907-657">+995 551 907 657</a>
              </span>
            </h4>
          </div>
          <div className={classes["footer__projects"]}>
            <h3>
              Latest <br />
              projects
            </h3>
            <ul>{ProjectsContent}</ul>
          </div>
          <div className={classes["avilability__title--footer"]}>
            <h3>
              Current <br />
              avilability
            </h3>
            <p>
              I’ll be happy to discuss new opportunities. Let’s get in touch!
            </p>
          </div>
          <div className={classes["social__links--footer"]}>
            <h3>
              Follow <br />
              me on
            </h3>
            <ul>{socialLinksContent}</ul>
          </div>
        </div>
        <div className={`${classes.logoGreyVersion}`}>
          <div onClick={scrollToTopHandler} className={classes.logoImageGrey}>
            G
          </div>
          <div className={`${classes["logo__name"]}`}>
            <h2>2021 - 2022 Giga Gogashvili</h2>
            <p>Made with in Georgia, Tbilisi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
