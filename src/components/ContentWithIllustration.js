import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ContentWithIllustration.module.css";

const ContentWithIllustration = ({ className = "" }) => {
  return (
    <section className={[styles.contentWithIllustration, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.titileDescriptionButton}>
          <h1 className={styles.title}>Free resume design templates</h1>
          <p className={styles.description}>
            By following these design tips, you can create a professional and
            effective resume that will help you stand out to recruiters and
            hiring managers.
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
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration-1.svg"
        />
      </div>
    </section>
  );
};

ContentWithIllustration.propTypes = {
  className: PropTypes.string,
};

export default ContentWithIllustration;
