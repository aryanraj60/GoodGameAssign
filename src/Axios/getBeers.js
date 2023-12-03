import axios from "axios";

const getBeerBySearch = async (query) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/v2/beers?beer_name=${query}`
  );

  return response.data;
};

const getBeers = async (movie) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/v2/beers`
  );

  return response.data;
};

export { getBeerBySearch, getBeers };
