import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main>
      <Navigation>

      </Navigation>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="/home">Home</a>
          <a href="/acerca">Acerca</a>
        </nav>
        <div className={styles.center}>
          <h1 className="text-4xl font-bold mb-8">My name is Emilio</h1>
          <h2>UwU</h2>
        </div>
      </div>
    </main>
  );
}