import Navbar from "./components/Navbar";
import styles from "./styles/page.module.scss";
import MainItem from "./components/Main";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/copy";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <header className={styles.navbarContainer}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <MainItem id={'/'} />
        <About id={'sobre'} />
        <Projects id={'projetos'} />
        <Contact id="contato"/>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        style={{ zIndex: 9999 }}
      />
    </>
  );
}
