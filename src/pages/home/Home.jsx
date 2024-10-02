import DescriptionBox from "../../ui/DescriptionBox";
import Hemisphere from "../../ui/Hemisphere";

import images from "../../assets";

function Home() {
  return (
    <div className=" flex-grow">
      <Hemisphere images={images} />
      <DescriptionBox />
    </div>
  );
}

export default Home;
