import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BeerContainer from "../components/BeerContainer";
import { getBeers } from "../Axios/getBeers";
import Loader from "../components/Loader";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setIsLoading(true);
        const beers = await getBeers();

        setBeers(beers);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBeers();
  }, []);
  return (
    <div className="min-h-screen bg-[#080A1A]">
      <Navbar
        setBeers={setBeers}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <div className="px-2 md:px-6 py-10">
        {isLoading ? (
          <div className="flex items-centerh-[80vh]">
            <Loader />
          </div>
        ) : (
          <BeerContainer beers={beers} />
        )}
      </div>
    </div>
  );
};

export default Home;
