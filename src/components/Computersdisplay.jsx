import React from "react";
import Masonry from "react-masonry-css";
import { CATEGORIES } from "../constants";
import Sidebar from "./Sidebar";
import Break from "./Break";

// Styled components using inline styles
const tileBorderStyle = {
  border: '1px solid rgba(255, 255, 255, 0.8)', // White border with opacity
  padding: '5px', // Space between border and content
  borderRadius: '15px', // Rounded corners
  overflow: 'hidden', // Prevent content overflow
};

const masonryGridStyle = {
  display: 'flex',
  marginLeft: '0', // Removed margin to adjust for smaller screens
  width: 'auto',
};

const masonryColumnStyle = {
  paddingLeft: '10px', // Reduced gutter size for smaller screens
  backgroundClip: 'padding-box',
};

const Computersdisplay = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
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
            <div className="container mb-20 flex flex-col items-center py-6 mx-auto px-4 sm:px-6 lg:px-10">
              <div className="relative z-10 w-full">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                  style={masonryGridStyle}
                  columnStyle={masonryColumnStyle}
                >
                  {CATEGORIES.map((category) => (
                    <div key={category.id} className="mb-4" style={tileBorderStyle}> {/* Reduced bottom margin */}
                      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                        <img
                          className="w-full object-cover h-40 sm:h-48 md:h-64" // Adjusted heights
                          src={category.image}
                          alt={category.usage}
                        />
                        <div className="p-4">
                          <h2 className="text-base sm:text-lg md:text-xl font-bold">{category.usage}</h2> {/* Adjusted text size */}
                          <p className="mt-2 text-gray-600 text-xs sm:text-sm hidden sm:block">
                            {category.description}
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
