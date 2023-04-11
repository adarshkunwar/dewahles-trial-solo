import React, { useRef } from "react";

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

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // if (homeRef.current) console.log(homeRef.current);
  console.log(homeRef, contactRef, aboutRef, visionRef);

  return (
    <div>
      <Layout
        handleScroll={handleScroll}
        refs={[
          { name: "home", ref: homeRef.current },
          { name: "contact", ref: contactRef.current },
          { name: "about", ref: aboutRef.current },
          { name: "vision", ref: visionRef.current },
        ]}
      >
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
