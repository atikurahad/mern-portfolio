import React, { useState } from "react";

function Demo() {
  const [number,setNumber] = useState(0);
  return (
    <>
     <h1>Number : {number}</h1>
     <button onClick={()=>setNumber(number+1)}>Increment</button>
     <button onClick={()=>setNumber(number-1)}>Decrement</button>
     <button onClick={()=>setNumber(0)}>Reset</button>
    </>
  );
}
export default Demo;
