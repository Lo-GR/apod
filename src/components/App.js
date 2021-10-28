import DateForm from "./DateForm";
import React, { useState } from "react"

function App() {
  const [date, setDate] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const handleGetAPOD = async () => {
    if(!date){
      console.log("no date selected")
    } else{
      console.log(date)
      await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`, {
        method: "GET",
      })
        .then(response => response.json())
        .then(data => setCurrentImage(data.url))
        .catch(err => console.log(err))
    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col bg-gray-900">
      <DateForm setDate={setDate}/>
      <button onClick={handleGetAPOD} >
        Test
      </button>
      {!currentImage ? null : <img src={currentImage} className=" z-10" alt="NASA Space" />}
    </div>
  );
}

export default App;
