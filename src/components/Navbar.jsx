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
          <button onClick={handleSignOut} className="text-xl">
            Logout
          </button>
        ) : (
          <Link to="/signin" className="text-xl">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
