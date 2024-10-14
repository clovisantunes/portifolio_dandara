import Navbar from "./components/Navbar";
import styles from "./styles/page.module.scss";
import MainItem from "./components/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbarContaienr}>
        <Navbar />
      </div>
      <MainItem />
    </main>
  );
}
