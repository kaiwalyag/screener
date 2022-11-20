import React, { useEffect, useState } from "react";

import { AutoComplete } from "antd";
import axios from "axios";
// import "./index.css";
// import "antd/dist/antd.css";
// import "./App.css";
// import "./styles.css";

export default function StockSearch(props) {

  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState([]);

    const clearState = () => {
      setDataSource([]);
    };
    const getTickerFromAPi = async e => {
      const response = await axios.get(
        `https://ticker-2e1ica8b9.now.sh/keyword/${e}`
      );
      const ArraysofData = response.data.map(f => [f.symbol + " ," + f.name]);
      const FlatArray = [].concat(...ArraysofData);

      setDataSource(FlatArray);
    };

    useEffect(() => {
      if (search != "" ) {
        getTickerFromAPi(search);
      }

   }, [search]);
   

    const handleSearch = e => {
      if (e) {
        setSearch(e) ;
      } else {
        setSearch(e);
      }
    };

    return (
      <div style={{ padding: "10%", marginLeft: "5%" }}>
        <h2>Auto Complete Search end point for Stock market symbols,names</h2>
        <AutoComplete
          style={{ width: "90%" }}
          className="d"
          value={search}
          onChange={e => handleSearch(e)}
          onSelect={clearState}
          dataSource={dataSource}
          placeholder="search Ticker"
        />        
      </div>
    );
  
}