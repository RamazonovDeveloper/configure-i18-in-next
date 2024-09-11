"use client";

import React, { useState } from "react";

function ExampleClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-3 items-center">
      <button className="border-[1px] p-3 rounded-xl" onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <span>{count}</span>
      <button className="border-[1px] p-3 rounded-xl" onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleClientComponent;
