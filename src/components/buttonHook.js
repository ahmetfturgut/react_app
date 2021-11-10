import React, { useState, useEffect,useRef } from 'react'
import Button from './Button'; 

function ButtonHook({params}) {
    const ref = useRef(null)
    const [count, setCount] = useState(0);

    console.log("ref");

    const arttirFunc = () => {
        setCount(count + 1);
    }
    const azaltFunc = () => {
        // setCount(count - 1);
        setCount((prevState) => prevState - 1)
    }

    useEffect(() => {
         console.log("useEffect")
    },[count])

    return (
        <div>
            <h1>{params.headerName}</h1>
            <h1>{params.bodyName}</h1>
            <p>{count}</p>
            <Button color="red" backgroundColor="blue" label="Arttır" func={arttirFunc}></Button>
            <Button color="orange" backgroundColor="yellow" label="Azalt" func={azaltFunc}></Button>
            <hr></hr> 
          

        </div>
    )
}

export default ButtonHook
