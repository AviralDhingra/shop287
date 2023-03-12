import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../data/ProductHighlights";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../data/firestore-data";

import { UserAuth } from "../context/AuthContext";

// import "./App.css";
// import "./ProductPage.css";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      res.docs
        .map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
        .then((ords) => {
          const prods = ords.map((ord) => ({
            id: ord.id,
            name: ord.data.name,
            price: ord.data.price,
            imageSrc: ord.data.imageSrc,
            imageAlt: ord.data.imageAlt,
            productDescription: ord.data.productDescription,
          }));

          setProducts(prods);
        });
    });
  }, []);

  const { user } = UserAuth();

  function AddOrder() {
    console.log("Working...");
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, {
      ProductID: productID,
      UserID: user.uid,
    }).then((res) => {
      console.log(res);
    });
  }

  const productID = useParams().id;
  console.log(productID);

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  // useEffect(() => {
  //   const productsRef = collection(db, "products");
  //   onSnapshot(productsRef, (snapshot) => {
  //     setProducts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         name: doc.data.name,
  //         price: doc.data.price,
  //         imageSrc: doc.data.imageSrc,
  //         imageAlt: doc.data.imageAlt,
  //         productDescription: doc.data.productDescription,
  //       }))
  //     );
  //   });
  // }, []);

  console.log("Template : ");
  console.log(products);
  const product = products.find((obj) => obj.id === productID);
  const productName = product.name;
  const productPrice = product.price;
  const img = product.imageSrc;
  const productDescription = product.productDescription;

  const imgSize = 600;

  if (products) {
    return (
      <React.Fragment>
        <div className="m-[70px] ml-[130px] flex flex-row items-start font-mono">
          <img
            className="mt-0 rounded-lg"
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
                <button
                  className="text-center text-xl font-bold text-white"
                  onClick={AddOrder}
                >
                  Buy Now
                </button>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
