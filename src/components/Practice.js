import React from 'react';
import Question from './Question';

const Practice = () => {
  const sampleQuestions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Practice</h2>
      {sampleQuestions.map((q, index) => (
        <Question key={index} question={q.question} options={q.options} />
      ))}
    </div>
  );
};

export default Practice;