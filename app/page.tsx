import Image from "next/image";
import styles from "@/styles/index.module.css"; // Cambio de 'Style' a 'styles'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
        </nav>
      </div>
    </main>
  );
}
