import Image from "next/image";
import styles from "../styles/nosotros.module.css";
export const metadata = {
  title: "Nosotros",
  description: "Nosotros descripcion",
};

const Nosotros = () => {
  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src={"/img/nosotros.jpg"}
            width={1000}
            height={800}
            alt="Imagen sobre Nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
              posuere lectus, vitae gravida nunc. Ut tincidunt eros eu
              ullamcorper tempus. Ut ullamcorper, nunc a tristique rhoncus, elit
              erat vehicula nulla, eu interdum nibh augue sed odio. Quisque
              tortor arcu, vulputate at molestie mollis, pharetra tincidunt
              ligula. Maecenas convallis et lorem et porta. Aliquam ultricies
              nibh at tellus vulputate dapibus. Sed sed mollis leo.
            </p>
            <p>
              Donec ornare ligula at felis scelerisque mollis. Morbi vel tempor
              felis, nec fringilla justo. Fusce nec felis a dolor consectetur
              condimentum eget et odio. Proin fermentum justo dolor, condimentum
              faucibus augue laoreet eu. Nulla velit erat, ultricies non odio
              non, aliquam lacinia dui. Nunc arcu turpis, finibus sit amet nunc
              eget, varius egestas orci.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Nosotros;
