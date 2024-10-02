import { createContext, useCallback, useEffect, useState } from "react";
import FoodCarousel from "./FoodCarousel";
import { HiArrowCircleDown } from "react-icons/hi";
import ArrowBtn from "./ArrowBtn";

export const CarouselContext = createContext();

function Hemisphere({ images }) {
  const [imageList, setImageList] = useState(images);
  const [anim, setAnim] = useState(false);
  const displayImage = imageList.find((img) => img.id == 3);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (anim) {
        setAnim(false);
      }
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [anim]);

  const goRight = () => {
    const newList = imageList.map((img) => {
      const id = img.id === 9 ? 0 : img.id + 1;
      return { ...img, id };
    });
    setAnim(true);
    setImageList((prevList) => newList);
  };
  const goLeft = () => {
    const newList = imageList.map((img) => {
      const id = img.id === 0 ? 9 : img.id - 1;
      return { ...img, id };
    });
    setAnim(true);
    setImageList((prevList) => newList);
  };
  console.log(displayImage.bgColour);
  return (
    <CarouselContext.Provider value={{ images: imageList, goRight, goLeft }}>
      <div
        className={`relative z-30  top-[-75%] left-[20%] w-full h-[100vw] rounded-full ${displayImage.bgColour} overflow-hidden shadow-inner delay-300`}
      >
        <FoodCarousel />
      </div>
      <div className="absolute bottom-[10%] w-11/12 h-fit grid grid-cols-2 justify-center items-center">
        <button className="w-[218px] h-[53px] bg-orange-400 px-4 py-2 text-nowrap rounded-full ">
          Quench Now
        </button>
        <div className="w-full p-2 pr-[7%] flex justify-between items-center">
          <ArrowBtn act={goLeft} />
          <ArrowBtn act={goRight} />
        </div>
      </div>

      <div className="me absolute  flex items-center justify-center bottom-[25%] right-[25%] z-50 h-[120px] w-[120px] rounded-full overflow-hidden ">
        <img
          src={displayImage.url}
          alt=""
          className={`relative bottom-6 left-6 shadow-md shadow-black w-[80px] h-[80px] object-cover ${
            anim && "move"
          }`}
        />
      </div>
    </CarouselContext.Provider>
  );
}

export default Hemisphere;
