"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Carrusel = ({ ofertas }) => {
  const route = useRouter();
  const handleClick = (e) => {
    route.push(ofertas[e].attributes.pagina);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="contenedor" style={{ marginTop: "5rem" }}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          onClickItem={handleClick}
          showStatus={false}
        >
          {ofertas?.map((oferta) => (
            <div key={oferta.id} style={{ cursor: "pointer" }}>
              <Image
                src={oferta.attributes.imagen.data.attributes.url}
                width={1920}
                height={1080}
                alt={oferta.attributes.pagina}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;
