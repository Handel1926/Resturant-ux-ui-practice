import { createContext, useCallback, useState } from "react";
import FoodCarousel from "./FoodCarousel";
import { HiArrowCircleDown } from "react-icons/hi";

export const CarouselContext = createContext();

function Hemisphere({ images }) {
  const [focusImage, setFocusImage] = useState(4);
  const [imageList, setImageList] = useState(images);

  const goRight = () => {
    const newList = imageList.map((img) => {
      const id = img.id === 1 ? 9 : img.id + 1;
      return { ...img, id };
    });
    setFocusImage((preV) => (preV === 8 ? 0 : preV + 1));
    setImageList((prevList) => newList);
  };
  const goLeft = () => {
    const newList = imageList.map((img) => {
      const id = img.id === 1 ? 9 : img.id - 1;
      return { ...img, id };
    });
    setFocusImage((preV) => (preV === 0 ? 8 : preV - 1));
    setImageList((prevList) => newList);
  };
  console.log(focusImage);
  return (
    <CarouselContext.Provider value={{ images: imageList, goRight, goLeft }}>
      <div className="relative z-30  top-[-737.08px] left-[400px] w-[1176px] h-[1176px] rounded-full bg-pink-300 overflow-hidden">
        <FoodCarousel />
      </div>
      <div className="absolute bottom-7 w-full p-2 flex justify-around items-center">
        <button onClick={goRight} className="text-5xl">
          <HiArrowCircleDown />
        </button>
        <button onClick={goLeft} className="text-5xl ">
          <HiArrowCircleDown />
        </button>
      </div>
      <div className="absolute bottom-[20px] right-[400px] z-50 h-[150px] w-[150px] rounded-full">
        <img
          src={imageList[focusImage].url}
          alt=""
          className="h-full w-full bg-cover"
        />
      </div>
    </CarouselContext.Provider>
  );
}

export default Hemisphere;
