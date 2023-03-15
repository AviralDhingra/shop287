import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { default as React, Fragment, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../data/firestore-data";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user, logOut } = UserAuth();
  const [open, setOpen] = useState(false);
  const [productsDisplay, setproductsDisplay] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cartRef = collection(db, "cart");

    getDocs(cartRef).then((res) => {
      const ords = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      const items = ords.map((ord) => ({
        itemID: ord.id,
        ProductID: ord.data.ProductID,
        Quantity: ord.data.Quantity,
        UserID: ord.data.UserID,
        Created: ord.data.Created,
      }));
      setCartItems(items);
    });
  }, []);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef).then((res) => {
      const ords = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));

      const productsAll = ords.map((ord) => ({
        id: ord.id,
        name: ord.data.name,
        price: ord.data.price,
        imageSrc: ord.data.imageSrc,
      }));

      const products = [];

      for (let i = 0; i < productsAll.length; i++) {
        const product = productsAll[i];
        for (let j = 0; j < cartItems.length; j++) {
          const item = cartItems[j];
          if (product.id === item.ProductID) {
            product.Quantity = item.Quantity;
            product.seller = "In House";
            products.push(product);
          }
        }
      }

      let tempTotal = 0;
      for (let i = 0; i < products.length; i++) {
        tempTotal += products[i].price * products[i].Quantity;
      }
      setSubtotal(tempTotal);
      setproductsDisplay(products);
    });
  }, [cartItems]);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-red-500 text-white p-4 px-11 m-5 mx-32 rounded-full items-center justify-center flex-row">
      <Link
        to="/"
        className="btn btn-ghost normal-case text-xl rounded-lg mr-auto"
      >
        <h1 className="text-2xl font-extrabold">Shop 287</h1>
      </Link>
      <div className="flex items-center justify-center flex-row w-full">
        <Link
          to="/under-development"
          className="btn btn-ghost normal-case text-xl rounded-lg m-0"
        >
          <h1 className="text-xl font-extrabold">Products</h1>
        </Link>
        <Link
          to="/under-development"
          className="btn btn-ghost normal-case text-xl rounded-lg m-0"
        >
          <h1 className="text-xl font-extrabold">Orders</h1>
        </Link>
        {/* <Link
          to="/cart"
          className="btn btn-ghost normal-case text-xl rounded-lg m-0"
        >
          <h1 className="text-xl font-extrabold">Cart</h1>
        </Link> */}
      </div>
      <div
        style={{
          marginLeft: "auto",
        }}
        className="flex items-center justify-center flex-row place-content-evenly space-x-5"
      >
        <button
          onClick={() => setOpen(true)}
          className="normal-case text-xl rounded-lg"
        >
          <h1 className="text-xl font-extrabold">
            <AiOutlineShoppingCart size={30} />
          </h1>
        </button>

        {user?.displayName ? (
          <div className="items-center justify-center">
            <div className="dropdown dropdown-end bg-red-500">
              <label
                tabIndex={0}
                className="btn bg-red-500 border-none hover:border-none hover:bg-red-500 p-0 m-0 items-center justify-center"
              >
                <Avatar src={user.photoURL}></Avatar>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black flex"
              >
                <li>
                  <p className="hover:bg-white active:text-black text-base font-bold pr-0 pl-0 px-2 items-center justify-center">
                    Welcome, {user.displayName}
                  </p>
                </li>
                <hr className="mb-2 mx-7" />
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-base text-left bg-white hover:bg-slate-100 hover:text-black active:text-black active:bg-slate-100 pr-0 pl-0 px-2 items-center justify-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/signin" className="text-xl">
            Login
          </Link>
        )}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {productsDisplay.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <div className="hover:cursor-pointer">
                                          <Link
                                            to={`/product/${product.id}`}
                                            onClick={() => setOpen(false)}
                                          >
                                            <h3>{product.name}</h3>
                                          </Link>
                                        </div>
                                        <p className="ml-4">${product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Seller: {product.seller}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.Quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-red-600 hover:text-red-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subtotal}</p>
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Shipping & Taxes Calculated During Checkout
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-400"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            Or&nbsp;&nbsp;
                            <button
                              type="button"
                              className="font-medium text-red-500 hover:text-red-400"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Navbar;
