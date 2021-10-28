import React from 'react'

export default function DateForm({ setDate }) {
  return (
    <div className="flex items-center">
      <input className="
        text-3xl
        w-full
        pl-4
        pr-10
        py-3
        rounded-xl
        shadow-sm
        focus:outline-none focus:shadow-outline
        text-white
        bg-gray-700
        font-medium"
        type="date" onChange={(e) => setDate(e.target.value)}/>
    </div>
  )
}
