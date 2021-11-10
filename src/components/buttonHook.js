import React, { useState, useEffect } from 'react'
import Button from './Button';

function ButtonHook() {
    const [count, setCount] = useState(0);

    const arttirFunc = () => {
        setCount(count + 1);
    }
    const azaltFunc = () => {
        // setCount(count - 1);
        setCount((prevState) => prevState - 1)
    }

    useEffect(() => {
        console.log("Çalıştı");
    }, [])

    return (
        <div>
            <h1>Hook Comnponent</h1>
            <p>{count}</p>
            <Button color="red" backgroundColor="blue" label="Arttır" func={arttirFunc}></Button>
         
            <button onClick={azaltFunc}>Azalt</button>

        </div>
    )
}

export default ButtonHook
