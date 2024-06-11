import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./AboutSection.module.css";

const AboutSection = ({ className = "" }) => {
  return (
    <section className={[styles.aboutSection2, className].join(" ")}>
      <div className={styles.titleDescriptionButton}>
        <h1 className={styles.title}>Spend less time looking for work</h1>
        <p className={styles.description}>
          We'll help you through the hardest part of your job search.
        </p>
        <Button
          className={styles.button}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            borderColor: "#6de754",
            borderRadius: "12px",
            "&:hover": { borderColor: "#6de754" },
            width: 212,
            height: 44,
          }}
        >
          Create an Account
        </Button>
      </div>
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <img
            className={styles.fileIcon}
            loading="lazy"
            alt=""
            src="/file.svg"
          />
          <b className={styles.titile}>Cover Letter</b>
          <p className={styles.description1}>
            A cover letter is a document that accompanies a job application and
            is written to introduce the applicant to the employer.
          </p>
        </div>
        <div className={styles.infoCard1}>
          <img
            className={styles.mailIcon}
            loading="lazy"
            alt=""
            src="/mail.svg"
          />
          <b className={styles.title1}>Resignation Letters</b>
          <p className={styles.description2}>
            A resignation letter is a formal document that an employee writes to
            inform their employer of their decision to leave the company.
          </p>
        </div>
        <div className={styles.infoCard2}>
          <img
            className={styles.gitPullRequestIcon}
            loading="lazy"
            alt=""
            src="/gitpullrequest.svg"
          />
          <b className={styles.title2}>Connection Request</b>
          <p className={styles.description3}>
            A connection request is a message sent on a social networking site,
            such as LinkedIn, requesting to connect with another user.
          </p>
        </div>
        <div className={styles.infoCard3}>
          <img
            className={styles.sendIcon}
            loading="lazy"
            alt=""
            src="/send.svg"
          />
          <b className={styles.titile1}>Outreach Emails</b>
          <p className={styles.description4}>
            Outreach emails are messages sent by individuals or businesses to
            introduce themselves, establish a connection, or propose a
            collaboration.
          </p>
        </div>
        <div className={styles.infoCard4}>
          <img
            className={styles.gridIcon}
            loading="lazy"
            alt=""
            src="/grid.svg"
          />
          <b className={styles.title3}>Resume Optimization</b>
          <p className={styles.description5}>
            Smart Personalization refers to the use of data and technology to
            deliver tailored experiences and content to individual customers or
            users.
          </p>
        </div>
        <div className={styles.infoCard5}>
          <img
            className={styles.codesandboxIcon}
            loading="lazy"
            alt=""
            src="/codesandbox.svg"
          />
          <b className={styles.title4}>Resume Design</b>
          <p className={styles.description6}>
            A resume scanner is a software application that uses optical
            character recognition (OCR) technology to extract and analyze data
            from resumes.
          </p>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  className: PropTypes.string,
};

export default AboutSection;
