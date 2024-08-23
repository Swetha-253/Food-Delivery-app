import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex, index }) => {
  const handleData = () => {
    // Toggle the showIndex state based on whether the current index is open
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    
    <div>
       { console.log(index)} 
       <div className="w-6/12 mx-auto my-1 bg-gray-200 p-2 shadow-sm">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleData}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showIndex === index ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Show ItemList only if the showIndex matches the current index */}
        {showIndex===index && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
