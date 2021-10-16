import React from "react";
import { TilArea } from "./style";
import Tilt from "react-parallax-tilt";
export default function TiltImage() {
  return (
    <TilArea>
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
          <img src="/assets/decor.jpg" />
          <span>Decor</span>
        </div>
      </Tilt>
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
          <img src="/assets/furniture.jpg" />
          <span>Furniture</span>
        </div>
      </Tilt>
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
          <img src="/assets/lighting.jpg" />
          <span>Lighting</span>
        </div>
      </Tilt>
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
          <img src="/assets/kitchen.jpg" />
          <span>Kitchen</span>
        </div>
      </Tilt>
    </TilArea>
  );
}
