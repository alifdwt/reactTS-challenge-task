import React, { useState, useEffect, useCallback } from "react";

const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin", "Reamur"];

const DegreeConverter: React.FC = () => {
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [input, setInput] = useState("32");
  const [output, setOutput] = useState("");
  const [background, setBackground] = useState("");

  const convertAllToCelsius = useCallback((temp: number, unit: string) => {
    switch (unit) {
      case "Celsius":
        return temp;
      case "Fahrenheit":
        return ((temp - 32) * 5) / 9;
      case "Kelvin":
        return temp - 273.15;
      case "Reamur":
        return (temp * 5) / 4;
      default:
        return undefined;
    }
  }, []);

  const convertFromCelsius = useCallback((temp: number, to: string) => {
    switch (to) {
      case "Celsius":
        return `${temp}`;
      case "Fahrenheit":
        return `${(temp * 9) / 5 + 32}`;
      case "Kelvin":
        return `${temp + 273.15}`;
      case "Reamur":
        return `${(temp * 4) / 5}`;
      default:
        return "";
    }
  }, []);

  const convert = useCallback(() => {
    const inputTemp = parseFloat(input);
    if (!isNaN(inputTemp)) {
      const celsiusTemp = convertAllToCelsius(inputTemp, fromUnit);
      if (celsiusTemp !== undefined) {
        const result = convertFromCelsius(celsiusTemp, toUnit);
        if (result !== "") {
          setOutput(result);
        }
        if (celsiusTemp < 20) {
          setBackground(
            "https://media.tenor.com/Mhc2Bss8gLYAAAAC/spongebob-cold.gif"
          );
        } else if (celsiusTemp >= 20 && celsiusTemp <= 35) {
          setBackground(
            "https://media.tenor.com/IHYlUOyvFzEAAAAd/spongebob-walking.gif"
          );
        } else {
          setBackground(
            "https://media.tenor.com/C6sWJAK3V4sAAAAC/spongebob-squarepants-spongebob.gif"
          );
        }
      }
    } else {
      console.log("Invalid input! Please enter a valid number.");
    }
  }, [input, fromUnit, toUnit, convertAllToCelsius, convertFromCelsius]);

  useEffect(() => {
    convert();
  }, [convert]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Temperature Converter</h2>
        <div className="mb-4">
          <label className="mr-2">From:</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            {temperatureUnits.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="mr-2">To:</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            {temperatureUnits.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="mr-2">Input:</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-4 flex flex-col">
            <label className="mr-2 text-center">Origin</label>
            <span className="font-bold text-3xl">
              {input}
              {fromUnit !== "Kelvin"
                ? `° ${fromUnit.charAt(0)}`
                : ` ${fromUnit.charAt(0)}`}
            </span>
          </div>
          <div className="mt-4 flex flex-col">
            <label className="mr-2 text-center">Result:</label>
            <span className="font-bold text-3xl">
              {output}
              {toUnit !== "Kelvin"
                ? `° ${toUnit.charAt(0)}`
                : ` ${toUnit.charAt(0)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeConverter;
