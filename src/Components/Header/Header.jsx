import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar bg-base-100 w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div className="form-control hidden md:block relative">
                <input type="text" placeholder="Search" className="input input-bordered h-8 md:h-10 w-32 md:w-full pl-10" />
                <IoIosSearch className="absolute top-0 bottom-0 my-auto ml-3" />

            </div>
            <button className="btn btn-sm md:btn-md btn-circle btn-outline text-2xl bg-green-500 text-white">
                <MdOutlineAccountCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
