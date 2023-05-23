import MenuIcon from "./icons/MenuIcon";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center py-6">
        {/* Brand section 🐱‍👤 */}
        <section className="mr-20 flex-grow md:flex-none">
          <h1 className="text-2xl font-semibold">snap</h1>
        </section>

        <button className="block md:hidden">
          <MenuIcon />
        </button>

        <nav className="flex items-center w-full">
          {/* Navbar navigation */}
          <section className="flex-grow hidden md:block">
            <ul className="flex flex-wrap space-x-4">
              <li>Features</li>

              <li>Company</li>

              <li>Careers</li>

              <li>About</li>
            </ul>
          </section>

          {/* Login and register */}
          <section className="hidden md:block">
            <div className="flex flex-wrap space-x-2">
              <button className="px-8 py-2 text-medium-gray">Login</button>
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
