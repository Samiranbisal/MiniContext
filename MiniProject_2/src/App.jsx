import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-4 text-7xl text-blue-700 bg-pink-600 font-bold">
        Project 2
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
