import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={[styles.sloganDescriptionInputWrapper, className].join(" ")}
    >
      <div className={styles.sloganDescriptionInput}>
        <div className={styles.sloganDescriptionInput1}>
          <h1 className={styles.slogan}>
            <span>
              <span>{`Win your dream job `}</span>
              <span className={styles.withPostjob}>with PostJob</span>
            </span>
          </h1>
          <p className={styles.description}>
            Submit better job app — 10x faster. AI cover letter generator,
            resume keyword checker, outreach message writer, and more. Powered
            by GPT
          </p>

          <div className={styles.content}>
            <div className={styles.supportingText}>
              <form className={styles.emailForm}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitButton}>
                  Start For Free
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <img
              className={styles.fileIcon}
              loading="lazy"
              alt=""
              src="/file.svg"
            />
            <div className={styles.titile}>AI Cover Letter Generator</div>
            <p className={styles.description1}>
              The AI Cover Letter Generator is a tool that uses artificial
              intelligence algorithms to create personalized cover letters for
              job applicants.
            </p>
          </div>
          <div className={styles.infoCard1}>
            <img
              className={styles.radioIcon}
              loading="lazy"
              alt=""
              src="/radio.svg"
            />
            <b className={styles.title}>Smart Personalization</b>
            <p className={styles.description2}>
              Smart Personalization refers to the use of data and technology to
              deliver tailored experiences and content to individual customers
              or users.
            </p>
          </div>
          <div className={styles.infoCard2}>
            <img
              className={styles.maximizeIcon}
              loading="lazy"
              alt=""
              src="/maximize.svg"
            />
            <b className={styles.title1}>Resume Scanner</b>
            <p className={styles.description3}>
              A resume scanner is a software application that uses optical
              character recognition (OCR) technology to extract and analyze data
              from resumes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
