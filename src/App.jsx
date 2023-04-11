import React, { useEffect, useRef, useState } from "react";

import Layout from "./HOC/Navigation/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Vision from "./pages/Vision";

const App = () => {
  // refs

  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);

  const [setRf, setSetRef] = useState([]);

  useEffect(() => {
    setSetRef([
      { name: "home", ref: homeRef },
      { name: "contact", ref: contactRef },
      { name: "about", ref: aboutRef },
      { name: "vision", ref: visionRef },
    ]);
  }, [homeRef, contactRef, aboutRef, visionRef]);
  // console.log("setRef ", setRf);

  const handleScroll = (ref) => {
    console.log("ref ", ref);
    if (ref === null) return;
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 1000,
    });
  };

  // if (homeRef.current) console.log(homeRef.current);

  return (
    <div>
      <Layout handleScroll={handleScroll} refs={setRf}>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={visionRef}>
          <Vision />
        </div>
      </Layout>
    </div>
  );
};

export default App;
