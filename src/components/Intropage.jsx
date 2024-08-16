import Navbar from "./Navbar";
import { NEW_PRODUCTS_INTRO, WELCOME_MESSAGE } from "../constants";

const Intropage = () => {
  return (
    <div className="h-screen flex flex-col bg-cover">
      <div className="flex-grow flex justify-center items-center mt-20">
        <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-black rounded-3xl bg-opacity-75 text-white">
          <h1 className="text-4xl md:text-7xl font-bold">Stevo Tech</h1>
          <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg">
            {WELCOME_MESSAGE}
          </p>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full">
            Get NOW
          </button>
        </div>
      </div>

      <div className="flex text-center justify-center items-center mt-10">
        <div className="flex flex-col items-center py-4 px-6 w-11/12 md:w-1/2 bg-black rounded-tl-3xl rounded-tr-3xl bg-opacity-75 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">New Products</h1>
          <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg">
            {NEW_PRODUCTS_INTRO}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intropage;
