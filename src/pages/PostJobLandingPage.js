import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import AboutSection from "../components/AboutSection";
import Content1 from "../components/Content1";
import ContentWithIllustration from "../components/ContentWithIllustration";
import Content from "../components/Content";
import styles from "./PostJobLandingPage.module.css";

const PostJobLandingPage = () => {
  return (
    <div className={styles.postjobLandingPage}>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <AboutSection />
      <Content1 />
      <ContentWithIllustration />
      <Content />
    </div>
  );
};

export default PostJobLandingPage;
