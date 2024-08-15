import React, { useEffect, useState } from "react";
import Intropage from "../Intropage";
import Contact from "../Contact";
import BrandDisplay from "../BrandDisplay";
import Background from "./background.png";

const HomeScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set a maximum opacity threshold (e.g., 0.7) so it doesn't get too dark
  const maxOpacity = 0.8;
  const gradientOpacity = Math.min(scrollPosition, maxOpacity);

  const backgroundOverlayStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${gradientOpacity}), rgba(0, 0, 0, ${gradientOpacity})), url(${Background})`,
    zIndex: -1,
  };

  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={backgroundOverlayStyle}></div>
      <div className="relative z-10">
        <Intropage />
        <BrandDisplay />
        <Contact />
      </div>
    </div>
  );
};

export default HomeScreen;
