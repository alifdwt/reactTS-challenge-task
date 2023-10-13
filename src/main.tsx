import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countdown from "./pages/Countdown.tsx";
import TaskList from "./pages/Index.tsx";
import Tictac from "./pages/Tictac.tsx";
import MobileLegends from "./pages/MobileLegends.tsx";
import Salary from "./pages/Salary.tsx";
import WordScramble from "./pages/WordScramble.tsx";
import TicTacToe from "./pages/TicTacToe.tsx";
import CurrencyConverter from "./pages/CurrencyConverter.tsx";
import DegreeConverter from "./pages/DegreeConverter.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/mobile-legends",
    element: <MobileLegends />,
  },
  {
    path: "/countdown",
    element: <Countdown />,
  },
  {
    path: "/tictac",
    element: <Tictac />,
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
  {
    path: "/salary",
    element: <Salary />,
  },
  {
    path: "/acak-kata",
    element: <WordScramble />,
  },
  {
    path: "/currency",
    element: <CurrencyConverter />,
  },
  {
    path: "/degree",
    element: <DegreeConverter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
