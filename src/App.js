import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Component imporst
import MainHeader from "./components/layout/MainHeader";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Spinner from "./components/UI/Spinner";
import { Link } from "react-router-dom";
import classes from "./App.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ScrollButton from "./components/UI/ScrollButton";
// Router component/page imports
const TechSkills = React.lazy(() => import("./pages/TechSkills"));
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
const SocialLinks = React.lazy(() => import("./pages/SocialLinks"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectData = React.lazy(() => import("./pages/ProjectData"));

const App = () => {
  return (
    <>
      <div className="main__navigation">
        <MainNavigation />
      </div>
      <div className={classes.mailInbox}>
        <Link to="/contact-me">
          <MailOutlineIcon style={{ color: "white" }} />
        </Link>
      </div>
      <ScrollButton />
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainHeader />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route
              path="/projects/:projectName"
              element={<ProjectData />}
            ></Route>
            <Route path="/tech-skills" element={<TechSkills />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="/social-links" element={<SocialLinks />}></Route>
            <Route path="/contact-me" element={<ContactMe />}></Route>
          </Routes>
        </Suspense>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default App;
