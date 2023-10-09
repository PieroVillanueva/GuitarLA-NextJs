"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext } from "react";

import styles from "../app/styles/header.module.css";

const Header = () => {
  const pathActual = usePathname();
  const { carrito } = useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image
            src="/img/logo.svg"
            alt="Imagen Logotipo"
            width={300}
            height={40}
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link href={"/"} className={pathActual === "/" ? styles.active : ""}>
            Inicio
          </Link>
          <Link
            href={"/nosotros"}
            className={pathActual === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href={"/blog"}
            className={pathActual === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href={"/tienda"}
            className={pathActual === "/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>
          <Link href={"/carrito"} className={styles.cart}>
            <Image
              width={30}
              height={25}
              src={"/img/carrito.png"}
              alt="Imagen Carrito"
            />
            <p>{carrito.length}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
