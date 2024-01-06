import { useState } from "react";

const UseStateGotcha = () => {
  const [value,setValue]=useState(0)

  const handonclick=()=>{
    setValue((currentValue)=>{
      const nextValue=currentValue+1
      console.log(nextValue)
      return nextValue;
    })

  }
  const handleClick1= ()=>{
    setTimeout(()=>{
      setValue((currentValue)=>{
        return currentValue+1
      })
    },1000)
  }
  
  return <>
    <h1>
      {value}
    </h1>
    <button type="button" className="btn" onClick={handleClick1}>Increment</button>
  </>;
};

export default UseStateGotcha;
