import { Link, NavLink } from "react-router";
import ActiveLink from "./ActiveLink";

const Navbar = () => {

  const navPath = [
    {
      to: "/",
      text: "Home"
    },
    {
      to: "/my-habits",
      text: "My Habits"
    },
    {
      to: "/blogs",
      text: "Blogs"
    },
    {
      to: "/contact",
      text: "Contact"
    }
  ]

  return (
    <div className="navbar bg-base-100 px-4 md:px-8 lg:px-12 min-h-24 border-b-2 border-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow "
          >
            {
              navPath?.map((item, index) => <li key={index}>
                <ActiveLink
                  to={item.to}
                >
                  {item.text}
                </ActiveLink>
              </li>)
            }
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
            H
          </div>
          <span className="text-xl font-bold">HabitTrack</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          {
            navPath?.map((item, index) => <li key={index}>
              <ActiveLink
                to={item.to}
              >
                {item.text}
              </ActiveLink>
            </li>)
          }
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/habits" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
