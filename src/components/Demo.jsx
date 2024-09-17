import React from "react";

function Demo() {
  const capitals = ["dhaka", "delhi", "karachi", "hanoi", "london", "paris"];
  return (
    <>
      <h1 style={{ color: "red" }}>
        {capitals.map((city, i) => {
          return <p key={i}>{city}</p>;
        })}
      </h1>
      <p className="text-6xl text-purple-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
        nostrum deserunt et quos similique ut quae beatae sapiente iure,
        provident quod ducimus dolorem necessitatibus ab? Amet quia ipsam nihil
        blanditiis soluta, doloremque et dolores obcaecati fugit, suscipit odio
        illo ratione. Optio, modi. Quasi repudiandae ratione repellendus
        dignissimos porro soluta praesentium.
      </p>
    </>
  );
}
export default Demo;
