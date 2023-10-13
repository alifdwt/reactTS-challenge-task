import React, { useState } from "react";

const SalaryCalculator: React.FC = () => {
  const [salary, setSalary] = useState<number>(0);
  const [allowance, setAllowance] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);
  const [grossSalary, setGrossSalary] = useState<number>(0);

  const calculateSalary = () => {
    const netSalary = salary + allowance - deductions;
    setNetSalary(netSalary);
    const grossSalary = salary + allowance;
    setGrossSalary(grossSalary);
  };

  return (
    <div className="flex gap-5 p-4 bg-gray-200 rounded-lg">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Kalkulator Gaji</h1>
        <div className="mb-4">
          <label>Gaji Pokok</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label>Tunjangan</label>
          <input
            type="text"
            value={allowance}
            onChange={(e) => setAllowance(Number(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label>Kewajiban Pokok</label>
          <input
            type="text"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateSalary}
        >
          Hitung Gaji
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <label>Gaji Pokok</label>
        <p className="text-xl font-semibold">
          {salary.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <label>Gaji Bersih:</label>
        <p className="text-xl font-semibold">
          {netSalary.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <label>Gaji Kotor</label>
        <p className="text-xl font-semibold">
          {grossSalary.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </div>
  );
};

export default SalaryCalculator;
