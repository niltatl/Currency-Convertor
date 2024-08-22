import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_0eqKUmhQ2jUVj3tKjdQh6PKAYLHphQvskIcgrKMX";

export default function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const convert = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const sonuc = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(sonuc);
    
  };
  return (
    <>
      <div className="currency-div">
        <div>
          <h3>Currency Converter</h3>
        </div>
      </div>
      <div>
        <input
          value={amount}
          type="number"
          className="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowCircleRight
          style={{ fontSize: "25px", marginRight: "10px", marginTop: "30px" }}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <input
          value={result}
          className="amount"
          type="number"
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <button className="convert-button" onClick={convert}>
        Convert
      </button>
    </>
  );
}
