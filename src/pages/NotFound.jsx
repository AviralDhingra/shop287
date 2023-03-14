import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <React.Fragment>
      <div class="flex flex-col h-full mt-64 justify-center items-center">
        <div class="text-9xl font-bold text-red-500 mb-8">404</div>
        <div class="text-3xl font-medium mb-4">Page Not Found</div>
        <div class="text-lg text-gray-500 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </div>
        <a
          href="/"
          class="bg-red-500 text-white font-medium py-2 px-6 rounded hover:bg-red-600 transition-colors duration-200 ease-in-out"
        >
          <Link to="/">Visit Home Page</Link>
        </a>
      </div>
      <Footer shortPage="true" />
    </React.Fragment>
  );
}
