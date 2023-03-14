import { collection, getDocs } from "firebase/firestore";
import { db } from "./firestore-data";

export default function getProducts() {
  const productsRef = collection(db, "products");
  getDocs(productsRef)
    .then((res) => {
      const ords = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      const products = ords
        .map((ord) => ({
          id: ord.id,
          name: ord.data.name,
          price: ord.data.price,
          imageSrc: ord.data.imageSrc,
          imageAlt: ord.data.imageAlt,
          productDescription: ord.data.productDescription,
        }))
        .slice(0, 4);
      // I am slicing because you only need top 4 products for the highlights section
      console.log("*******");
      console.log(products);
      return products;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
