// src/components/CurrencyConverter.tsx

import React, { useState } from "react";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("IDR");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const exchangeRates: Record<string, number> = {
    USD: 1.0,
    IDR: 15708,
    JPY: 149,
    EUR: 0.94,
    AUD: 1.56,
    MYR: 4.72,
  };

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
    } else {
      const amountInUSD = amount / exchangeRates[fromCurrency];
      const convertedAmount = amountInUSD * exchangeRates[toCurrency];
      setConvertedAmount(convertedAmount);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="w-1/2 p-2 border rounded-md"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select
          className="w-1/4 ml-2 p-2 border rounded-md"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="mx-2">to</span>
        <select
          className="w-1/4 p-2 border rounded-md"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={convertCurrency}
      >
        Convert
      </button>
      {convertedAmount !== null && (
        <p className="mt-4">
          {amount} {fromCurrency} is equal to {convertedAmount.toFixed(2)}{" "}
          {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
