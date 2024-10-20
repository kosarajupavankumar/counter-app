import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>you clicked {count} times</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
