import axios from "axios";

export const searchTickers = async (e) => {
  let url = `https://ticker-2e1ica8b9.now.sh/keyword/${e}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getTickerDetails = async (ticker) => {
  let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=BIKJC7BPVIMXITYH`;

  console.log("calling getTickerDetails api for :" + ticker);

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
