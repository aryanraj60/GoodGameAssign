import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getBeerBySearch, getBeers } from "../Axios/getBeers";

const Navbar = ({ setBeers, setIsLoading }) => {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleSearch = async (e) => {
    try {
      setIsLoading(true);
      if (e.target.value === "") {
        const defaultBeers = await getBeers();
        setBeers(defaultBeers);
      } else {
        const beers = await getBeerBySearch(e.target.value);
        setBeers(beers);
      }
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false);
    }
  };

  //Usecallback for memomized version of the fuction
  const optimizedSeachMovieFunc = useCallback(debounce(handleSearch), []);

  return (
    <div className="shadow-md">
      <div className="container mx-auto py-6 px-2 grid grid-cols-[2fr_0.5fr] gap-2 justify-between items-center">
        <div className="">
          <form className="w-full bg-[#E0D5D5] text-sm rounded flex justify-center items-center gap-1">
            <button className="bg-[#F20000] w-12 h-12 rounded flex justify-center items-center text-white">
              <FaSearch size={18} />
            </button>
            <input
              type="search"
              required
              onChange={optimizedSeachMovieFunc}
              placeholder="Search your favourite Beer"
              className="w-full font-medium border-none outline-none placeholder:text-border text-sm h-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent p-2 text-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
