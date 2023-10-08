import React, { useEffect } from "react";
import { Bottom, NavTech, QueFooter, Question } from "../components";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import useRequireAuth from "../useRequireAuth";

const Train = () => {
  useRequireAuth();
  useEffect(() => {
    // Log the event
    logEvent(analytics, "home_page_visited");

    // Reset the zoom level
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.parentNode.removeChild(viewport);

      const newViewport = document.createElement("meta");
      newViewport.name = "viewport";
      newViewport.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.getElementsByTagName("head")[0].appendChild(newViewport);
    }
  }, []);

  return (
    <>
      <NavTech />
      <Question />
      <QueFooter />
    </>
  );
};

export default Train;
