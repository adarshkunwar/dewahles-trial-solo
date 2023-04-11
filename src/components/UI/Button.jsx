import React from "react";

const normal = "border-b-4 border-r-4";
const hover = "hover:border-b-2 hover:border-r-2 hover:mt-1";
const focus = "focus:border-b-2 focus:border-r-2 focus:mt-1 focus:outline-none";

const Button = ({ title, action }) => {
  return (
    <div className="relative w-full h-fit">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0">
        <button
          onClick={() => action()}
          className={`w-full max-w-xs py-2 px-1 bg-orange-200 border-black ${normal} ${hover} ${focus}`}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
