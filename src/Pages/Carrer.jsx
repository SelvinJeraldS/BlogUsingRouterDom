import React from 'react';
import Card from './../Components/Card';

const Carrer = ({data}) => {
    const Carrerdata = data.filter((ele) =>  ele.head === "Carrer");
  
    return (
      <div>
        
        {Carrerdata.map((element, index) => {
          return <Card element={element} index={index}  />;
        })}
      </div>
    );
};

export default Carrer;