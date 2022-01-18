import classes from "./NavLinksContainer.module.css";
import { Transition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { classesSliceActions } from "../../store/classes-slice";

// Material UI icons
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const NavLinksContainer = (props) => {
  const navLinkActive = (state) =>
    state.isActive ? classes.navLinkActive : "";
  const dispatch = useDispatch();
  const navAction = useSelector((state) => state.classSlices.isOpen);

  const closeNavigationHandler = () => {
    dispatch(classesSliceActions.close());
  };

  // Trash code but i needed it, cuz imnot using sass
  if (navAction) {
    document.querySelector("body").style.overflow = "hidden";
  }
  if (!navAction) {
    document.querySelector("body").style.overflow = "unset";
  }

  return (
    <Transition
      in={navAction}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const navLinksContainerClasses = [
          classes["nav__link--container"],
          state === "entering"
            ? classes.navLinksOpen
            : state === "exiting"
            ? classes.navLinksClosed
            : null,
        ];

        return (
          <div
            onClick={closeNavigationHandler}
            className={`${navLinksContainerClasses.join(" ")}`}
          >
            <nav className={classes.nav}>
              <p className={classes.navMenuTitle}>MENU</p>
              <ul>
                <li>
                  <NavLink
                    onClick={closeNavigationHandler}
                    to="/projects"
                    className={navLinkActive}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeNavigationHandler}
                    to="/tech-skills"
                    className={navLinkActive}
                  >
                    Tech skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeNavigationHandler}
                    to="/about-me"
                    className={navLinkActive}
                  >
                    About me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeNavigationHandler}
                    to="/social-links"
                    className={navLinkActive}
                  >
                    Social links
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeNavigationHandler}
                    to="/contact-me"
                    className={navLinkActive}
                  >
                    Contact me
                  </NavLink>
                </li>
              </ul>
              <p className={classes.copyrightTitles}>
                <span>
                  <CopyrightIcon
                    style={{ fontSize: "13px" }}
                    className={classes.copyrightTitlesIcon}
                  />
                </span>
                2021 Giga Gogashvili. Made with
                <span>
                  <FavoriteIcon
                    style={{ fontSize: "13px" }}
                    className={classes.copyrightTitlesIcon}
                  />
                </span>
                in Georgia, Tbilisi
              </p>
            </nav>
          </div>
        );
      }}
    </Transition>
  );
};

export default NavLinksContainer;
