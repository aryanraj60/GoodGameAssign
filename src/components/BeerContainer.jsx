import React from "react";
import BeerCard from "./BeerCard";
import { RiMovie2Line } from "react-icons/ri";

const BeerContainer = ({ beers }) => {
  return beers?.length > 0 ? (
    <>
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-5 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {beers.map((beer, index) => (
          <BeerCard key={index} beer={beer} />
        ))}
      </div>
    </>
  ) : (
    <div className="w-full gap-6 flex flex-col justify-center items-center text-white h-[60vh]">
      <div className="w-24 h-24 p-5 rounded-full mb-4 bg-main text-subMain text-4xl flex-colo">
        <RiMovie2Line />
      </div>
      <p className="text-border text-sm">
        It seem's like we don't have this beer
      </p>
    </div>
  );
};

export default BeerContainer;
