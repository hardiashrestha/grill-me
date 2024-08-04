import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResponses = [...responses, { user: input }];
    setResponses(newResponses);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { prompt: input });
      setResponses([...newResponses, { bot: response.data.answer }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Chatbot</h2>
      <div className="border p-4 rounded mt-2">
        {responses.map((res, index) => (
          <div key={index}>
            {res.user && <div className="font-semibold">You: {res.user}</div>}
            {res.bot && <div className="font-semibold text-blue-600">Bot: {res.bot}</div>}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;