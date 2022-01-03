import { Routes, Route } from "react-router-dom";

// Component imporst
import MainHeader from "./components/layout/MainHeader";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";

// Router component/page imports
import TechSkills from "./pages/TechSkills";
import AboutMe from "./pages/AboutMe";
import SocialLinks from "./pages/SocialLinks";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="main__navigation">
        <MainNavigation />
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/*" element={<MainHeader />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/tech-skills" element={<TechSkills />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/social-links" element={<SocialLinks />}></Route>
          <Route path="/contact-me" element={<ContactMe />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
};

export default App;
