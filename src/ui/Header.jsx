import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/lunch"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Lunch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dinner"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dinner
            </NavLink>
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
