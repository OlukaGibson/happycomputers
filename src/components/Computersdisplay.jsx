import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Sidebar from "./Sidebar";
import Break from "./Break";
import { COMPUTERDETAILS } from "../constants";

const Computersdisplay = () => {
  const [marginLeft, setMarginLeft] = useState('-200px'); // Default to large screen margin

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        setMarginLeft('-50px'); // Small screens
      } else if (width <= 940) {
        setMarginLeft('-70px'); // 940x400 screens
      } else {
        setMarginLeft('-200px'); // Large screens
      }
    };

    window.addEventListener('resize', handleResize);

    // Set initial value on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const masonryGridStyle = {
    display: 'flex',
    marginLeft: marginLeft,
    width: 'auto',
  };

  const masonryColumnStyle = {
    paddingLeft: '10px', // Gutter size between columns
    backgroundClip: 'padding-box',
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat mt-20">
      <Break />
      <div className="container mx-auto">
        {/* Sidebar for small screens */}
        <div className="block lg:hidden w-full overflow-x-auto">
          <div className="flex flex-nowrap space-x-4">
            <Sidebar /> {/* Displayed as a horizontal scrollable menu */}
          </div>
        </div>

        {/* Flex container to place sidebar and content side by side on larger screens */}
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar only visible on larger screens */}
          <div className="w-full lg:w-1/4 lg:block hidden">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="container mb-20 flex flex-col items-center py-6 mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative z-10 w-full">
                <Masonry
                  breakpointCols={{
                    default: 4,
                    1200: 3,
                    1000: 2,
                    700: 1,
                  }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                  style={masonryGridStyle}
                  columnStyle={masonryColumnStyle}
                >
                  {COMPUTERDETAILS.map((category) => (
                    <div key={category.id} className="mb-4" style={{ border: '1px solid rgba(255, 255, 255, 0.8)', padding: '5px', borderRadius: '15px', overflow: 'hidden' }}>
                      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                        <img
                          className="w-full object-cover h-40 sm:h-48 md:h-64"
                          src={category.image}
                          alt={category.deviceName}
                        />
                        <div className="p-4">
                          <h2 className="text-base sm:text-lg md:text-xl font-bold">{category.deviceName}</h2>
                          <p className="mt-2 text-gray-600">
                            {category.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computersdisplay;
