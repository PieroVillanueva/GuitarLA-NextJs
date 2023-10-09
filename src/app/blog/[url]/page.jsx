import Image from "next/image";
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "@/utils/utilidades";

export async function generateMetadata({ params }) {
  const url = params.url;
  const post = await getPost(url);
  const { titulo } = post[0].attributes;
  return {
    title: `Post - ${titulo}`,
  };
}

async function getPost(url) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`,
    {
      next: { revalidate: 0 },
    }
  );
  const { data: post } = await response.json();
  return post;
}

const PostDetalles = async ({ params }) => {
  const { url } = params;
  const post = await getPost(url);
  const { contenido, imagen, titulo, publishedAt } = post[0].attributes;
  return (
    <article className={`${styles.post} ${styles["mt-3"]}`}>
      <Image
        src={imagen.data.attributes.url}
        width={1000}
        height={600}
        alt={`Imagen del post ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
      </div>
    </article>
  );
};

export default PostDetalles;
