import { Link } from "react-router-dom";
import tasksObj from "../interface/Tasks";

const tasks: tasksObj[] = [
  {
    id: 1,
    title: "Mobile Legends",
    level: "Medium",
    language: "TypeScript, React",
    link: "/mobile-legends",
  },
  {
    id: 2,
    title: "Count Duration",
    level: "Medium",
    language: "TypeScript, React",
    link: "/countdown",
  },
  // {
  //   id: 3,
  //   title: "TicTac",
  //   level: "Medium",
  //   language: "TypeScript, React",
  //   link: "/tictac",
  // },
  // {
  //   id: 4,
  //   title: "Tic Tac Toe",
  //   level: "Hard",
  //   language: "TypeScript, React",
  //   link: "/tictactoe",
  // },
  {
    id: 5,
    title: "Kalkulator Gaji",
    level: "Easy",
    language: "TypeScript, React",
    link: "/salary",
  },
  {
    id: 6,
    title: "Acak Kata",
    level: "Hard",
    language: "TypeScript, Javascript",
    link: "/acak-kata",
  },
  {
    id: 7,
    title: "Currency Converter",
    level: "Medium",
    language: "TypeScript, Javascript",
    link: "/currency",
  },
  {
    id: 8,
    title: "Degree Converter",
    level: "Hard",
    language: "TypeScript, Javascript",
    link: "/degree",
  },
];

const TaskList = () => {
  return (
    <div className="flex justify-center border-solid border-2 border-indigo-600 rounded py-2 px-3 m-8">
      <div className="my-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Challenge on Task</h1>
          <p className="mt-2">
            Select and complete the task that already provided below
          </p>
        </div>
        {tasks.map((task) => (
          <div className="mt-5" key={task.id}>
            <div className="border p-3">
              <h3 className="font-bold text-xl">{task.title}</h3>
              <ul>
                <li>
                  Level:{" "}
                  <span
                    className={
                      task.level === "Medium"
                        ? "text-blue-700"
                        : task.level === "Hard"
                        ? "text-red-700"
                        : task.level === "Easy"
                        ? "text-green-700"
                        : "text-black"
                    }
                  >
                    {task.level}
                  </span>
                </li>
                <li>Language: {task.language}</li>
              </ul>
              <div className="mt-4">
                <Link
                  to={task.link}
                  className="font-bold p-2 text-white bg-blue-600 rounded"
                >
                  Buka Aplikasi
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
