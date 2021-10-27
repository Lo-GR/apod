import React from 'react'

export default function DateForm({ setDate }) {
  return (
    <div className="flex items-center">
      <input type="date" onChange={(e) => setDate(e.target.value)}/>
    </div>
  )
}
