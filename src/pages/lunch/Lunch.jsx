import DescriptionBox from "../../ui/DescriptionBox";
import Hemisphere from "../../ui/Hemisphere";

import images from "../../lunchList";

function Lunch() {
  return (
    <div className=" flex-grow">
      <Hemisphere images={images} color={"bg-pink-300"} />
      <DescriptionBox />
    </div>
  );
}

export default Lunch;
