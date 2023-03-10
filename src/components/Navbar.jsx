import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-red-500 text-white p-4 px-11 m-5 mx-32 rounded-full items-center">
      <Link to="/" className="btn btn-ghost normal-case text-xl rounded-lg">
        <h1 className="text-2xl font-extrabold">Shop 287</h1>
      </Link>
      <div className="ml-auto">
        {user?.displayName ? (
          <div className="items-center justify-center">
            <div className="dropdown dropdown-end bg-red-500">
              <label
                tabIndex={0}
                className="btn bg-red-500 border-none hover:border-none hover:bg-red-500 p-0 m-0 items-center justify-center"
              >
                <Avatar src={user.photoURL}></Avatar>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black flex"
              >
                <li>
                  <p className="hover:bg-white active:text-black text-base font-bold pr-0 pl-0 px-2 items-center justify-center">
                    Welcome, {user.displayName}
                  </p>
                </li>
                <hr className="mb-2 mx-4" />
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-base text-left bg-white hover:bg-slate-100 hover:text-black active:text-black active:bg-slate-100 pr-0 pl-0 px-2 items-center justify-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/signin" className="text-xl">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
