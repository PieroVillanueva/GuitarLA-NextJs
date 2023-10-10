import Guitarra from "@/components/Guitarra";
import Post from "@/components/Post";
import Curso from "@/components/Curso";
import styles from "./styles/grid.module.css";
import Carrusel from "@/components/Carrusel";

async function getGuitarrasyPosts() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;
  const urlOferta = `${process.env.API_URL}/ofertas?populate=imagen`;
  const [responseGuitarras, responsePosts, responseCurso, responseOferta] =
    await Promise.all([
      fetch(urlGuitarras, { next: { revalidate: 0 } }),
      fetch(urlPosts, { next: { revalidate: 0 } }),
      fetch(urlCurso, { next: { revalidate: 0 } }),
      fetch(urlOferta, { next: { revalidate: 0 } }),
    ]);
  const [
    { data: guitarras },
    { data: posts },
    { data: curso },
    { data: ofertas },
  ] = await Promise.all([
    responseGuitarras.json(),
    responsePosts.json(),
    responseCurso.json(),
    responseOferta.json(),
  ]);
  return { guitarras, posts, curso, ofertas };
}

export default async function Home() {
  const { guitarras, posts, curso, ofertas } = await getGuitarrasyPosts();

  //console.log(ofertas);

  return (
    <>
      <Carrusel ofertas={ofertas} />
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes}></Post>
          ))}
        </div>
      </section>
    </>
  );
}
