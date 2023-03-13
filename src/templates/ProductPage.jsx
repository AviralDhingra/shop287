import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { UserAuth } from "../context/AuthContext";
import { db } from "../data/firestore-data";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      const ords = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      const products = ords.map((ord) => ({
        id: ord.id,
        name: ord.data.name,
        price: ord.data.price,
        imageSrc: ord.data.imageSrc,
        imageAlt: ord.data.imageAlt,
        productDescription: ord.data.productDescription,
      }));

      setProducts(products);
    });
  }, []);

  const productID = useParams().id;
  console.log(productID);

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

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      {products.map((product) => {
        if (product.id === productID) {
          return (
            <div className="m-[70px] ml-[130px] flex flex-row items-start font-mono">
              <img
                className="mt-0 rounded-lg"
                style={{ width: 600, height: 600 }}
                src={product.imageSrc}
                alt={product.name}
              />
              <div className="mx-[90px] flex-grow space-y-9">
                <h1 className="text-5xl">{product.name}</h1>
                <p className="text-lg font-bold">
                  Available At: ${product.price}
                </p>
                <p className="text-lg">{product.productDescription}</p>
                <div className="flex space-x-3">
                  <div className="inline-flex h-[50px] flex-grow basis-1/4 items-center justify-center space-x-4 py-2 px-4">
                    <button
                      className="h-[25px] w-[25px] border-2 border-solid border-orange-600 text-center hover:bg-orange-600"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="text-center text-xl text-black">
                      {count}
                    </span>
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
          );
        }
      })}
      <Footer />
    </React.Fragment>
  );
}

export default Home;
