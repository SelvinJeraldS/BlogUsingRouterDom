import React from 'react';
import Card from '../Components/Card';


const DataScience = ({data}) => {
    const DataSciencedata = data.filter((ele) =>  ele.head === "DataScience");
  
    return (
      <div>
        
        {DataSciencedata.map((element, index) => {
          return <Card element={element} index={index}  />;
        })}
      </div>
    );
};

export default DataScience;