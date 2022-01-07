import classes from "./AboutMe.module.css";
import myImage2 from "../assets/my__image2.jpg";
import myFlip from "../assets/myflip.jpg";
import { DUMMY_HOBBIES } from "../config/config";
import List from "../components/lists/List";

const AboutMe = () => {
  const hobbiesContent = DUMMY_HOBBIES.map((hobbie) => (
    <List key={hobbie.id}>
      <div
        style={{ backgroundImage: `url(${hobbie.imageUrl})` }}
        className={classes["hobbie__photo"]}
      >
        <div>
          <h2>{hobbie.name}</h2>
        </div>
      </div>
    </List>
  ));

  return (
    <div className={classes["about__me--container"]}>
      <section className={classes["aboutMe__section1"]}>
        <img src={myImage2} />
        <div className={classes["aboutMe__titles--container"]}>
          <h1>About me</h1>
          <p>
            Hello, I'm Giga Gogashvili, 18 years old from Georgia.I'm studying
            IT (Information Technology) at Business and Technology Univerisy.
            I'm a very motivated person who wants to conquer the peaks in the
            field of technology. It’s been 1 year since I started studying
            programming and it feels very cool. I'm a self-taught programmer
            like the most other programmers. In the future I want to create my
            own technology company that will achieve great success. At the
            moment I have not any working experience on real projects, So I will
            be happy if you decide to work with me. 🙂
          </p>
          <img src={myFlip} alt="My Flip Photo" />
        </div>
      </section>
      <section className={classes["aboutMe__section2"]}>
        <h2>MY HOBBIES</h2>
        <div className={classes["my__hobbies"]}>
          <div className={classes.hobbies}>{hobbiesContent}</div>
        </div>
      </section>
      <section className={classes["aboutMe__section3"]}></section>
    </div>
  );
};

export default AboutMe;
