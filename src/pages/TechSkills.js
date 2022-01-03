import List from "../components/lists/List";
import ListItem from "../components/lists/ListItem";
import classes from "./TechSkills.module.css";

import { DUMMY_TECH_SKILLS } from "../config/config";

const TechSkills = () => {
  const techSkillsContent = DUMMY_TECH_SKILLS.map((techSkill) => (
    <ListItem
      className={classes.listItem}
      key={techSkill.id}
      name={techSkill.name}
      imageUrl={techSkill.imageUrl}
      level={techSkill.level}
      paragraph={techSkill.paragraph}
      experience={techSkill.experience}
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
