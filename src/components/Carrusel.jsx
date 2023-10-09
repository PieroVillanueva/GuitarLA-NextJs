"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { redirect } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrusel = ({ ofertas }) => {
  const handleClick = (e) => {
    console.log(ofertas[e].attributes.pagina);
    redirect(ofertas[e].attributes.pagina);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(1200px,95%)", marginTop: "4rem" }}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          onClickItem={handleClick}
          showStatus={false}
        >
          {ofertas.map((oferta) => (
            <div key={oferta.id}>
              <img src={oferta.attributes.imagen.data.attributes.url} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;
