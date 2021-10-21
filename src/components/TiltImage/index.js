import React from "react";
import { TilArea, ContaineArea } from "./style";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

export default function TiltImage({ borda }) {
  const files = [
    { img: "/assets/decor.jpg", title: "Decor", link: "/products/decor" },
    {
      img: "/assets/furniture.jpg",
      title: "Furniture",
      link: "/products/furniture",
    },
    {
      img: "/assets/lighting.jpg",
      title: "Lighting",
      link: "/products/lighting",
    },
    { img: "/assets/kitchen.jpg", title: "Kitchen", link: "/products/kitchen" },
  ];
  return (
    <ContaineArea>
      <TilArea borda={borda}>
        {files.map((item, k) => (
          <Link to={item.link} key={k}>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
              className="parallax-effect"
              perspective={500}
            >
              <div className="homeImages">
                <img alt={item.title} src={item.img} />
                <span>{item.title}</span>
              </div>
            </Tilt>
          </Link>
        ))}
      </TilArea>
    </ContaineArea>
  );
}
