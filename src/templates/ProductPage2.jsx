import React, { useEffect } from "react";
// import getProducts from "../data/ProductHighlights";
import { db } from "../data/firestore-data";

function Home() {
  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = db
      .collection("products")
      .doc("1ajvvnKUGKU69pSKk3rl")
      .get();
    console.log(products);
  });
  return (
    <React.Fragment>
      <p>Test!</p>
    </React.Fragment>
  );
}

export default Home;
