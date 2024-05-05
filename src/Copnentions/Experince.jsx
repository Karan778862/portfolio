import React from "react";
import html from '../assets/icon-1.png'
import css from '../assets/icon-2.png'
import js from '../assets/icon-3.png'
import reacts from '../assets/icon-4.png'
import dbs from '../assets/icon-5.png'
import node from '../assets/icon-6.png'
const Experince = () => {

    const icons = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: js,
            title: "JS",
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reacts,
            title: "REACT",
            style: 'shadow-blue-200',
        },
        {
            id: 5,
            src: dbs,
            title: "MongoDB",
            style: 'shadow-blue-400',
        },
        {
            id: 6,
            src: node,
            title: "NodeJS",
            style: 'shadow-green-500',
        },
    ]

  return (
    <div name="exprence" className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen">
      <div className="max-screen mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 boredr-gray-500 p-2 inline">Experience</p>
          <p className="py-6">these are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {icons.map(({id, src, title, style })=>(

            <div key={id} className={"shadow-md hover:scale-105 duration-200 py-2 rounded-lg"  +" "+ style}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experince;
