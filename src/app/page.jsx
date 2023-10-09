import Guitarra from "@/components/Guitarra";
import Post from "@/components/Post";
import Curso from "@/components/Curso";
import styles from "./styles/grid.module.css";

async function getGuitarrasyPosts() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;
  const [responseGuitarras, responsePosts, responseCurso] = await Promise.all([
    fetch(urlGuitarras, { next: { revalidate: 0 } }),
    fetch(urlPosts, { next: { revalidate: 0 } }),
    fetch(urlCurso, { next: { revalidate: 0 } }),
  ]);
  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([
      responseGuitarras.json(),
      responsePosts.json(),
      responseCurso.json(),
    ]);
  return { guitarras, posts, curso };
}

export default async function Home() {
  const { guitarras, posts, curso } = await getGuitarrasyPosts();
  //console.log(curso);
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
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes}></Post>
          ))}
        </div>
      </section>
    </>
  );
}
