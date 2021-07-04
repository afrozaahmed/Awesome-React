import {React, useState} from 'react';

export default function WithoutThrottlingAndDebouncing(){
const [value,setvalue] = useState("")
const [count,setCount] = useState(0)

    let handleChange = (e)=>{
        setCount(count+1);
        setvalue(e.target.value);
    }

        return (
            <div>
                <h2>Type in the Box</h2>
                <input value={value} onChange = {handleChange}></input>
                <div>Span Data:{value}</div>
                <div>
                    <h3>Calls Done: {count}</h3>
                </div>
            </div>
        )
}