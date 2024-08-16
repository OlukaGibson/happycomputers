import React, { useState } from "react";
import { BRANDS, SERIES, USAGE, TYPE, CONDITION, RAM, PROCESSOR, STORAGE, SCREEN_SIZE, STORAGE_TYPE, OPERATING_SYSTEM, GRAPHICS_CARD_AVAILABLE, GRAPHICS_CARD, GRAPHICS_CARD_SIZE, GENERATION } from "../constants"; 

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderSection = (title, items) => (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-between items-center font-bold text-lg py-2 px-4 bg-gray-400 bg-opacity-10 text-white rounded-lg hover:bg-opacity-10 transition-all"
        onClick={() => toggleSection(title)}
      >
        <span>{title}</span>
        <span>{openSections[title] ? "▲" : "▼"}</span> {/* Arrow icon */}
      </div>
      {openSections[title] && (
        <ul className="pl-4 mt-2 list-disc text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300 py-1 px-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="w-64 bg-gray-900 bg-opacity-70 p-6 shadow-lg rounded-lg backdrop-filter backdrop-blur-sm">
      {renderSection("Brand", BRANDS)}
      {renderSection("Series", SERIES)}
      {renderSection("Usage", USAGE)}
      {renderSection("Type", TYPE)}
      {renderSection("Condition", CONDITION)}
      {renderSection("RAM", RAM)}
      {renderSection("Processor", PROCESSOR)}
      {renderSection("Storage (GB)", STORAGE.map(size => `${size} GB`))}
      {renderSection("Screen Size", SCREEN_SIZE.map(size => `${size} inches`))}
      {renderSection("Storage Type", STORAGE_TYPE)}
      {renderSection("Operating System", OPERATING_SYSTEM)}
      {renderSection("Graphics Card Available", GRAPHICS_CARD_AVAILABLE)}
      {renderSection("Graphics Card", GRAPHICS_CARD)}
      {renderSection("Graphics Card Size (GB)", GRAPHICS_CARD_SIZE.map(size => `${size} GB`))}
      {renderSection("Generation", GENERATION)}
    </div>
  );
};

export default Sidebar;
