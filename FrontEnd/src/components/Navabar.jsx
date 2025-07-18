import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="w-full flex justify-between p-2 bg-gray-800 text-white">
      <NavLink to="/" className="flex gap-x-2 items-center hover:text-blue-500">
        <img
          src="../../public/logo.svg"
          alt=""
          className=" w-[25px] h-[25px]"
        />
        <p>My pokemon collection</p>
      </NavLink>
      <div className="flex felx-row items-center w-[30%] justify-between">
        <NavLink to="/" className="hover:text-blue-500">
          WishList
        </NavLink>
        <NavLink to="/" className="hover:text-blue-500">
          La mia collezione
        </NavLink>
        <NavLink to="/" className="hover:text-blue-500">
            Ricerca Avanzata
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
