import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import { capitalizarPrimeraLetra } from "@/utils/utilidades";
import { notFound } from "next/navigation";

import FormularioGuitarra from "@/components/FormularioGuitarra";

const getGuitarra = async (url = "") => {
  const res = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`,
    { next: { revalidate: 0 } }
  );
  const { data } = await res.json();

  return data;
};

export async function generateMetadata({ params }) {
  const guitarraName = capitalizarPrimeraLetra(params.url);
  return {
    title: `Guitarra - ${guitarraName}`,
    descripcion: `La guitarra ${guitarraName} es de las mejores.`,
  };
}

const Producto = async ({ params }) => {
  const { url } = params;
  const guitarra = await getGuitarra(url);
  if (guitarra.length === 0) notFound();
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.url}
        width={600}
        height={400}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <FormularioGuitarra guitarra={guitarra} />
      </div>
    </div>
  );
};

export default Producto;
