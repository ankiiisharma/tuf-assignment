import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex w-1/2 px-[20px] justify-between bg-main-gradient rounded-lg p-3">
        <img
          src="https://pbs.twimg.com/profile_images/1810984608428658688/ZA_heiFH_400x400.jpg"
          width={50}
          className="flex items-center rounded-full"
        />

        <div className="flex flex-row items-center">
          <h1> add card </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
