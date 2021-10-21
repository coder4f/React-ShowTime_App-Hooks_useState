import React, {useState} from "react";

function App() {
  
  const [time, setTime] = useState("");

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  function handleClick() {
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
