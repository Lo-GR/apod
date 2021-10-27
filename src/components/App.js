import DateForm from "./DateForm";
import React, { useState } from "react"

function App() {
  const [date, setDate] = useState("empty")
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <DateForm setDate={setDate}/>
      <button onClick={() => console.log(date)} >
        Test
      </button>
    </div>
  );
}

export default App;
