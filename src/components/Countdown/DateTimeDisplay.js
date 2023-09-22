import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span className='mt-3'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
