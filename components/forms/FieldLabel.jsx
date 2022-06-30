import React from 'react'

const FieldLabel = ({ forLabel,text }) => {
    return <label className="text-2xl font-semibold" htmlFor={ forLabel }>{ text}</label>
}

export default FieldLabel
