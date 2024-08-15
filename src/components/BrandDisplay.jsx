import React from "react";
import Masonry from "react-masonry-css";
import "./style.css";
import { CATEGORIES } from "../constants";

const Contact = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <div
      className="absolute inset-0 relative bg-cover bg-center bg-no-repeat"
    >
      <div className="container mb-20 flex items-center justify-between py-6 mx-auto px-10">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 container mb-20 mx-auto py-6 px-10">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {CATEGORIES.map((category) => (
              <div key={category.id} className="tile-border mb-4">
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                  <img
                    className="w-full object-cover"
                    src={category.image}
                    alt={category.usage}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{category.usage}</h2>
                    <p className="mt-2 text-gray-600">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Contact;
