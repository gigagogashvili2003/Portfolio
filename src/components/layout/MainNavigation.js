import { useDispatch, useSelector } from "react-redux";
import { classesSliceActions } from "../../store/classes-slice";
import { Transition } from "react-transition-group/";

import NavLinksContainer from "./NavLinksContainer";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";
// Material UI ICONS
const navMenuTiming = {
  enter: 250,
  exit: 250,
};

const MainNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navAction = useSelector((state) => state.classSlices.isOpen);
  const openBurgerModalHandler = () => {
    dispatch(classesSliceActions.open());
  };

  const burgerClasses = [navAction ? classes.burgerOpen : ""];
  const menuText = navAction ? "CLOSE" : "OPEN";

  const navigateToMainPage = () => {
    navigate("/", { replace: true });
    if (navAction) {
      dispatch(classesSliceActions.close());
    }
  };
  return (
    <>
      <Transition in={navAction} timeout={navMenuTiming}>
        {(state) => {
          const navMenuClasses = [
            state === "entered"
              ? classes.navMenuWhite
              : state === "exiting"
              ? classes.navMenuWhite
              : state === "exited"
              ? classes.navMenuBlack
              : null,
          ];
          const logoMenuClasses = [
            state === "entered"
              ? classes.logoMenuWhite
              : state === "exiting"
              ? classes.logoMenuWhite
              : state === "exited"
              ? classes.logoMenuBlack
              : null,
          ];

          return (
            <div className={classes["main__navigation"]}>
              <div
                className={`${classes.logo} ${logoMenuClasses}`}
                onClick={navigateToMainPage}
              >
                {/* <img src={myLogo} alt="Logo" /> */}
                <div className={classes.logoImage}>G</div>
                <div className={`${classes["logo__name"]}`}>
                  <h2>Giga Gogashvili</h2>
                  <p>FRONTEND DEVELOPER</p>
                </div>
              </div>
              <div
                onClick={openBurgerModalHandler}
                className={`${classes["nav__menu"]} ${navMenuClasses.join("")}`}
              >
                <h3>{menuText}</h3>
                <div className={`${classes["burger__menu"]} ${burgerClasses}`}>
                  <div className={`${classes["burger"]}`}></div>
                </div>
              </div>
            </div>
          );
        }}
      </Transition>
      <NavLinksContainer />
    </>
  );
};

export default MainNavigation;
