import React from 'react'

export default function TWButton({ click, text }) {
  return (
    <button onClick={click} className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full text-xl" >
      {text}
    </button>
  )
}
