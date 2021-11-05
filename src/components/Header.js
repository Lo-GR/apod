import React from 'react'
import TWButton from "./TWButton";
import DateForm from "./DateForm";

export default function Header({ handleGetAPOD, handleGetRandomAPOD, currentImage, setDate}) {
  return (
    <div className="w-screen bg-white h-20 fixed top-0 justify-between flex flex-row items-center px-10 border-solid border-1 border-indigo-900 z-20">
      <h1 className="font-serif font-black text-lg">Astronomy Picture of the Day</h1>
      {!currentImage ? 
        null :
        <div className="flex flex-row">
          <DateForm setDate={setDate} />
          <TWButton click={handleGetAPOD} text="Get APOD" />
          <TWButton click={handleGetRandomAPOD} text="Random APOD" />
        </div>
      }
      <p>test</p>
    </div>
  )
}
