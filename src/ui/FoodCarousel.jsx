import { useContext } from "react";

import "react-fancy-circular-carousel/FancyCarousel.css";
import { CarouselContext } from "./Hemisphere";

function FoodCarousel() {
  const { images, focusImage } = useContext(CarouselContext);

  return (
    <div className=" absolute  left-[29%] top-[80%] container">
      <div className="icon">
        {images &&
          images
            .sort((a, b) => a - b)
            .map((img, index) => (
              <div
                className={`imgBx ${img.id === 3 && " border border-red-500"} ${
                  img.id === 0 || (img.id === 9 && "hidden")
                } `}
                style={{ "--i": img.id }}
                key={index}
              >
                <img src={img.url} alt="" />
              </div>
            ))}
      </div>
    </div>
  );
}

export default FoodCarousel;
