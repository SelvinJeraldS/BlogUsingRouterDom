import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const {id}= useParams();
    return (
        <div>
        <h2>Card Detail</h2>
        <p>ID: {id}</p>
        {/* Display other details of the card */}
      </div>
    );
};

export default CardDetails;