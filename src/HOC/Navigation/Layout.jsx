import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, refs, handleScroll }) => {
  // console.log(refs);
  return (
    <div className="grid grid-cols-12 h-screen bg-gradient-to-br from-blue-400 to-green-300">
      <div className="col-span-3 relative h-full">
        <div className="sticky top-0 h-full">
          <Sidebar refs={refs} handleScroll={handleScroll} />
        </div>
      </div>
      <div className="h-full overflow-scroll col-span-9 snap-y snap-mandatory scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default Layout;
