import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.contentColumnsWrapper}>
          <div className={styles.contentColumns}>
            <div className={styles.contentColumn}>
              <div className={styles.titleColumn}>
                <h1 className={styles.title}>Submit Better job applications</h1>
              </div>
              <div className={styles.slogan}>10x faster</div>
            </div>
            <div className={styles.descriptionColumn}>
              <p className={styles.description}>
                AI cover letter generator, resume keyword checker, outreach
                message writer, and more. Powered by GPT
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <div className={styles.imageContent}>
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
            <div className={styles.overlay} />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
