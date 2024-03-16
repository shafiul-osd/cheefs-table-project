import { MdOutlineAccountCircle } from "react-icons/md";

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
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered h-8 md:h-10 w-32 md:w-full" />
            </div>
            <button className="btn btn-circle btn-outline text-2xl bg-green-500 text-white">
                <MdOutlineAccountCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
