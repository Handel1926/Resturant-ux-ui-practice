import { HiArrowCircleDown } from "react-icons/hi";

function ArrowBtn({ act }) {
  return (
    <button onClick={act} className="text-5xl text-orange-400">
      <HiArrowCircleDown />
    </button>
  );
}

export default ArrowBtn;
