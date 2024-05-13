import React from 'react';
import Card from '../Components/Card';

const CyberSecurity = ({data}) => {
    const CyberSecuritydata = data.filter((ele) =>  ele.head === "CyberSecurity");
  
    return (
      <div>
        
        {CyberSecuritydata.map((ele, index) => {
          return <Card element={ele} index={index}  />;
        })}
      </div>
    );
};

export default CyberSecurity;