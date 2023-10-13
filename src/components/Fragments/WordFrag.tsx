import React, { useState, useEffect, useCallback } from "react";

const words = ["react", "typescript", "javascript", "programming", "developer"];

const WordScramble: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [scrambledWord, setScrambledWord] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showNextWordButton, setShowNextWordButton] = useState(false);
  console.log(showNextWordButton);

  const getRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }, []);

  const scrambleWord = (word: string) => {
    const wordArray = word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join("");
  };

  const startNewGame = useCallback(() => {
    const newWord = getRandomWord();
    setCurrentWord(newWord);
    setScrambledWord(scrambleWord(newWord));
    setIsCorrect(null);
    setUserAnswer("");
    setShowNextWordButton(false);
  }, [
    getRandomWord,
    setCurrentWord,
    setScrambledWord,
    setIsCorrect,
    setUserAnswer,
    setShowNextWordButton,
  ]);

  const checkAnswer = () => {
    if (userAnswer === currentWord) {
      setIsCorrect(true);
      setScore(score + 1);
      setShowNextWordButton(true);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Acak Kata</h2>
      <p className="text-lg">Skor: {score}</p>
      <p className="text-lg">Susun kata di bawah ini:</p>
      <p className="text-3xl font-bold mb-4">{scrambledWord}</p>
      {isCorrect === null && (
        <div>
          <input
            type="text"
            placeholder="Your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full mb-4"
          />
          <button
            onClick={checkAnswer}
            className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700"
          >
            Cek Jawaban
          </button>
          <button
            onClick={startNewGame}
            className="bg-red-500 text-white rounded-md p-2 ml-2 hover:bg-blue-700"
          >
            Kata Lain
          </button>
        </div>
      )}
      {isCorrect === true && (
        <div>
          <p className="text-green-500 text-lg mt-4 font-semibold">Correct!</p>
          <button
            onClick={startNewGame}
            className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 mt-4"
          >
            Kata Selanjutnya
          </button>
        </div>
      )}
      {isCorrect === false && (
        <div>
          <p className="text-red-500 text-lg mt-4 font-semibold">
            Jawabanmu salah, ayo coba lagi!
          </p>

          <button
            onClick={startNewGame}
            className="bg-red-500 text-white rounded-md p-2 ml-2 hover:bg-blue-700"
          >
            Kata Lainnya
          </button>
        </div>
      )}
    </div>
  );
};

export default WordScramble;
