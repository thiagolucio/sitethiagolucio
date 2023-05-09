import styles from "./page.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";
import LinkedinWidget from "./components/linkedinWidget/linkedinWidget";


export default function Home() {
  return (
    <div className="container-horizontal">
      <div className={styles.header}>
        <Social />
      </div>
      <aside className={styles.sidebar}>
        <Logo />
        <LinkedinWidget />
      </aside>
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
