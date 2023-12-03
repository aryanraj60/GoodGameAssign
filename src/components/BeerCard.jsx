import React, { useState } from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <img
        src={beer.image_url}
        alt={beer?.name}
        className="w-full h-80 object-contain"
      />

      <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-[#080A1A] bg-opacity-75 px-4 py-3 text-white">
        <div className="flex flex-col items-center justify-between">
          <h3 className="font-semibold">{beer?.name}</h3>

          <p className="mt-3">Year: {beer?.tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
