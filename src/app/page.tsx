import styles from "./page.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";
import LinkedinWidget from "./components/linkedinWidget/linkedinWidget";
import Avatar from "./components/avatar/avatar";
import ButtonsDownload from "./components/button/buttonsDownload";
import ExperienceSession from "./components/experienceSession/experienceSession";
import EducationSession from "./components/educationSession/educationSession";

import './page.module.css';

export default function Home() {
  return (
    <div className="container-full">
      <div className={styles.header}>
        <Social />
      </div>
      <div className="container-horizontal">
        <aside className={styles.sidebar}>
          <Avatar />
          <Logo />
          <LinkedinWidget />
        </aside>
        <main className={styles.main}>
          <div className="row">
            <ButtonsDownload />
          </div>
          <div className="row">
            <ExperienceSession />
          </div>      
          <div className="row">
            <EducationSession />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
