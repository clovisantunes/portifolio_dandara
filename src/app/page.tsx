import Navbar from "./components/Navbar";
import styles from "./styles/page.module.scss";
import MainItem from "./components/Main";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/copy";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbarContaienr}>
        <Navbar />
      </div>
      <MainItem />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
