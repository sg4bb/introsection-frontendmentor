"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import ItemExpand from "@/components/ItemExpand";

const Navbar = () => {
  // handling the right drawer.
  const [openMenu, setOpenMenu] = useState(false);

  const handlingMenu = () => {
    setOpenMenu(!openMenu);
  };

  // expand items
  const featuresItems = [
    { name: "Todo List", icon: "icon-todo" },
    { name: "Calendar", icon: "icon-calendar" },
    { name: "Reminders", icon: "icon-reminders" },
    { name: "Planning", icon: "icon-planning" },
  ];

  const companyItems = [
    { name: "History" },
    { name: "Our Team" },
    { name: "Blog" },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-3 md:px-auto flex items-center py-6">
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

            <ul className="flex flex-col space-y-4 md:flex-row flex-wrap md:space-y-0 space-x-1 md:space-x-6">
              <li className="text-black flex items-center gap-2">
                <ItemExpand items={featuresItems} title="Features" />
              </li>

              <li className="text-black font-semibold">
                <ItemExpand items={companyItems} title="Company" />
              </li>

              <li className="text-black font-semibold">Careers</li>

              <li className="text-black font-semibold">About</li>
            </ul>
          </section>

          {/* Login and register */}
          <section>
            <div className="flex flex-col md:flex-row flex-wrap  md:space-x-2">
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
