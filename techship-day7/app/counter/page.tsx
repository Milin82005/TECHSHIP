"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-4">
        Counter App
      </h1>

      <h2 className="text-2xl mb-4">
        Count: {count}
      </h2>

      <div className="flex gap-4">

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

      </div>

    </div>
  );
}