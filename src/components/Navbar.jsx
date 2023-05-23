const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex items-center py-6">
          {/* Brand section 🐱‍👤 */}
          <section className="mr-20">
            <h1 className="text-2xl font-semibold">snap</h1>
          </section>

          {/* Navbar navigation */}
          <section className="flex-grow">
            <ul className="flex flex-wrap space-x-4">
              <li>Features</li>

              <li>Company</li>

              <li>Careers</li>

              <li>About</li>
            </ul>
          </section>

          {/* Login and register */}
          <section>
            <div className="flex space-x-2">
              <button>Login</button>
              <button>Register</button>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
