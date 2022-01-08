import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import classes from "./ScrollButton.module.css";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollButtonClasses = visible ? classes.visibleButton : "";
  return (
    <div
      onClick={scrollToTop}
      className={`${classes.scrollToTopButton} ${scrollButtonClasses}`}
    >
      <ArrowUpwardIcon />
    </div>
  );
};

export default ScrollButton;
