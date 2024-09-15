import React from "react";

function Demo() {
  const capitals = ["dhaka", "delhi", "karachi", "hanoi", "london", "paris"];
  return (
    <>
      <h1 style={{color:"red"}}>
        {capitals.map((city, i) => {
          return <p key={i}>{city}</p>;
        })}
      </h1>
    </>
  );
}
export default Demo;
