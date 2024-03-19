import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div
        className="text-3xl bg-green-300 text-black p-4"
        onClick={() => setOpen(!open)}
      >
        {open === true ? <RxCross2 /> : <MdMenuOpen className=" md:hidden" />}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-green-300 px-4 text-black
        ${open ? "top-12" : " -top-60"} md:rounded-b-lg lg:rounded-none`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
