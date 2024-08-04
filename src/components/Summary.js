import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md my-4">
      <h2 className="text-lg font-semibold">Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Summary;