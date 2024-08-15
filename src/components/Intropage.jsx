import Navbar from "./Navbar";
import Background from "../assets/background.png";
import { NEW_PRODUCTS_INTRO, WELCOME_MESSAGE } from "../constants";

const Intropage = () => {
  return (
    <div className="h-screen flex flex-col bg-cover">
        <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>
        <div className="flex-grow flex justify-center items-center mt-20">
            <div className="flex flex-col text-center items-center py-20 px-20 w-3/5 bg-black rounded-3xl bg-opacity-75 text-white">
                <h1 className="text-7xl font-bold">Stevo Tech</h1>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {WELCOME_MESSAGE}
                </p>
                <button className="px-6 py-2 bg-gray-500 text-white rounded-full">
                    Get NOW
                </button>
            </div>
        </div>
        <div className="flex text-center justify-center items-center">
            <div className="flex flex-col items-center py-2 px-20 w-1/7 bg-black rounded-tl-3xl rounded-tr-3xl bg-opacity-75 text-white">
                <h1 className="text-3xl font-bold">New Products</h1>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {NEW_PRODUCTS_INTRO}
                </p>
            </div>
        </div>
    </div>
  );
};

export default Intropage;
