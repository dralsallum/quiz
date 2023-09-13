import React, { useEffect } from "react";
import { Bottom, NavTech, Question } from "../components";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const Train = () => {
  useEffect(() => {
    logEvent(analytics, "home_page_visited");
  }, []);

  return (
    <>
      <NavTech />
      <Question />
      <Bottom />
    </>
  );
};

export default Train;
