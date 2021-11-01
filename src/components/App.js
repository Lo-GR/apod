import DateForm from "./DateForm";
import React, { useState } from "react"
import Background from "../assets/bg.png"
import TWButton from "./TWButton";

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
        .then(data => setCurrentImage(data[0].url))
        .catch(err => console.log(err))
    }
  }
  const handleGetRandomAPOD = async () => {
    await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=1`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => setCurrentImage(data[0].url))
      .catch(err => console.log(err))
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col overflow-hidden">
      <img src={Background} alt="background" className="-z-10 flex absolute h-auto backgroundImage" />
      <DateForm setDate={setDate}/>
      <div className="flex flex-row w-2/6 mt-8 justify-evenly items-center">
        <TWButton click={handleGetAPOD} text="Get APOD" />
        <TWButton click={handleGetRandomAPOD} text="Random APOD" />
      </div>
      {!currentImage ? null : <img src={currentImage} className=" z-10" alt="NASA Space" />}
    </div>
  );
}

export default App;
