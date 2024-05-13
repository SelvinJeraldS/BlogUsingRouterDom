import React from "react";
import Card from "./../Components/Card";
const Fullstack = ({ data }) => {
  const fsddata = data.filter((ele) =>  ele.head === "Fullstack Development");
  
  return (
    <div>
      
      {fsddata.map((element, index) => {
        return <Card element={element} index={index}  />;
      })}
    </div>
  );
};

export default Fullstack;
