import List from "../components/lists/List";
import TechSkillsList from "../components/lists/TechSkillsList";
import classes from "./TechSkills.module.css";

import { DUMMY_TECH_SKILLS } from "../config/config";

const TechSkills = () => {
  const techSkillsContent = DUMMY_TECH_SKILLS.map((techSkill) => (
    <TechSkillsList
      className={classes.listItem}
      key={techSkill.id}
      inview={classes.inView}
      name={techSkill.name}
      imageUrl={techSkill.imageUrl}
      experience={techSkill.experience}
      level={techSkill.level}
      backgroundColor={techSkill.backgroundColor}
    />
  ));

  return (
    <div className={classes["techSkills__container"]}>
      <div className={classes["techSkills__section1"]}>
        <h1>MY PERSONAL TECH SKILLS</h1>
      </div>
      <div className={classes["techSkills__section2"]}>
        <List>{techSkillsContent}</List>
      </div>
    </div>
  );
};

export default TechSkills;
