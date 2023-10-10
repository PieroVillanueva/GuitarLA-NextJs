"use client";
import styles from "../app/styles/guitarras.module.css";
import { useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const FormularioGuitarra = ({ guitarra }) => {
  const route = useRouter();
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  const { agregarCarrito, carrito } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(cantidad);
    if (cantidad < 1) {
      alert("Debe seleccionar una cantidad");
      return;
    }
    //Construir Objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(guitarraSeleccionada);

    const alertConEstilos = Swal.mixin({
      customClass: {
        title: `styles.titulo`,
        confirmButton: styles.btnIrCarrito,
        cancelButton: styles.btnSeguirComprando,
      },
      buttonsStyling: false,
    });
    alertConEstilos
      .fire({
        title: "<strong>Agregado al Carrito</strong>",
        icon: "success",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: `<div>Ir a carrito</div> `,
        cancelButtonText: "<div>Seguir comprando</div>",
        width: 350,
      })
      .then((result) => {
        if (result.isDenied) {
          route.push("/tienda");
        } else if (result.isConfirmed) {
          route.push("/carrito");
        }
      });
  };
  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <label htmlFor="cantidad">Cantidad</label>
      <select id="cantidad" onChange={(e) => setCantidad(+e.target.value)}>
        <option value="0">--Seleccione--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value={"Agregar al carrito"} />
    </form>
  );
};

export default FormularioGuitarra;
