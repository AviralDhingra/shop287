import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../data/firestore-data";

function BuyNow() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  function getOrders() {
    const ordersRef = collection(db, "orders");
    getDocs(ordersRef)
      .then((res) => {
        const ords = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setOrders(ords);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <h1>Buy Now</h1>
      <ul></ul>
    </div>
  );
}

export default BuyNow;
