import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="App flex  justify-center items-center h-screen  ">
    

      <div className='time '>
      <h1 className="sd">STOPWATCH</h1>
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
        <div className='bn'>
          <button className="bg-customGreen text-white text-xs rounded p-1 m-2" onClick={() => setRunning(true)}   >START</button>
          <button  className="bg-customGreen text-white text-xs rounded p-1 m-2" onClick={() => setRunning(false)}>STOP</button>
          <button  className="bg-customGreen text-white  text-xs rounded p-1 m-2" onClick={() => setTimer(0)}>RESTART</button>
        </div>
      </div>
    </div>
  );
}

export default App;
