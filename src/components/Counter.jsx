import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 bg-blue-50 rounded-2xl px-6 py-3 shadow-md">
      <button
        onClick={() => setCount(count - 1)}
        className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full"
      >
        -
      </button>
      <span className="text-xl font-semibold w-8 text-center">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full"
      >
        +
      </button>
    </div>
  );
}

export default Counter;