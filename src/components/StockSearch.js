import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { ticker as tickerState, company as companyState } from "../states";

import { searchTickers, getTickerDetails } from "../services/tickerService";

export default function StockSearch(props) {
  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const [ticker, setTicker] = useRecoilState(tickerState);
  const [company, setCompany] = useRecoilState(companyState);

  const fetchDetails = async (e) => {
    let ticker = e.split(",")[0].trim();
    setTicker(ticker);
    setDataSource([]);

    getTickerDetails(ticker).then((res) => {
      console.log("response from getTickerDetails" + JSON.stringify(res));

      setCompany(res);
    });
  };

  const getTickerFromAPi = async (e) => {
    await searchTickers(e).then((res) => {
      const ArraysofData = res.map((f) => [f.symbol + " ," + f.name]);
      const FlatArray = [].concat(...ArraysofData);

      setDataSource(FlatArray);
    });
  };

  useEffect(() => {
    if (search != "") {
      getTickerFromAPi(search);
    }
  }, [search]);

  const handleSearch = (e) => {
    if (e) {
      setSearch(e);
    } else {
      setSearch(e);
    }
  };

  return (
    <div style={{ padding: "1%" }}>
      <AutoComplete
        style={{ width: "400px" }}
        value={search}
        onChange={(e) => handleSearch(e)}
        onSelect={(e) => fetchDetails(e)}
        dataSource={dataSource}
        placeholder="search Ticker"
      />
    </div>
  );
}
