import styles from "./page.module.css";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";


export default function Home() {
  return (
    <div className="container-horizontal">
      <header className={styles.header}>
        <Social />
      </header>
      <aside className={styles.sidebar}>
        <Logo />
      </aside>
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
