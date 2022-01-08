import { useRef, useState } from "react";
import useInput from "../hooks/use-input";
import classes from "./ContactMe.module.css";

import Spinner from "../components/UI/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessageData } from "../store/message-actions";
import Notification from "../components/UI/Notification";
import { useInView } from "react-intersection-observer";
import ReCAPTCHA from "react-google-recaptcha";
let recaptchaBoolean = false;
const ContactMe = () => {
  const recaptchaKey = "6LcHNfkdAAAAABIFv8kAqBBYV1Ayt3inE9OsRnMe";
  const [recaptcha, setRecaptcha] = useState(false);
  let recaptchaRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const dispatch = useDispatch();
  const messageActions = useSelector((state) => state.fetchSlice.notification);

  const [formIsValid, setFormIsValid] = useState(true);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 2);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  const {
    value: enteredService,
    isValid: enteredServiceIsValid,
    hasError: serviceInputHasError,
    valueChangeHandler: serviceChangeHandler,
    inputBlurHandler: serviceBlurHandler,
    reset: serviceReset,
  } = useInput((value) => value !== "");

  const {
    value: enteredBudget,
    isValid: enteredBudgetIsValid,
    hasError: budgetInputHasError,
    valueChangeHandler: budgetChangeHandler,
    inputBlurHandler: budgetBlurHandler,
    reset: budgetReset,
  } = useInput((value) => value !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.length > 15);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!recaptcha) {
      recaptchaBoolean = true;
    }
    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredServiceIsValid ||
      !enteredBudgetIsValid ||
      !enteredMessageIsValid ||
      !recaptcha
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);

    dispatch(
      fetchMessageData({
        name: enteredName,
        email: enteredEmail,
        service: enteredService,
        budget: enteredBudget,
        message: enteredMessage,
      })
    );

    nameReset();
    emailReset();
    serviceReset();
    budgetReset();
    messageReset();
    if (!recaptcha) return;
    recaptchaRef.reset();
    setRecaptcha(false);
    recaptchaBoolean = false;
  };

  const nameInputClasses = [
    classes.nameContainer,
    nameInputHasError ? classes.invalid : "",
  ];
  const emailInputClasses = [
    classes.emailContainer,
    emailInputHasError ? classes.invalid : "",
  ];
  const serviceClasses = [
    classes.serviceContainer,
    serviceInputHasError ? classes.invalid : "",
  ];

  const budgetClasses = [
    classes.budgetContainer,
    budgetInputHasError ? classes.invalid : "",
  ];

  const messageClasses = [
    classes.messageContainer,
    messageInputHasError ? classes.invalid : "",
  ];

  const buttonClasses = [
    classes.buttonContainer,
    !formIsValid && !recaptcha && recaptchaBoolean ? classes.invalid : "",
  ];

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const submitRecaptchaHandler = (token) => {
    setRecaptchaToken(token);
    setRecaptcha(true);
  };

  return (
    <div className={`${classes.contactMeContainer}`}>
      <div className={classes.contactTopContainer}>
        <div className={classes.contactTitles}>
          <p>CONTACT</p>
          <h1>
            Get in touch — let’s <br />
            work together.
          </h1>
        </div>
        <div className={classes.contactImage}></div>
      </div>
      <div
        className={`${classes.contactFormContainer} ${
          inView && classes.inView
        } `}
      >
        <h2>Contact</h2>
        <form onSubmit={submitHandler} ref={ref} className={`${classes.form}`}>
          <div className={nameInputClasses.join(" ")}>
            <label htmlFor="formName">Your Name</label>
            <input
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              type="text"
              id="formName"
              placeholder="What's Your Name?"
              required
            />
            {nameInputHasError && (
              <p className={classes["error-text"]}>
                Name must be 2 or more characters.
              </p>
            )}
          </div>
          <div className={emailInputClasses.join(" ")}>
            <label htmlFor="formEmail">Your Email</label>
            <input
              value={enteredEmail}
              type="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              id="formEmail"
              placeholder="What's Your Email?"
              required
            />
            {emailInputHasError && (
              <p className={classes["error-text"]}>
                Write valid email address!
              </p>
            )}
          </div>
          <div className={serviceClasses.join(" ")}>
            <label htmlFor="formServices">Service</label>
            <select
              value={enteredService}
              onBlur={serviceBlurHandler}
              onChange={serviceChangeHandler}
              id="formServices"
              required
            >
              <option selectet="What are you interested in ?" hidden>
                What are you interested in?
              </option>
              <option value="Need help with a one-off project">
                Need help with a one-off project
              </option>
              <option value="Looking for a long term partnership">
                Looking for a long term partnership
              </option>
              <option value="Want to hire me full-time">
                Want to hire me full-time
              </option>
              <option value="Just wanted to say hi!">
                Just wanted to say hi!
              </option>
            </select>
            {serviceInputHasError && (
              <p className={classes["error-text"]}>
                You must select at least one value.
              </p>
            )}
          </div>
          <div className={budgetClasses.join(" ")}>
            <label htmlFor="formBudget">Budget</label>
            <select
              onChange={budgetChangeHandler}
              onBlur={budgetBlurHandler}
              value={enteredBudget}
              id="formBudget"
              required
            >
              <option selectet="What's your budget?" hidden>
                What's your budget?
              </option>
              <option value="$250 - $500">$250 - $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 or more">$1000 or more</option>
            </select>
            {budgetInputHasError && (
              <p className={classes["error-text"]}>
                You must select at least one value.
              </p>
            )}
          </div>
          <div className={messageClasses.join(" ")}>
            <label htmlFor="formMessage">Message</label>
            <textarea
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              id="formMessage"
              required
              rows={1}
              style={{ resize: "none", fontFamily: "'Helvetica', sans-serif" }}
              placeholder="What's your message?"
            ></textarea>
            {messageInputHasError && (
              <p className={classes["error-text"]}>
                Message length must be 15 or more!
              </p>
            )}
          </div>
          <div
            className={`${classes.recaptchaContainer} ${
              !recaptcha && recaptchaBoolean ? classes.invalidRecaptcha : ""
            }`}
          >
            <ReCAPTCHA
              ref={(e) => (recaptchaRef = e)}
              sitekey={recaptchaKey}
              onChange={submitRecaptchaHandler}
            ></ReCAPTCHA>
            {!recaptcha && recaptchaBoolean && (
              <p className={classes["error-text"]}>
                Please verify that you are not a robot.
              </p>
            )}
          </div>

          <div className={buttonClasses.join(" ")}>
            <button>Send Message</button>
            {!formIsValid && !recaptcha && recaptchaBoolean && (
              <p className={classes["error-text"]}>
                Make sure you got all the fields right!
              </p>
            )}
          </div>
        </form>
        {messageActions ? (
          messageActions.status === "pending" ? (
            <Spinner />
          ) : null
        ) : null}
        {messageActions ? (
          messageActions.status === "success" ? (
            <Notification notificationTitle="Messege sent succesfully ;)" />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default ContactMe;
