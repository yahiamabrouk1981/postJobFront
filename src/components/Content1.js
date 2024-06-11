import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.aiContent}>
        <div className={styles.titleDescriptionButton}>
          <h1 className={styles.title}>
            Free AI cover letter generator powered by GPT
          </h1>
          <p className={styles.description}>
            A free AI cover letter generator powered by GPT is a tool that uses
            artificial intelligence and natural language processing to help job
            seekers create customized and effective cover letters.
          </p>
          <Button
            className={styles.button}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              borderColor: "#161815",
              borderRadius: "12px",
              "&:hover": { borderColor: "#161815" },
              width: 197,
              height: 44,
            }}
          >
            Try For free Now
          </Button>
        </div>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
      </div>
      <div className={styles.aIContent}>
        <div className={styles.illustration}>
          <div className={styles.backgroundSimpleParent}>
            <img
              className={styles.backgroundSimpleIcon}
              alt=""
              src="/background-simple.svg"
            />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img
              className={styles.plantIcon}
              loading="lazy"
              alt=""
              src="/plant.svg"
            />
            <img
              className={styles.interfaceIcon}
              loading="lazy"
              alt=""
              src="/interface@2x.png"
            />
            <img
              className={styles.characterIcon}
              alt=""
              src="/character@2x.png"
            />
          </div>
        </div>
        <div className={styles.aIContentInner}>
          <div className={styles.titleParent}>
            <h1 className={styles.title1}>
              Optimize the keywords in your resume
            </h1>
            <p className={styles.description1}>
              By optimizing keywords in your resume, you can increase your
              chances of getting noticed by recruiters and landing interviews
              for the jobs you want.
            </p>
            <Button
              className={styles.button1}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                borderColor: "#161815",
                borderRadius: "12px",
                "&:hover": { borderColor: "#161815" },
                width: 244,
                height: 44,
              }}
            >
              Optimize your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
