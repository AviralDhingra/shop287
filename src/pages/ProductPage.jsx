import React, { useState } from "react";
// import "./App.css";
// import "./ProductPage.css";

export default function ProductPage(props) {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
    // console.log(count);
  };

  const decrementCount = () => {
    if (count >= 2) {
      setCount(count - 1);
      // console.log(count);
    }
  };

  const productName = props.productName;
  const productPrice = props.productPrice;
  const productDescription = props.productDescription;
  const img = "https://m.media-amazon.com/images/I/71WmBY-nquL._SL1500_.jpg";
  const imgSize = 600;

  return (
    <React.Fragment>
      <div className="m-[70px] ml-[130px] flex flex-row items-start font-mono">
        <img
          className="mt-0 border-2 border-solid border-black"
          style={{ width: imgSize, height: imgSize }}
          src={img}
          alt={productName}
        />
        <div className="mx-[90px] flex-grow space-y-9">
          <h1 className="text-5xl">{productName}</h1>
          <p className="text-lg font-bold">Available At: ${productPrice}</p>
          <p className="text-lg">{productDescription}</p>
          <div className="flex space-x-3">
            <div className="inline-flex h-[50px] flex-grow basis-1/4 items-center justify-center space-x-4 py-2 px-4">
              <button
                className="h-[25px] w-[25px] border-2 border-solid border-orange-600 text-center hover:bg-orange-600"
                onClick={decrementCount}
              >
                -
              </button>
              <span className="text-center text-xl text-black">{count}</span>
              <button
                className="h-[25px] w-[25px] border-2 border-solid border-orange-600 text-center hover:bg-orange-600"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
            <button className="h-[50px] flex-grow basis-3/4 items-center rounded bg-orange-600 py-2 px-4 hover:bg-orange-500">
              <span className="text-center text-xl font-bold text-white">
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
