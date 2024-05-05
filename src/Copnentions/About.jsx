import React from "react";

const About = () => {
  return (
    <div name='About' className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-ful h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet
          quidem blanditiis eum vel minima voluptate nemo quis ex culpa, optio
          ea voluptatem nihil praesentium, consequuntur placeat assumenda ad
          quam cum. Itaque aspernatur laborum nemo culpa voluptate, veritatis
          dolor, doloribus omnis repellendus sequi numquam dolores dolorum,
          deleniti odio debitis. Ipsum.
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          accusamus quibusdam rem nemo quo, est similique dolore ipsum. Fugit
          molestias dolor, modi fugiat architecto eveniet, omnis consequuntur
          voluptates vitae quasi eum odit aliquam magni dolorum atque ab rem
          animi doloribus perferendis voluptatem nemo reprehenderit optio alias
          aut! Nisi, officia itaque?
        </p>
      </div>
    </div>
  );
};

export default About;
