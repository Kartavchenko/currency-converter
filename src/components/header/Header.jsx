import { useState, useEffect } from "react";
import {
  fetchCurrencyEUR,
  fetchCurrencyUSD,
} from "../../service/fetchCurrency";
import {
  HeaderWrapper,
  CurrencyWrapper,
  HeaderTitle,
  CurrencyList,
  CurrencyUAH,
  ItemCurrency,
} from "./Header.styled";

export default function Header() {
  const [currentEUR, setcurrentEUR] = useState("");
  const [currentUSD, setcurrentUSD] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetchCurrencyEUR();
      setcurrentEUR(response);
    })();

    (async () => {
      const response = await fetchCurrencyUSD();
      setcurrentUSD(response);
    })();
  }, []);

  return (
    <HeaderWrapper>
      <HeaderTitle>Current exchange rate</HeaderTitle>
      <CurrencyWrapper>
        <CurrencyUAH>1 UAH =</CurrencyUAH>
        <CurrencyList>
          <ItemCurrency>{currentEUR} EUR</ItemCurrency>
          <ItemCurrency>{currentUSD} USD</ItemCurrency>
        </CurrencyList>
      </CurrencyWrapper>
    </HeaderWrapper>
  );
}
