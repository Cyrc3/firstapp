import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="bg-green-800 text-white min-h-screen flex flex-col justify-center items-center">
      <Navigation>
        {/* Contenido de tu componente Navigation */}
      </Navigation>
      <div>
        <nav>
          <a href="/home">Home</a>
          <a href="/acerca">Acerca</a>
        </nav>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">My name is Emilio</h1>
          <h2>UwU</h2>
          {/* Agregar imagen centrada */}
          <div className="flex flex-col items-center">
            <img src="/civik.png" alt="SleeperCivic" className="w-64 h-64 mt-4" />
            <p className="mt-2">SleeperCivic</p>
          </div>
        </div>
      </div>
    </main>
  );
}
