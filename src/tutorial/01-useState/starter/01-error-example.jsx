import { useState } from "react";
const ErrorExample = () => {
  const [count,setCount]=useState(0)
  const handleClick=()=>{
    setCount(count+1)

  }
  return <div>
    <h1>{count}</h1>
    <button type="button" className="btn" onClick={handleClick}>Increment</button>
  </div>;
};

export default ErrorExample;
