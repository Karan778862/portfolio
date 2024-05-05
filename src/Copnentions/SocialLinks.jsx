import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIN <FaLinkedin size={34} />
        </>
      ),
      hraf: "https://www.linkedin.com/in/karan-kumar-97a29a230/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={34} />
        </>
      ),
      hraf: "https://github.com.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={34} />
        </>
      ),
      hraf: "https://linkedin.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={34} />
        </>
      ),
      hraf: "https://linkedin.com",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  ">
      <ul>
        {links.map(({ id, child, hraf, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
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
