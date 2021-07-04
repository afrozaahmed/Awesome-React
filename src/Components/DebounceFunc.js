import React from 'react';

export default function DebounceFunc(){

    const [inputVal, setInputVal] = React.useState("")
    const [query, setQuery] = React.useState("")
    const inputRef = React.useRef("")
    const [callCount, setCallCount] = React.useState(0)
    const timeoutId = React.useRef()

    function fakeAPICall() {
        return new Promise(resolve => {
          setTimeout(resolve, 300)
        })
      }

    function handleChange(e) {
        setInputVal(e.target.value)
        inputRef.current = e.target.value
      }

      React.useEffect(() => {
        clearTimeout(timeoutId.current)
        if (!inputVal.trim()) return
        timeoutId.current = setTimeout(() => {
          setQuery(inputRef.current)
          fakeAPICall()
          .then(() => setCallCount(callCount => callCount + 1))
        }, 800)
      }, [inputVal])
        return (
            <div>
              <h2>Type in this Box ⬇️</h2>
              <input onChange={handleChange} value={inputVal}/>
              <p>Current Data: {inputVal}</p>
              <p>Query Sent: {query}</p>
              <p>Calls Done: {callCount}</p>
            </div>
          )
}