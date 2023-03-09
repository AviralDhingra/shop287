// import Image from "next/image";
import React from "react";
import heroImage from "./hero_image_2.png";

const Home = () => {
  // const backgroundImage = props.backgroundImage;
  return (
    <div className="bg-gray-100 mx-14 rounded-lg">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900">
              Shop Like a Hero
            </h2>
            <p className="text-slate-400 text-xl">
              {" "}
              Unbeatable Prices on a Vast Selection of Products!
            </p>
            <p className="mt-3 text-xl text-gray-500">
              Discover the ultimate shopping destination! With secure payments,
              fast shipping, and 24/7 customer support, shopping with us is a
              breeze. Shop now and become the hero of your own shopping story!
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 mx-16">
            <div className="relative">
              <img
                src={heroImage}
                className="object-cover w-full h-full rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
