"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handlingMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="container mx-auto px-3 md:px-auto flex items-center py-6">
        {/* Brand section 🐱‍👤 */}
        <section className="w-full md:w-auto md:grow-0 md:mr-20">
          <h1 className="text-2xl font-bold">snap</h1>
        </section>

        <button className="block flex-grow md:hidden" onClick={handlingMenu}>
          <MenuIcon />
        </button>

        {/* Navigation section */}
        <nav
          className={`md:static md:flex md:items-center md:w-full
            ${
              openMenu
                ? "absolute flex flex-col top-0 right-0 z-10 min-h-screen w-3/5 gap-y-[21px] bg-white p-8"
                : "hidden"
            }
        `}
        >
          {/* Items */}
          <section className="grow-0 md:flex-grow">
            <div className="relative block md:hidden mb-10 left-0 right-0 mr-2">
              <button className="absolute right-0" onClick={handlingMenu}>
                <CloseIcon />
              </button>
            </div>

            <ul className="flex flex-col space-y-4 md:flex-row flex-wrap md:space-y-0 space-x-1 md:space-x-4">
              <li className="text-medium-gray">Features</li>

              <li className="text-medium-gray">Company</li>

              <li className="text-medium-gray">Careers</li>

              <li className="text-medium-gray">About</li>
            </ul>
          </section>

          {/* Login and register */}
          <section>
            <div className="flex flex-col space-y-0 md:flex-row flex-wrap md:space-y-2 md:space-x-2">
              <button className="px-8 py-2 text-medium-gray rounded-xl">
                Login
              </button>
              <button className="px-7 py-2 text-medium-gray outline outline-2 outline-medium-gray rounded-xl">
                Register
              </button>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
