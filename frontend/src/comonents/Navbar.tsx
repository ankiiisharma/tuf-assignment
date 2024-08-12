// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex w-[350px] justify-between items-center rounded-lg p-3 mb-7">
        <h1 className="font-bold text-2xl text-red-500 tracking-tighter">
          {" "}
          assignmet{" "}
        </h1>

        <div className="flex flex-row items-center">
          <Link to="/addcards">
            <button className="bg-pink py-2 px-3 rounded-lg border norder-slate-500 hover:translate-y-[-3px] ease-in-out duration-200">
              {" "}
              add card{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
