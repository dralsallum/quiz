import React, { useEffect } from "react";
import { NavbarQui, Body } from "../components";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const Home = () => {
  useEffect(() => {
    logEvent(analytics, "home_page_visited");
  }, []);

  return (
    <>
      <NavbarQui />
      <Body />
    </>
  );
};

export default Home;
