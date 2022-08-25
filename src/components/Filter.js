import React from 'react'
import { useSearchParams } from 'react-router-dom';



function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('age'));
    // console.log(searchParams.get('city'));
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return (
        <div>
            <h4>Age is: {age}</h4>
            <h4>City is: {city}</h4>
            <input type="text" onChange={(e) => setSearchParams({ text: e.target.value, age: 25 })} placeholder="Set Name" />
            <button onClick={() => setSearchParams({ age: 30 })}>CLick</button>
        </div>
    )
}

export default Filter