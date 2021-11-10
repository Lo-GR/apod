import React from 'react'
import TWButton from "./TWButton";
import DateForm from "./DateForm";

export default function Header({ handleGetAPOD, handleGetRandomAPOD, currentImage, setDate}) {
  return (
    <div className="w-screen bg-white h-20 fixed top-0 justify-between flex flex-row items-center px-5 border-solid border-1 border-indigo-900 z-20">
      <h1 className="font-serif text-2xl font-bold">Astronomy Picture of the Day</h1>
      {!currentImage ? 
        null :
        <div className="flex flex-row justify-around w-2/5">
          <div className="mx-2">
            <DateForm setDate={setDate} />
          </div>
          <div className="mx-2">
            <TWButton click={handleGetAPOD} text="Get APOD" />
          </div>
          <div className="mx-2">
            <TWButton click={handleGetRandomAPOD} text="Random APOD" />
          </div>
        </div>
      }
      <p>test</p>
    </div>
  )
}
