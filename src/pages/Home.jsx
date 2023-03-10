// import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero_image.png";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { products } from "../data/ProductHighlights";
import qualities from "../data/USP_List";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mx-14">
        <div className="bg-gray-100 rounded-lg mb-0">
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
                  Discover the ultimate shopping destination! With secure
                  payments, fast shipping, and 24/7 customer support, shopping
                  with us is a breeze. Shop now and become the hero of your own
                  shopping story!
                </p>
                <div className="mt-8">
                  <a
                    href="#FeaturedItems"
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
        <div
          className="bg-white"
          id="FeaturedItems"
          style={{
            transition: "all 2s ease-in-out",
            marginTop: 0,
          }}
        >
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Featured Items
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-base text-gray-700">
                        <Link to={`/product/${product.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-base font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg flex place-content-evenly p-8 mb-10 space-x-6 mx-72">
          {qualities.map((quality) => (
            <FeatureCard
              name={quality.name}
              description={quality.description}
              className="grow basis-0"
            />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
