"use client";

import { useState } from "react";

function Counter({ countNum = 0 }) {
  const [count, setCount] = useState(countNum);
  return (
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>
  );
}

export default Counter;
