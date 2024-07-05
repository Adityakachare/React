import { useState, useEffect } from "react";

function useCurrencyInfo(currencyInfo) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyInfo}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currencyInfo]));
    console.log(data);
  }, [currencyInfo]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
