import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" relative z-50 w-full h-[30px] flex items-center bg-transparent ">
      <div className="w-1/3 h-full flex items-center">Food Hunt</div>
      <div className="w-1/3 h-full items-start">
        <ul className="flex gap-6 items-start">
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
