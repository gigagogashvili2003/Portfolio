import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Component imporst
import MainHeader from "./components/layout/MainHeader";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Spinner from "./components/UI/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Router component/page imports
const TechSkills = React.lazy(() => import("./pages/TechSkills"));
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
const SocialLinks = React.lazy(() => import("./pages/SocialLinks"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));
const Projects = React.lazy(() => import("./pages/Projects"));

const App = () => {
  return (
    <>
      <div className="main__navigation">
        <MainNavigation />
      </div>
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/*" element={<MainHeader />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
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
