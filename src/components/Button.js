import React from 'react'

export default function Button({
    color,
    backgroundColor,
    label,
    func
}) {
    return (
        <>
            <button onClick={func} style={{
                backgroundColor: backgroundColor,
                color: color 
            }} >{label}</button>
        </>
    )
}
