import React from "react";

const NavBar = () => {
  return (
    <div className="z-50 w-full fixed h-16 lg:h-[80px] bg-darkgray shadow-sm">
      <div className="flex h-full items-center gap-2 pl-4 ">
        <p className="  font-semibold non-italic text-base lg:text-xl  justify-center">
          Cryptocurrency Dashboard
        </p>
      </div>
    </div>
  );
};

export default NavBar;
