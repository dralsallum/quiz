import React, { useEffect, useState } from "react";
import { NavTech, QueFooter, Question, Slider, Store } from "../components";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import useRequireAuth from "../useRequireAuth";

const Train = () => {
  useRequireAuth();
  const [showComponent, setShowComponent] = useState("question"); // "none", "question", or "slider"

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
      {showComponent === "question" && <Question />}
      {showComponent === "store" && <Store />}
      <QueFooter
        showQuestion={() => setShowComponent("question")}
        showStore={() => setShowComponent("store")}
        currentComponent={showComponent}
      />
    </>
  );
};

export default Train;
