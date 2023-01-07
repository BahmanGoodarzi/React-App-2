import React from 'react'

const Butten = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button type='butten' style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-2 text-[12px] hover:drop-shadow-sm`}>
      {text}
    </button>
  )
}

export default Butten