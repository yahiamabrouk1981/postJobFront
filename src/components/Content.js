import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.menuContent}>
        <div className={styles.titleDescriptionButton}>
          <div className={styles.titleDescriptionButton1}>
            <div className={styles.titleDescription}>
              <h1 className={styles.slogan}>What’s next</h1>
              <p className={styles.description}>
                Submit better job app — 10x faster. AI cover letter generator,
                resume keyword checker, outreach message writer, and more.
                Powered by GPT
              </p>
            </div>
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
                width: 161,
                height: 44,
              }}
            >
              Try For Free
            </Button>
          </div>
          <div className={styles.expandedMenu}>
            <div className={styles.menuItem}>
              <div className={styles.titleMenu}>Platform</div>
              <div className={styles.menuRow}>
                <div className={styles.description1}>Plans and Prices</div>
                <div className={styles.description2}>AI Create Letters</div>
                <div className={styles.description3}>AI Resume Checker</div>
                <div className={styles.description4}>Resume Templates</div>
                <div className={styles.description5}>Sell Templates</div>
                <div className={styles.description6}>Blog</div>
              </div>
            </div>
            <div className={styles.menuItem1}>
              <div className={styles.titleMenu1}>Features</div>
              <div className={styles.menuRow1}>
                <div className={styles.description7}>
                  AI Cover Letter Creator
                </div>
                <div className={styles.description8}>
                  Resume Keywords Optimizer
                </div>
                <div className={styles.description9}>ATS Resume Checker</div>
              </div>
            </div>
            <div className={styles.menuItem2}>
              <div className={styles.titleMenu2}>Resources</div>
              <div className={styles.menuRow2}>
                <div className={styles.description10}>
                  4 AI Tools for Applying a Job
                </div>
                <div className={styles.description11}>
                  How to optimize Resume keywords
                </div>
                <div className={styles.description12}>
                  Why you should use Chat GPT for create Resume
                </div>
                <p className={styles.description13}>
                  What should you include in a Cover Letter
                </p>
              </div>
            </div>
            <div className={styles.expandedMenuItem}>
              <div className={styles.menuItem3}>
                <div className={styles.titleMenu3}>Support</div>
                <div className={styles.menuRow3}>
                  <div className={styles.description14}>support@gmail.com</div>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <img
                  className={styles.instagramIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
                <img
                  className={styles.facebookIcon}
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className={styles.linkedinIcon}
                  loading="lazy"
                  alt=""
                  src="/linkedin.svg"
                />
                <img
                  className={styles.telegramIcon}
                  loading="lazy"
                  alt=""
                  src="/telegram@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.div}>©</div>
          <div className={styles.description15}>Copywriting</div>
          <div className={styles.description16}>|</div>
          <div className={styles.description17}>All Rights Reserved</div>
          <div className={styles.description18}>|</div>
          <div className={styles.description19}>Terms of Use</div>
          <div className={styles.description20}>|</div>
          <a className={styles.description21}>Privacy</a>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
