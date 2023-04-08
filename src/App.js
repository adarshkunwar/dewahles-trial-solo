import React from "react";

import Layout from "./HOC/Navigation/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Vision from "./pages/Vision";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <Contact />
        <About />
        <Vision />
      </Layout>
    </div>
  );
};

export default App;
