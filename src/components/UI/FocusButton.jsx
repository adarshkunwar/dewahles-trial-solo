import React from "react";
// ! the button design isnt done yet. I need it to show a black border at the bottom that acts like
const FocusButton = ({ title, action }) => {
  return (
    <div className="relative w-full h-fit">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0">
        <button
          onClick={action}
          className="w-full max-w-sm py-5 px-1 bg-blue-200 z-20 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 hover:mt-1 border-black"
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default FocusButton;
