import React, { useState } from 'react';
import axios from 'axios';

const TopicDetails = ({ topic }) => {
  const [details, setDetails] = useState('');
  const [questions, setQuestions] = useState([]);

  const fetchDetails = async () => {
    const response = await axios.get(`/api/topics/${topic}`);
    setDetails(response.data.details);
    setQuestions(response.data.questions);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{topic}</h2>
      <button onClick={fetchDetails} className="bg-blue-500 text-white p-2 rounded mt-2">Get Details</button>
      <p className="mt-2">{details}</p>
      <h3 className="font-semibold mt-4">Questions:</h3>
      {questions.map((q, index) => (
        <div key={index} className="border p-2 rounded my-1">{q}</div>
      ))}
    </div>
  );
};

export default TopicDetails;