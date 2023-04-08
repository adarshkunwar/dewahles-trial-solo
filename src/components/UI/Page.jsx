import React from "react";

const Page = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden snap-center">
      <div className="h-full  w-full text-center flex justify-center items-center">
        <div className="w-6/12 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Page;
