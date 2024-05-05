import React from "react";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <IoHome size={35}/>Home
        </>
      ),
      hraf: "https://www.linkedin.com/in/karan-kumar-97a29a230/",
    },
    {
      id: 2,
      child: (
        <>
         <FcAbout size={35} />About
        </>
      ),
      hraf: "https://github.com.com",
    },
    {
      id: 3,
      child: (
        <>
          <FcAbout size={35} />About
        </>
      ),
      hraf: "https://linkedin.com",
    },
    {
      id: 4,
      child: (
        <>
           <IoMdContact size={34} /> Contact
        </>
      ),
      hraf: "https://linkedin.com",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" lg:flex flex-col top-[35%] right-0 fixed md:px-40  ">
      <ul>
        {links.map(({ id, child, hraf, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-100px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={hraf}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="norferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
