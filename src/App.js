import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
