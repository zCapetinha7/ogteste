import { useState } from 'react'


export function Teste() {
    const [counter, setCounter] = useState(0)

    function addCounter() {
        setCounter(counter + 1)
    }

    return (

        <div>
            <button onClick = {addCounter}>{counter}</button>

        </div>
    )
}