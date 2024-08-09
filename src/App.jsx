import React from "react";
import Intropage from "./components/Intropage";
import Contact from "./components/Contact";
import BrandDisplay from "./components/BrandDisplay";
import BrandDisplay1 from "./components/BrandDisplay1";

const App = () => {
  return (
    <div className="overflow-x-hidden text-nuetral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Intropage />
      <BrandDisplay />
      <BrandDisplay1 />
      <Contact />
    </div>
  );
};

export default App;
