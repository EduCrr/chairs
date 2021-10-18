import React from "react";
import { TilArea, ContaineArea } from "./style";
import Tilt from "react-parallax-tilt";

export default function TiltImage({ borda }) {
  const files = [
    { img: "/assets/decor.jpg", title: "Decor" },
    { img: "/assets/furniture.jpg", title: "Furniture" },
    { img: "/assets/lighting.jpg", title: "Lighting" },
    { img: "/assets/kitchen.jpg", title: "Kitchen" },
  ];
  return (
    <ContaineArea>
      <TilArea borda={borda}>
        {files.map((item) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="20px"
            className="parallax-effect"
            perspective={500}
          >
            <div key={item.title} className="homeImages">
              <img alt={item.title} src={item.img} />
              <span>{item.title}</span>
            </div>
          </Tilt>
        ))}
      </TilArea>
    </ContaineArea>
  );
}
