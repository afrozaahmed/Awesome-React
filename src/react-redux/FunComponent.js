import React, {useState} from 'react';

function FunComponent(){
    const [count, setCount] = useState(0);

   function increment(){
       setCount(count+1);
   }

   function decrement(){
setCount(count-1);
   }

    return (
        <div>
            <p>
                You Clicked {count} times..
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default FunComponent;



