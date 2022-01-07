import classes from "./SocialLinks.module.css";
import { DUMMY_SOCIALS } from "../config/config";

const SocialLinks = () => {
  const socialLinksContent = DUMMY_SOCIALS.map((social) => (
    <a
      key={social.id}
      href={social.link}
      className={classes.socialLinkItem}
      target="_blank"
    >
      <h2>{social.name}</h2>
      <p>{social.icon}</p>

      <img src={social.imageUrl} alt={social.name} />
    </a>
  ));

  return (
    <div className={classes.socialLinksContainer}>
      <div className={classes.socialLinksTitles}>
        <p>SOCIAL LINKS</p>
        <h1>Contact me through social media accounts</h1>
      </div>
      {socialLinksContent}
    </div>
  );
};

export default SocialLinks;
