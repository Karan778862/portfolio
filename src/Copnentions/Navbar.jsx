import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import{Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "exprence",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between 
    items-center bg-black px-4 w-full h-20
     text-white fixed"
    >
      <div>
        <h1 className="text-4xl  ml-2 font-FaSignature">karan kumar</h1>
      </div>
      <ul className=" hidden md:flex  ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 "
          >
             <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Navbar;
