import DescriptionBox from "../../ui/DescriptionBox";
import Hemisphere from "../../ui/Hemisphere";

import images from "../../assets";

function Home() {
  return (
    <div className=" flex-grow">
      <Hemisphere images={images} color={"bg-orange-300"} />
      <DescriptionBox />
    </div>
  );
}

export default Home;
