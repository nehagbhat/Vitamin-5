import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <CounterDisplay counter={counter} />
      <CounterControls onIncrement={handleIncrement} onDecrement={handleDecrement} />
      {counter > 5 && <p>You passed 5!</p>}
    </div>
  );
}

export default CounterPage;
