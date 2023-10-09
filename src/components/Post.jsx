import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/blog.module.css";

import { formatearFecha } from "@/utils/utilidades";

const Post = ({ post }) => {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen del post ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`} className={styles.enlace}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
