import React from "react";
import { NavLink } from "react-router-dom";
import { UsersIcon, ShopIcon, UserLogoIcon } from "../assets/Icon";

function Navbar() {
  return (
    <>
      <nav className="bg-[#FFFFFF] py-[20px] sticky top-0 w-full">
        <div className="w-[1200px] bg-[#d1cfcf] rounded-[10px] p-[10px] flex mx-auto justify-between items-center gap-[20px]">
          <a href="/">
            <UserLogoIcon />
          </a>
          <div className="flex items-center gap-4">
            <NavLink className="flex items-center" to={"/"}>
              <UsersIcon />
              <span className="text-[20px] font-medium">Users</span>
            </NavLink>
            <NavLink className="flex items-center" to={"/products"}>
              <ShopIcon />
              <span className="text-[20px] font-medium">Products</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
