import DateForm from "./DateForm";
import React, { useState } from "react"

function App() {
  const [date, setDate] = useState("empty");
  const [currentImage, setCurrentImage] = useState("");
  const handleGetAPOD = async () => {
    await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=1`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => console.log(data[0].url))
      .catch(err => console.log(err))
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <DateForm setDate={setDate}/>
      <button onClick={handleGetAPOD} >
        Test
      </button>
    </div>
  );
}

export default App;
