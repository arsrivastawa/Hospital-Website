import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouse = () => {
  return (
    <div className="w-full flex justify-center items-center h-fit">
      <div className="w-2/3">
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <div>
            <img src="../src/assets/homi.jpg" alt="" />
          </div>
          <div>
            <img src="../src/assets/slider1.jpg" />
          </div>
          <div>
            <img src="../src/assets/tata.jpg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carouse;
