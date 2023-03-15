import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../data/firestore-data";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartRef = collection(db, "cart");

    getDocs(cartRef).then((res) => {
      const ords = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      const products = ords.map((ord) => ({
        itemID: ord.id,
        ProductID: ord.data.ProductID,
        Quantity: ord.data.Quantity,
        UserID: ord.data.UserID,
        Created: ord.data.Created,
      }));
      setCartItems(products);
    });
  }, []);

  const { user } = UserAuth();
  return (
    <React.Fragment>
      {cartItems.map((item) => {
        console.log(item);
        if (item.UserID === user.uid) {
          return (
            <p>
              {item.ProductID} x {item.Quantity} On {item.Created}
            </p>
          );
        }
      })}
    </React.Fragment>
  );
};

export default Cart;
