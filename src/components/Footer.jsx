import React from "react";

const Footer = (props) => {
  if (props.shortPage === "true") {
    return (
      <footer
        className="w-full bg-gray-100 flex flex-row place-content-evenly p-4 justify-center items-center"
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <p className="text-center">Made By Aviral Dhingra</p>
      </footer>
    );
  } else {
    return (
      <footer className="w-full bg-gray-100 flex flex-row place-content-evenly p-4 justify-center items-center">
        <p className="text-center">Made By Aviral Dhingra</p>
      </footer>
    );
  }
};

export default Footer;
