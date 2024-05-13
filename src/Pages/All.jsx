import React from 'react';
import Card from '../Components/Card';

const All = ({data}) => {
    return (
        <div>
      
         {data.map((element,index)=>{

            return( 
                <Card element={element} index={index} />
            )
         })}  
        </div>
    );
};

export default All;