import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.headerWrapper, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <a className={styles.postjob}>PostJob</a>
        </div>
        <div className={styles.iconButtons}>
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
              width: 119,
              height: 44,
            }}
          >
            Sign In
          </Button>
          <Button
            className={styles.button1}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              background: "#6de754",
              borderRadius: "12px",
              "&:hover": { background: "#6de754" },
              height: 44,
            }}
          >
            Get Started
          </Button>
        </div>
        <div className={styles.menu}>
          <div className={styles.aiCoverLetter}>AI Cover Letter Generator</div>
          <a className={styles.resumeTemplate}>Resume Template</a>
          <a className={styles.pricing}>Pricing</a>
        </div>
      </header>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
