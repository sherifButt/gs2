import React from 'react'

const FieldLabel = ({ forLabel, text, className }) => {
   return (
      <label
         className={`text-2xl font-semibold ${className}`}
         htmlFor={forLabel}>
         {text}
      </label>
   )
}

export default FieldLabel
