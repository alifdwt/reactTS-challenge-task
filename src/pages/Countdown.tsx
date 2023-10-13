import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {
  const [targetDate, setTargetDate] = useState("");
  const [countdown, setCountdown] = useState("0d : 0h : 0m : 0s");
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(e.target.value);
  };

  const startCountdown = () => {
    const targetTime = new Date(targetDate).getTime();
    setIsRunning(true);
    if (isNaN(targetTime)) {
      alert("Format tanggal dan waktu tidak valid");
      return;
    }

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeLeft = targetTime - currentTime;

      if (timeLeft <= 0) {
        if (intervalId) clearInterval(intervalId);
        setCountdown("Waktu telah habis!");
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
      }
    };

    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
    setIntervalId(newIntervalId);
  };

  const resetCountdown = () => {
    setCountdown("0d : 0h : 0m : 0s");
    if (intervalId) clearInterval(intervalId);
    setTargetDate("");
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Countdown App</h1>
        <input
          className="w-full border border-gray-300 rounded mb-4 p-2"
          type="datetime-local"
          value={targetDate}
          onChange={handleInputChange}
        />
        <div className="flex space-x-4">
          {!isRunning ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={startCountdown}
            >
              Start Countdown
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={resetCountdown}
            >
              Reset Countdown
            </button>
          )}
        </div>
        <div className="text-2xl font-bold mt-4">{countdown}</div>
      </div>
    </div>
  );
}

export default App;
