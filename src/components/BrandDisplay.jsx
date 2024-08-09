import React from "react";
import Masonry from "react-masonry-css";
import Background from "../assets/background.png";
import ProductImage1 from "../laptops/brand/product1.png";
import ProductImage2 from "../laptops/brand/product2.png";
import ProductImage3 from "../laptops/brand/product3.png";
import "./style.css";

const products = [
  {
    id: 1,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage3,
  },
  {
    id: 2,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage2,
  },
  {
    id: 3,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage1,
  },
  {
    id: 4,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage1,
  },
  {
    id: 5,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage2,
  },
  {
    id: 6,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage3,
  },
  {
    id: 7,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage3,
  },
  {
    id: 8,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage1,
  },
  {
    id: 9,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage2,
  },
  {
    id: 10,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage1,
  },
  {
    id: 11,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage3,
  },
  {
    id: 12,
    title: "Microsoft",
    description:
      "Combination of Elegance and Portability with designer accessories.",
    image: ProductImage2,
  },
];

const Contact = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container mb-20 flex items-center justify-between py-6 mx-auto px-10">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mb-20 mx-auto py-6 px-10">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {products.map((product) => (
              <div key={product.id} className="tile-border mb-4">
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
                  <img
                    className="w-full object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="mt-2 text-gray-600">{product.description}</p>
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
