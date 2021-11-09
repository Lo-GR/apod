import React from 'react'

export default function ImageInfo({ explanation, date, title }) {
  return (
    <div className="flex bg-white w-2/5 rounded-lg mx-5 p-10 justify-evenly flex-col items-baseline">
      <h2 className="text-gray-700 text-6xl my-2">{title}</h2>
      <p className="text-gray-700 text-lg my-2">{date}</p>
      <p className="text-gray-700 my-2">{explanation}</p>
    </div>
  )
}
