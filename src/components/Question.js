import React from 'react';

const Question = ({ question, options }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md my-4">
      <h2 className="text-lg font-semibold">{question}</h2>
      <ul className="mt-2">
        {options.map((option, index) => (
          <li key={index} className="border p-2 rounded my-1 hover:bg-gray-100 cursor-pointer">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;