import Image from "next/image";
import 'tailwindcss/tailwind.css';

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
      <body className={styles.body}>
        <h2>Hi, my name is Emilio uwu PART1</h2>
      </body>
    </main>
  );
}
function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4">
      Este es un componente con estilos de Tailwind CSS.
    </div>
  )
}

