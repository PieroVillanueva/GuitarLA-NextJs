import Guitarra from "@/components/Guitarra";
import styles from "../styles/grid.module.css";

async function getGuitarras() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`,
    { next: { revalidate: 0 } }
  );
  const { data: guitarras } = await response.json();
  return guitarras;
}

export const metadata = {
  title: "Tienda Virtual",
  description:
    "Tienda Virtual, venta de guitarras, instrumentos musicales y accesorios",
};

const Tienda = async () => {
  const guitarras = await getGuitarras();
  //console.log(guitarras);
  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Tienda;
