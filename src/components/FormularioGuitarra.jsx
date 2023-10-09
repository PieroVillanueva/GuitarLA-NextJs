"use client";
import styles from "../app/styles/guitarras.module.css";
import { useEffect, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext } from "react";

const FormularioGuitarra = ({ guitarra }) => {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  const { agregarCarrito, carrito } = useContext(GlobalContext);
  /*
  useEffect(() => {
    console.log(carrito);
  }, [carrito]);
*/
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
    //console.log(guitarraSeleccionada);
    agregarCarrito(guitarraSeleccionada);
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
