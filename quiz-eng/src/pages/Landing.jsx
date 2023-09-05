import React, { useEffect } from "react";
import { Slider, NavbarMe, Header, About, Who, Footer } from "../components";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const Landing = () => {
  useEffect(() => {
    logEvent(analytics, "landing_page_visited");
  }, []);

  return (
    <>
      <NavbarMe />
      <Header />
      <Slider />
      <About />
      <Who />
      <Footer />
    </>
  );
};

export default Landing;
