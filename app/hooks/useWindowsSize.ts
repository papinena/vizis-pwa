import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    // Ensure window is defined (for server-side rendering or environments without a window)
    if (typeof window === "undefined") {
      return;
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    // Call handleResize once initially to set the correct dimensions
    // if the component mounts after the initial state is set
    handleResize();

    // Cleanup: Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return windowDimensions;
}
