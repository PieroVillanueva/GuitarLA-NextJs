import Post from "@/components/Post";
import styles from "../styles/grid.module.css";

async function getPosts() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`, {
    next: { revalidate: 0 },
  });
  const { data: posts } = await response.json();
  return posts;
}

export const metadata = {
  title: "Blog",
  description: "Blog de música, venta de guitarras, GuitarLA ",
};

const Blog = async () => {
  const posts = await getPosts();
  //console.log(posts);
  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes}></Post>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
