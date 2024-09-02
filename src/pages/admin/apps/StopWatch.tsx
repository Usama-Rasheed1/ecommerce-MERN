import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInString = minutes.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setRunning(false);
  };

  useEffect(() => {
    let intervalId: number;
    if (running) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <div className="adminContainer">
      <Sidebar />

      <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopWatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setRunning((prev) => !prev)}>
              {running ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;
