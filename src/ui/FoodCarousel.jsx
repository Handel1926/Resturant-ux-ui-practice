import { useContext } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import { CarouselContext } from "./Hemisphere";

function FoodCarousel() {
  const { images, goRight } = useContext(CarouselContext);

  return (
    <div className="relative  left-[270.66px] top-[864.33px] container">
      <div className="icon">
        {images &&
          images.map((img, index) => (
            <div className="imgBx" style={{ "--i": img.id }} key={index}>
              <img src={img.url} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FoodCarousel;
