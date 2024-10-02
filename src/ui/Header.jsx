import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" relative z-50 w-full h-[30px] flex items-center bg-transparent ">
      <div className="w-1/3 h-full flex items-center gap-6">
        <div className="w-[19.11px] h-[12.68px]">
          <img
            src="/Ellipse1.png"
            alt=""
            className="w-[19.11px] h-[12.68px]  "
          />
        </div>

        <h1 className="font-semibold">Food Hunt</h1>
      </div>
      <div className="w-1/3 h-full items-start">
        <ul className="flex gap-6 items-start font-semibold">
          <li>
            <Link to={"/"}>Breakfast</Link>
          </li>
          <li>
            <Link to={"/lunch"}>Lunch</Link>
          </li>
          <li>
            <Link to={"/dinner"}>Dinner</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-row-reverse items-center">
        <img className="w-5 h-5" src="/icons8-lock-50.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
