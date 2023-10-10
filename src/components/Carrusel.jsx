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
      <div style={{ width: "min(1200px,95%)", marginTop: "4rem" }}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          onClickItem={handleClick}
          showStatus={false}
          height={500}
        >
          {ofertas?.map((oferta) => (
            <div key={oferta.id}>
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
