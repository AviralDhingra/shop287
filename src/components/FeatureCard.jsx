import React from "react";

const FeatureCard = (props) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden p-11 hover:shadow-2xl flex flex-col place-content-evenly"
      // style={{
      //   minWidth: "300px",
      //   minHeight: "300px",
      // }}
    >
      <h3 className="text-xl text-center font-bold my-4 text-red-500">
        {props.name}
      </h3>
      <p className="font-light">{props.description}</p>
    </div>
  );
};

export default FeatureCard;
