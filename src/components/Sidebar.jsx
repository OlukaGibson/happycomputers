import React, { useState } from "react";
import { BRANDS, USAGE, TYPE, CONDITION, RAM, PROCESSOR, STORAGE, SCREEN_SIZE, STORAGE_TYPE, OPERATING_SYSTEM, GRAPHICS_CARD, GRAPHICS_CARD_SIZE, GENERATION } from "../constants";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleMouseEnter = (section) => {
    setOpenSection(section);
  };

  const handleMouseLeave = () => {
    setOpenSection(null);
  };

  const renderSection = (title, items) => (
    <div
      className="mb-2 lg:mb-4 group"
      onMouseEnter={() => handleMouseEnter(title)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="cursor-pointer flex justify-between items-center font-bold py-1 px-2 bg-gray-700 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 transition-all"
      >
        <span>{title}</span>
        <span>{"▼"}</span> {/* Arrow icon or indicator */}
      </div>
      <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openSection === title ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="mt-1 bg-gray-800 bg-opacity-0 rounded-lg text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="py-1 px-2 hover:bg-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 bg-opacity-0 p-2 shadow-lg rounded-lg backdrop-filter backdrop-blur-sm lg:w-64 flex lg:block">
      {/* Title for the sidebar */}
      <div className="text-white font-bold text-xl mb-4">
        Categories
      </div>
      {/* Render sections */}
      <div className="flex flex-nowrap lg:flex-col lg:space-y-2 overflow-x-auto lg:overflow-visible px-4 py-2">
        {[
          { title: "Device Brand", items: BRANDS },
          { title: "Device Usage", items: USAGE },
          { title: "Device Type", items: TYPE },
          { title: "Device Condition ", items: CONDITION },
          { title: "RAM Size", items: RAM },
          { title: "CPU Processor ", items: PROCESSOR },
          { title: "Storage Capacity", items: STORAGE.map(size => `${size} GB`) },
          { title: "Display size", items: SCREEN_SIZE.map(size => `${size} inches`) },
          { title: "Storage Type", items: STORAGE_TYPE },
          { title: "Operating System", items: OPERATING_SYSTEM },
          { title: "Graphics Card", items: GRAPHICS_CARD },
          { title: "Graphics Card Size", items: GRAPHICS_CARD_SIZE.map(size => `${size} GB`) },
          { title: "Device Generation", items: GENERATION }
        ].map(({ title, items }) => (
          <div key={title}>
            {renderSection(title, items)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
