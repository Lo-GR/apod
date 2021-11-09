import React from 'react'

export default function ImageInfo({ explanation, date, title }) {
  return (
    <div className="flex bg-white w-2/5 rounded-lg mx-5 p-5 justify-evenly flex-col items-baseline">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  )
}
